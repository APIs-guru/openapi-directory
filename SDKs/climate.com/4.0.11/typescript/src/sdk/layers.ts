import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Layers {
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
   * getV4LayersAsApplied - Retrieve a list of application activities
   *
   * Retrieve a list of application activities. The id in the response is used for  GET /v4/layers/asApplied/{activityId}/contents.
  **/
  getV4LayersAsApplied(
    req: operations.GetV4LayersAsAppliedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV4LayersAsAppliedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV4LayersAsAppliedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/layers/asApplied";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV4LayersAsAppliedResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.applicationActivities = httpRes?.data;
            }
            break;
          case httpRes?.status == 206:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.applicationActivities = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.empty = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
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
   * getV4LayersAsAppliedActivityIdContents - Retrieve the raw application activity
   *
   * Retrieve an individual application activity by id.  Ids are retrieved via the  /layers/asApplied route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`). The data is compressed using .zip format.
  **/
  getV4LayersAsAppliedActivityIdContents(
    req: operations.GetV4LayersAsAppliedActivityIdContentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV4LayersAsAppliedActivityIdContentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV4LayersAsAppliedActivityIdContentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/layers/asApplied/{activityId}/contents", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV4LayersAsAppliedActivityIdContentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 206:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 304:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.empty = httpRes?.data;
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
          case httpRes?.status == 416:
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
   * getV4LayersAsHarvested - Retrieve a list of harvest activities
   *
   * Retrieve a list of harvest activities. The id in the response is used for  GET /v4/layers/asHarvested/{activityId}/contents.
  **/
  getV4LayersAsHarvested(
    req: operations.GetV4LayersAsHarvestedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV4LayersAsHarvestedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV4LayersAsHarvestedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/layers/asHarvested";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV4LayersAsHarvestedResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.harvestActivities = httpRes?.data;
            }
            break;
          case httpRes?.status == 206:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.harvestActivities = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.empty = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
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
   * getV4LayersAsHarvestedActivityIdContents - Retrieve the raw harvest activity
   *
   * Retrieve an individual harvest activity by id.  Ids are retrieved via the  /layers/asHarvested route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`). The data is compressed using .zip format.
  **/
  getV4LayersAsHarvestedActivityIdContents(
    req: operations.GetV4LayersAsHarvestedActivityIdContentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV4LayersAsHarvestedActivityIdContentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV4LayersAsHarvestedActivityIdContentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/layers/asHarvested/{activityId}/contents", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV4LayersAsHarvestedActivityIdContentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 206:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 304:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.empty = httpRes?.data;
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
          case httpRes?.status == 416:
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
   * getV4LayersAsPlanted - Retrieve a list of planting activities
   *
   * Retrieve a list of planting activities. The id in the response is used for  GET /v4/layers/asPlanted/{activityId}/contents.
  **/
  getV4LayersAsPlanted(
    req: operations.GetV4LayersAsPlantedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV4LayersAsPlantedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV4LayersAsPlantedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/layers/asPlanted";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV4LayersAsPlantedResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.plantingActivities = httpRes?.data;
            }
            break;
          case httpRes?.status == 206:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.plantingActivities = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.empty = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
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
   * getV4LayersAsPlantedActivityIdContents - Retrieve the raw planting activity
   *
   * Retrieve an individual planting activity by id.  Ids are retrieved via the  /layers/asPlanted route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`).  The data is compressed using .zip format.
  **/
  getV4LayersAsPlantedActivityIdContents(
    req: operations.GetV4LayersAsPlantedActivityIdContentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV4LayersAsPlantedActivityIdContentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV4LayersAsPlantedActivityIdContentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/layers/asPlanted/{activityId}/contents", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV4LayersAsPlantedActivityIdContentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 206:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 304:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.empty = httpRes?.data;
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
          case httpRes?.status == 416:
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
   * getV4LayersScoutingObservations - Retrieve a list of scouting observations
   *
   * Retrieve a list of scouting observations created or updated by the user identified by the Authorization header.
  **/
  getV4LayersScoutingObservations(
    req: operations.GetV4LayersScoutingObservationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV4LayersScoutingObservationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV4LayersScoutingObservationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/layers/scoutingObservations";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV4LayersScoutingObservationsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scoutingObservations = httpRes?.data;
            }
            break;
          case httpRes?.status == 206:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scoutingObservations = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.empty = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
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
   * getV4LayersScoutingObservationsScoutingObservationId - Retrieve individual scouting observation
   *
   * Retrieve an individual scouting observation by id.  Ids are retrieved via the /layers/scoutingObservations route.
  **/
  getV4LayersScoutingObservationsScoutingObservationId(
    req: operations.GetV4LayersScoutingObservationsScoutingObservationIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV4LayersScoutingObservationsScoutingObservationIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV4LayersScoutingObservationsScoutingObservationIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/layers/scoutingObservations/{scoutingObservationId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV4LayersScoutingObservationsScoutingObservationIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scoutingObservation = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
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
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV4LayersScoutingObservationsScoutingObservationIdAttachments - Retrieve attachments associated with a given scouting observation.
   *
   * Retrieve attachments associated with a given scouting observation. Photos added to scouting notes in the FieldView app are capped to 20MB, and we won’t store photos larger than that in a scouting note.
  **/
  getV4LayersScoutingObservationsScoutingObservationIdAttachments(
    req: operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/layers/scoutingObservations/{scoutingObservationId}/attachments", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scoutingObservationAttachments = httpRes?.data;
            }
            break;
          case httpRes?.status == 206:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scoutingObservationAttachments = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.empty = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
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
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContents - Retrieve the binary contents of a scouting observation’s attachment.
   *
   * Photos added to scouting notes in the FieldView app are capped to `20MiB` (`20971520 bytes`), and we won’t store photos larger than that in a scouting note. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB` (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`).
  **/
  getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContents(
    req: operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v4/layers/scoutingObservations/{scoutingObservationId}/attachments/{attachmentId}/contents", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/jpeg`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 206:
            if (utils.MatchContentType(contentType, `image/jpeg`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
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
          case httpRes?.status == 416:
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
