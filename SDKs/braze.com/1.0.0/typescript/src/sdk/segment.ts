import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Segment {
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
   * segmentAnalytics - Segment Analytics
   *
   * This endpoint allows you to retrieve a daily series of the size of a segment over time for a segment.
   * 
   * ### Request Components
   * - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
   * 
   * ## Response
   * 
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR-REST-API-KEY
   * {
   *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
   *     "data" : [
   *         {
   *             "time" : (string) date as ISO 8601 date,
   *             "size" : (int) size of the segment on that date
   *         },
   *         ...
   *     ]
   * }
   * ```
  **/
  segmentAnalytics(
    req: operations.SegmentAnalyticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SegmentAnalyticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SegmentAnalyticsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/segments/data_series";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SegmentAnalyticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * segmentDetails - Segment Details
   *
   * This endpoint allows you to retrieve relevant information on the segment, which can be identified by the `segment_id`.
   * 
   * ### Request Components
   * - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
   * 
   * ## Response
   * 
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR-REST-API-KEY
   * {
   *       "message": (required, string) the status of the export, returns 'success' when completed without errors,
   *       "created_at" : (string) date created as ISO 8601 date,
   *       "updated_at" : (string) date last updated as ISO 8601 date,
   *       "name" : (string) segment name,
   *       "description" : (string) human-readable description of filters,
   *       "text_description" : (string) segment description, 
   *       "tags" : (array) tag names associated with the segment
   * }
   * ```
  **/
  segmentDetails(
    req: operations.SegmentDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SegmentDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SegmentDetailsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/segments/details";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SegmentDetailsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * segmentList - Segment List
   *
   * This endpoint allows you to export a list of segments, each of which will include its name, Segment API Identifier, and whether it has analytics tracking enabled. The segments are returned in groups of 100 sorted by time of creation (oldest to newest by default). Archived segments are not included.
   * 
   * ### Request Components
   * - [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)
   * 
   * 
   * ## Response
   * 
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR-REST-API-KEY
   * {
   *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
   *     "segments" : [
   *         {
   *             "id" : (string) Segment API Identifier,
   *             "name" : (string) segment name,
   *             "analytics_tracking_enabled" : (boolean) whether the segment has analytics tracking enabled,
   *             "tags" : (array) tag names associated with the segment
   *         },
   *         ...
   *     ]
   * }
   * ```
  **/
  segmentList(
    req: operations.SegmentListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SegmentListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SegmentListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/segments/list";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SegmentListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
