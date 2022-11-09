import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Retrieve a list of application activities. The id in the response is used for  GET /v4/layers/asApplied/{activityId}/contents.
    **/
    GetV4LayersAsApplied(req: operations.GetV4LayersAsAppliedRequest, config?: AxiosRequestConfig): Promise<operations.GetV4LayersAsAppliedResponse>;
    /**
     * Retrieve an individual application activity by id.  Ids are retrieved via the  /layers/asApplied route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`). The data is compressed using .zip format.
    **/
    GetV4LayersAsAppliedActivityIdContents(req: operations.GetV4LayersAsAppliedActivityIdContentsRequest, config?: AxiosRequestConfig): Promise<operations.GetV4LayersAsAppliedActivityIdContentsResponse>;
    /**
     * Retrieve a list of harvest activities. The id in the response is used for  GET /v4/layers/asHarvested/{activityId}/contents.
    **/
    GetV4LayersAsHarvested(req: operations.GetV4LayersAsHarvestedRequest, config?: AxiosRequestConfig): Promise<operations.GetV4LayersAsHarvestedResponse>;
    /**
     * Retrieve an individual harvest activity by id.  Ids are retrieved via the  /layers/asHarvested route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`). The data is compressed using .zip format.
    **/
    GetV4LayersAsHarvestedActivityIdContents(req: operations.GetV4LayersAsHarvestedActivityIdContentsRequest, config?: AxiosRequestConfig): Promise<operations.GetV4LayersAsHarvestedActivityIdContentsResponse>;
    /**
     * Retrieve a list of planting activities. The id in the response is used for  GET /v4/layers/asPlanted/{activityId}/contents.
    **/
    GetV4LayersAsPlanted(req: operations.GetV4LayersAsPlantedRequest, config?: AxiosRequestConfig): Promise<operations.GetV4LayersAsPlantedResponse>;
    /**
     * Retrieve an individual planting activity by id.  Ids are retrieved via the  /layers/asPlanted route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`).  The data is compressed using .zip format.
    **/
    GetV4LayersAsPlantedActivityIdContents(req: operations.GetV4LayersAsPlantedActivityIdContentsRequest, config?: AxiosRequestConfig): Promise<operations.GetV4LayersAsPlantedActivityIdContentsResponse>;
    /**
     * Retrieve a list of scouting observations created or updated by the user identified by the Authorization header.
    **/
    GetV4LayersScoutingObservations(req: operations.GetV4LayersScoutingObservationsRequest, config?: AxiosRequestConfig): Promise<operations.GetV4LayersScoutingObservationsResponse>;
    /**
     * Retrieve an individual scouting observation by id.  Ids are retrieved via the /layers/scoutingObservations route.
    **/
    GetV4LayersScoutingObservationsScoutingObservationId(req: operations.GetV4LayersScoutingObservationsScoutingObservationIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV4LayersScoutingObservationsScoutingObservationIdResponse>;
    /**
     * Retrieve attachments associated with a given scouting observation. Photos added to scouting notes in the FieldView app are capped to 20MB, and we won’t store photos larger than that in a scouting note.
    **/
    GetV4LayersScoutingObservationsScoutingObservationIdAttachments(req: operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse>;
    /**
     * Photos added to scouting notes in the FieldView app are capped to `20MiB` (`20971520 bytes`), and we won’t store photos larger than that in a scouting note. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB` (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`).
    **/
    GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContents(req: operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest, config?: AxiosRequestConfig): Promise<operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse>;
    /**
     * Send chunked data for an **Upload**.
    **/
    ChunkedUpload(req: operations.ChunkedUploadRequest, config?: AxiosRequestConfig): Promise<operations.ChunkedUploadResponse>;
    /**
     * Retrieve multiple **Boundaries** (up to 10 per request).
    **/
    FetchBoundaries(req: operations.FetchBoundariesRequest, config?: AxiosRequestConfig): Promise<operations.FetchBoundariesResponse>;
    /**
     * Retrieve a **Boundary** by ID.
    **/
    FetchBoundaryById(req: operations.FetchBoundaryByIdRequest, config?: AxiosRequestConfig): Promise<operations.FetchBoundaryByIdResponse>;
    /**
     * Retrieve a given **farm organization** by organization type and ID.
    **/
    FetchFarmOrganizationByTypeAndId(req: operations.FetchFarmOrganizationByTypeAndIdRequest, config?: AxiosRequestConfig): Promise<operations.FetchFarmOrganizationByTypeAndIdResponse>;
    /**
     * Retrieve a given **Field** by ID.
    **/
    FetchFieldById(req: operations.FetchFieldByIdRequest, config?: AxiosRequestConfig): Promise<operations.FetchFieldByIdResponse>;
    /**
     * Retrieve list of **Fields**. Filter the results by field name if the `fieldName` query parameter is specified.
    **/
    FetchFields(req: operations.FetchFieldsRequest, config?: AxiosRequestConfig): Promise<operations.FetchFieldsResponse>;
    /**
     * Check the status of an **Upload** by ID.
    **/
    FetchUploadStatusById(req: operations.FetchUploadStatusByIdRequest, config?: AxiosRequestConfig): Promise<operations.FetchUploadStatusByIdResponse>;
    /**
     * Check the status of multiple **Uploads** (up to 100 per request).
    **/
    FetchUploadStatuses(req: operations.FetchUploadStatusesRequest, config?: AxiosRequestConfig): Promise<operations.FetchUploadStatusesResponse>;
    /**
     * Retrieve a resource owner for the given `resourceOwnerId`.
    **/
    GetResourceOwner(req: operations.GetResourceOwnerRequest, config?: AxiosRequestConfig): Promise<operations.GetResourceOwnerResponse>;
    /**
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
    PostUpload(req: operations.PostUploadRequest, config?: AxiosRequestConfig): Promise<operations.PostUploadResponse>;
    /**
     * Upload a **Boundary** entry by passing the geometry of the boundary. This will store the boundary but will not create field in Climate FieldView and will not link to an existing field in Climate FieldView.
     * This is restricted to callers with **boundaries:write** scope.
     * To upload a field boundary for field creation in Climate FieldView, please use **POST /v4/uploads**.
    **/
    UploadBoundary(req: operations.UploadBoundaryRequest, config?: AxiosRequestConfig): Promise<operations.UploadBoundaryResponse>;
}
export {};
