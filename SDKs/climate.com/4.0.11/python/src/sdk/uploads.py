import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Uploads:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def chunked_upload(self, request: operations.ChunkedUploadRequest) -> operations.ChunkedUploadResponse:
        r"""Chunked upload of data
        Send chunked data for an **Upload**.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/uploads/{uploadId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChunkedUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            res.headers = r.headers
            
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 503:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def fetch_upload_status_by_id(self, request: operations.FetchUploadStatusByIDRequest) -> operations.FetchUploadStatusByIDResponse:
        r"""Retrieve Upload status
        Check the status of an **Upload** by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/uploads/{uploadId}/status", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchUploadStatusByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UploadStatus])
                res.upload_status = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 503:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def fetch_upload_statuses(self, request: operations.FetchUploadStatusesRequest) -> operations.FetchUploadStatusesResponse:
        r"""Retrieve Upload statuses in batch
        Check the status of multiple **Uploads** (up to 100 per request).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/uploads/status/query"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FetchUploadStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UploadStatuses])
                res.upload_statuses = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 503:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def post_upload(self, request: operations.PostUploadRequest) -> operations.PostUploadResponse:
        r"""Initiate a new upload
        Step one in uploading a data product. The method will return an **Upload** ID which the caller will use in subsequent `PUT` requests.
        The following `contentTypes` may be uploaded:
            <details><summary>__image/vnd.climate.thermal.geotiff__</summary>
        
            Allows for the upload of a thermal image. The image is a single band geotiff with 64 bit signed floating point values in degrees Celsius. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.
        
            The following metadata entries are required to be embedded in the geotiff:
              * acquisitionStartDate - ISO8601 date
              * acquisitionEndDate - ISO8601 date
              * isCalibrated - boolean
        
            The following metadata entries are optional:
              * sourceId - uuid referencing the asset in the partner's system
              * fieldId - uuid referencing a field in the Climate system
              * boundaryId - uuid referencing a boundary in the Climate system
              * brandId - uuid referencing a partner's branding in the Climate system
              * name - name of the layer. The maximum number of characters that will be accepted as input is 20.
        
            Requires either imagery:write or platform scope.
          </details>
          <details><summary>__image/vnd.climate.ndvi.geotiff__</summary>
        
            Allows for the upload of a NDVI image. The image is a single band geotiff with 64 bit signed floating point values in the range of -1 to 1 inclusive. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.
        
            The following metadata entries are required to be embedded in the geotiff:
              * acquisitionStartDate - ISO8601 date
              * acquisitionEndDate - ISO8601 date
        
            The following metadata entries are optional:
              * sourceId - uuid referencing the asset in the partner's system
              * fieldId - uuid referencing a field in the Climate system
              * boundaryId - uuid referencing a boundary in the Climate system
              * brandId - uuid referencing a partner's branding in the Climate system
              * name - name of the layer. The maximum number of characters that will be accepted as input is 20.
        
            Requires either imagery:write or platform scope.
          </details>
          <details><summary> __image/vnd.climate.rgb.geotiff__</summary>
        
            Allows for the upload of a true color image. The image is a multi band geotiff with 24-bit composite values. Each band is 8 bits with values in the range of 0 to 255. The Coordinate Reference System (CRS) must be UTM with WGS84 datum. The geotiff must contain 3 bands in the order Red, Green, Blue.
        
            The following metadata entries are required to be embedded in the geotiff:
              * acquisitionStartDate - ISO8601 date
              * acquisitionEndDate - ISO8601 date
              * isCalibrated - boolean
        
            The following metadata entries are optional:
              * sourceId - uuid referencing the asset in the partner's system
              * fieldId - uuid referencing a field in the Climate system
              * boundaryId - uuid referencing a boundary in the Climate system
              * brandId - uuid referencing a partner's branding in the Climate system
              * reflectanceComputeMethod - either TOA or GROUND
              * name - name of the layer. The maximum number of characters that will be accepted as input is 20.
        
            Requires either imagery:write or platform scope.
          </details>
          <details><summary> __image/vnd.climate.rgb-nir.geotiff__</summary>
        
            Allows for the upload of a Near Infrared (NIR) image. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.
        
            The following metadata entries are required to be embedded in the geotiff:
              * acquisitionStartDate - ISO8601 date
              * acquisitionEndDate - ISO8601 date
              * isCalibrated - boolean
        
            The following metadata entries are optional:
              * sourceId - uuid referencing the asset in the partner's system
              * fieldId - uuid referencing a field in the Climate system
              * boundaryId - uuid referencing a boundary in the Climate system
              * brandId - uuid referencing a partner's branding in the Climate system
              * reflectanceComputeMethod - either TOA or GROUND
              * name - name of the layer. The maximum number of characters that will be accepted as input is 20.
        
            Requires either imagery:write or platform scope.
          </details>
          <details><summary>__image/vnd.climate.rgb-cir.geotiff__</summary>
        
            Allows for the upload of a Color Infrared (CIR) image. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.
        
            The following metadata entries are required to be embedded in the geotiff:
              * acquisitionStartDate - ISO8601 date
              * acquisitionEndDate - ISO8601 date
              * isCalibrated - boolean
        
            The following metadata entries are optional:
              * sourceId - uuid referencing the asset in the partner's system
              * fieldId - uuid referencing a field in the Climate system
              * boundaryId - uuid referencing a boundary in the Climate system
              * brandId - uuid referencing a partner's branding in the Climate system
              * reflectanceComputeMethod - either TOA or GROUND
              * name - name of the layer. The maximum number of characters that will be accepted as input is 20.
        
            Requires either imagery:write or platform scope.
          </details>
          <details><summary> __application/vnd.climate.field.geojson__</summary>
        
            Allows for the upload of a valid geojson feature (https://tools.ietf.org/html/rfc7946#section-3.2).
        
            The feature must contain the following entry in the properties section:
              * fieldName
        
            Optionally, the feature may contain the following entries in the properties properties:
              * farmName - defaults to *default*
              * clientName - defaults to *default*
        
            Additionally, the type field of the geometry field must one of the following:
              * Polygon
              * MultiPolygon
        
            The coordinates field of the geometry field must contain no more than 10,000 points.
            The total area of the field may not be larger than 20,000 acres in size.
        
            Requires either fields:write or platform scope.
          </details>
          <details><summary> __application/vnd.climate.rx.planting.shp__</summary>
        
            Allows for the upload of a planting prescription in shapefile format.  The upload must be an archive in the zip format.  It should contain one and only one of each of the following file types:
              * .shp
              * .shx
              * .dbf
        
            All files with the above suffixes must have the same prefix, ie Back40.shp, Back40.shx and Back40.dbf.
        
            Requires either rx:write or platform scope.
          </details>
          <details><summary> __application/vnd.climate.modus.xml__</summary>
        
            Allows for the upload of a soil sampling file in the modus 1.0 format with some restrictions.  The upload must be a single xml file.
        
            The following elements are required to be present in the modus file.
              * EventCode - Max length of 64 bytes
              * EventDate - Must be in ISO8601
              * SoilSample - Has a maxOccurs of 20k
              * Depth - Has a maxOccurs of 50
              * LabName - Must be non-empty.
              * StartingDepth - 0 to 36 inclusive, default 0
              * EndingDepth - 1 - 36 inclusive, default 1
              * ColumnDepth
              * DepthUnit - must be inches
              * Geometry - point in wgs84
            
            Requires the soil:write scope.
           </details>
           <details><summary> __application/vnd.climate.stand-count.geojson__</summary>
        
            Allows for the upload of a valid [geojson feature collection](https://tools.ietf.org/html/rfc7946#section-3.3).
        
            Each feature in the collection must contain the following entry in its properties section:
              * StandPPA - A count of the number of plants per acre:
        
            Additionally, the type field of each feature's geometry field must be:
              * Point
        
            Requires `imagery:write` scope.
           </details>
           <details><summary> __application/vnd.climate.weed-count.geojson__</summary>
        
            Allows for the upload of a valid [geojson feature collection](https://tools.ietf.org/html/rfc7946#section-3.3).
        
            Each feature in the collection must contain the following entry in its properties section:
              * StandPPA - A count of the number of plants per acre:
        
            Additionally, the type field of each feature's geometry field must be:
              * Point
        
            Requires `imagery:write` scope.
           </details>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/uploads"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                res.created_upload = r.content
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out
        elif r.status_code == 503:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    