import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Uploads {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * chunkedUpload - Chunked upload of data
   *
   * Send chunked data for an **Upload**.
  **/
  chunkedUpload(
    req: operations.ChunkedUploadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ChunkedUploadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ChunkedUploadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/uploads/{uploadId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ChunkedUploadResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchUploadStatusById - Retrieve Upload status
   *
   * Check the status of an **Upload** by ID.
  **/
  fetchUploadStatusById(
    req: operations.FetchUploadStatusByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUploadStatusByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUploadStatusByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/uploads/{uploadId}/status", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchUploadStatusByIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.uploadStatus = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * fetchUploadStatuses - Retrieve Upload statuses in batch
   *
   * Check the status of multiple **Uploads** (up to 100 per request).
  **/
  fetchUploadStatuses(
    req: operations.FetchUploadStatusesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchUploadStatusesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchUploadStatusesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/uploads/status/query";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FetchUploadStatusesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.uploadStatuses = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postUpload - Initiate a new upload
   *
   * Step one in uploading a data product. The method will return an **Upload** ID which the caller will use in subsequent `PUT` requests.
   * The following `contentTypes` may be uploaded:
   *     <details><summary>__image/vnd.climate.thermal.geotiff__</summary>
   * 
   *     Allows for the upload of a thermal image. The image is a single band geotiff with 64 bit signed floating point values in degrees Celsius. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.
   * 
   *     The following metadata entries are required to be embedded in the geotiff:
   *       * acquisitionStartDate - ISO8601 date
   *       * acquisitionEndDate - ISO8601 date
   *       * isCalibrated - boolean
   * 
   *     The following metadata entries are optional:
   *       * sourceId - uuid referencing the asset in the partner's system
   *       * fieldId - uuid referencing a field in the Climate system
   *       * boundaryId - uuid referencing a boundary in the Climate system
   *       * brandId - uuid referencing a partner's branding in the Climate system
   *       * name - name of the layer. The maximum number of characters that will be accepted as input is 20.
   * 
   *     Requires either imagery:write or platform scope.
   *   </details>
   *   <details><summary>__image/vnd.climate.ndvi.geotiff__</summary>
   * 
   *     Allows for the upload of a NDVI image. The image is a single band geotiff with 64 bit signed floating point values in the range of -1 to 1 inclusive. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.
   * 
   *     The following metadata entries are required to be embedded in the geotiff:
   *       * acquisitionStartDate - ISO8601 date
   *       * acquisitionEndDate - ISO8601 date
   * 
   *     The following metadata entries are optional:
   *       * sourceId - uuid referencing the asset in the partner's system
   *       * fieldId - uuid referencing a field in the Climate system
   *       * boundaryId - uuid referencing a boundary in the Climate system
   *       * brandId - uuid referencing a partner's branding in the Climate system
   *       * name - name of the layer. The maximum number of characters that will be accepted as input is 20.
   * 
   *     Requires either imagery:write or platform scope.
   *   </details>
   *   <details><summary> __image/vnd.climate.rgb.geotiff__</summary>
   * 
   *     Allows for the upload of a true color image. The image is a multi band geotiff with 24-bit composite values. Each band is 8 bits with values in the range of 0 to 255. The Coordinate Reference System (CRS) must be UTM with WGS84 datum. The geotiff must contain 3 bands in the order Red, Green, Blue.
   * 
   *     The following metadata entries are required to be embedded in the geotiff:
   *       * acquisitionStartDate - ISO8601 date
   *       * acquisitionEndDate - ISO8601 date
   *       * isCalibrated - boolean
   * 
   *     The following metadata entries are optional:
   *       * sourceId - uuid referencing the asset in the partner's system
   *       * fieldId - uuid referencing a field in the Climate system
   *       * boundaryId - uuid referencing a boundary in the Climate system
   *       * brandId - uuid referencing a partner's branding in the Climate system
   *       * reflectanceComputeMethod - either TOA or GROUND
   *       * name - name of the layer. The maximum number of characters that will be accepted as input is 20.
   * 
   *     Requires either imagery:write or platform scope.
   *   </details>
   *   <details><summary> __image/vnd.climate.rgb-nir.geotiff__</summary>
   * 
   *     Allows for the upload of a Near Infrared (NIR) image. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.
   * 
   *     The following metadata entries are required to be embedded in the geotiff:
   *       * acquisitionStartDate - ISO8601 date
   *       * acquisitionEndDate - ISO8601 date
   *       * isCalibrated - boolean
   * 
   *     The following metadata entries are optional:
   *       * sourceId - uuid referencing the asset in the partner's system
   *       * fieldId - uuid referencing a field in the Climate system
   *       * boundaryId - uuid referencing a boundary in the Climate system
   *       * brandId - uuid referencing a partner's branding in the Climate system
   *       * reflectanceComputeMethod - either TOA or GROUND
   *       * name - name of the layer. The maximum number of characters that will be accepted as input is 20.
   * 
   *     Requires either imagery:write or platform scope.
   *   </details>
   *   <details><summary>__image/vnd.climate.rgb-cir.geotiff__</summary>
   * 
   *     Allows for the upload of a Color Infrared (CIR) image. The Coordinate Reference System (CRS) must be UTM with WGS84 datum.
   * 
   *     The following metadata entries are required to be embedded in the geotiff:
   *       * acquisitionStartDate - ISO8601 date
   *       * acquisitionEndDate - ISO8601 date
   *       * isCalibrated - boolean
   * 
   *     The following metadata entries are optional:
   *       * sourceId - uuid referencing the asset in the partner's system
   *       * fieldId - uuid referencing a field in the Climate system
   *       * boundaryId - uuid referencing a boundary in the Climate system
   *       * brandId - uuid referencing a partner's branding in the Climate system
   *       * reflectanceComputeMethod - either TOA or GROUND
   *       * name - name of the layer. The maximum number of characters that will be accepted as input is 20.
   * 
   *     Requires either imagery:write or platform scope.
   *   </details>
   *   <details><summary> __application/vnd.climate.field.geojson__</summary>
   * 
   *     Allows for the upload of a valid geojson feature (https://tools.ietf.org/html/rfc7946#section-3.2).
   * 
   *     The feature must contain the following entry in the properties section:
   *       * fieldName
   * 
   *     Optionally, the feature may contain the following entries in the properties properties:
   *       * farmName - defaults to *default*
   *       * clientName - defaults to *default*
   * 
   *     Additionally, the type field of the geometry field must one of the following:
   *       * Polygon
   *       * MultiPolygon
   * 
   *     The coordinates field of the geometry field must contain no more than 10,000 points.
   *     The total area of the field may not be larger than 20,000 acres in size.
   * 
   *     Requires either fields:write or platform scope.
   *   </details>
   *   <details><summary> __application/vnd.climate.rx.planting.shp__</summary>
   * 
   *     Allows for the upload of a planting prescription in shapefile format.  The upload must be an archive in the zip format.  It should contain one and only one of each of the following file types:
   *       * .shp
   *       * .shx
   *       * .dbf
   * 
   *     All files with the above suffixes must have the same prefix, ie Back40.shp, Back40.shx and Back40.dbf.
   * 
   *     Requires either rx:write or platform scope.
   *   </details>
   *   <details><summary> __application/vnd.climate.modus.xml__</summary>
   * 
   *     Allows for the upload of a soil sampling file in the modus 1.0 format with some restrictions.  The upload must be a single xml file.
   * 
   *     The following elements are required to be present in the modus file.
   *       * EventCode - Max length of 64 bytes
   *       * EventDate - Must be in ISO8601
   *       * SoilSample - Has a maxOccurs of 20k
   *       * Depth - Has a maxOccurs of 50
   *       * LabName - Must be non-empty.
   *       * StartingDepth - 0 to 36 inclusive, default 0
   *       * EndingDepth - 1 - 36 inclusive, default 1
   *       * ColumnDepth
   *       * DepthUnit - must be inches
   *       * Geometry - point in wgs84
   *     
   *     Requires the soil:write scope.
   *    </details>
   *    <details><summary> __application/vnd.climate.stand-count.geojson__</summary>
   * 
   *     Allows for the upload of a valid [geojson feature collection](https://tools.ietf.org/html/rfc7946#section-3.3).
   * 
   *     Each feature in the collection must contain the following entry in its properties section:
   *       * StandPPA - A count of the number of plants per acre:
   * 
   *     Additionally, the type field of each feature's geometry field must be:
   *       * Point
   * 
   *     Requires `imagery:write` scope.
   *    </details>
   *    <details><summary> __application/vnd.climate.weed-count.geojson__</summary>
   * 
   *     Allows for the upload of a valid [geojson feature collection](https://tools.ietf.org/html/rfc7946#section-3.3).
   * 
   *     Each feature in the collection must contain the following entry in its properties section:
   *       * StandPPA - A count of the number of plants per acre:
   * 
   *     Additionally, the type field of each feature's geometry field must be:
   *       * Point
   * 
   *     Requires `imagery:write` scope.
   *    </details>
  **/
  postUpload(
    req: operations.PostUploadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUploadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUploadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/uploads";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostUploadResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createdUpload = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
