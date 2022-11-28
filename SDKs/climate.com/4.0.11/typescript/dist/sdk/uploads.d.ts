import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Uploads {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * chunkedUpload - Chunked upload of data
     *
     * Send chunked data for an **Upload**.
    **/
    chunkedUpload(req: operations.ChunkedUploadRequest, config?: AxiosRequestConfig): Promise<operations.ChunkedUploadResponse>;
    /**
     * fetchUploadStatusById - Retrieve Upload status
     *
     * Check the status of an **Upload** by ID.
    **/
    fetchUploadStatusById(req: operations.FetchUploadStatusByIdRequest, config?: AxiosRequestConfig): Promise<operations.FetchUploadStatusByIdResponse>;
    /**
     * fetchUploadStatuses - Retrieve Upload statuses in batch
     *
     * Check the status of multiple **Uploads** (up to 100 per request).
    **/
    fetchUploadStatuses(req: operations.FetchUploadStatusesRequest, config?: AxiosRequestConfig): Promise<operations.FetchUploadStatusesResponse>;
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
    postUpload(req: operations.PostUploadRequest, config?: AxiosRequestConfig): Promise<operations.PostUploadResponse>;
}
