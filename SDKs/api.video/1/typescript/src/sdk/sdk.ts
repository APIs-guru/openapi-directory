import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://ws.api.video",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      this._securityClient = this._defaultClient;
    }
    
  }
  
  /**
   * deleteVideo - Delete a video
   *
   * If you do not need a video any longer, you can send a request to delete it. All you need is the videoId. Tutorials using [video deletion](https://api.video/blog/endpoints/video-delete).
  **/
  deleteVideo(
    req: operations.DeleteVideoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteVideoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteVideoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/videos/{videoId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteVideoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteWebhook - Delete a Webhook
   *
   * This endpoint will delete the indicated webhook.
  **/
  deleteWebhook(
    req: operations.DeleteWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteWebhookRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/webhooks/{webhookId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteLiveStreamsLiveStreamId - Delete a live stream
  **/
  deleteLiveStreamsLiveStreamId(
    req: operations.DeleteLiveStreamsLiveStreamIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteLiveStreamsLiveStreamIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteLiveStreamsLiveStreamIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/live-streams/{liveStreamId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteLiveStreamsLiveStreamIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteLiveStreamsLiveStreamIdThumbnail - Delete a thumbnail
   *
   * Send the unique identifier for a live stream to delete it from the system.
  **/
  deleteLiveStreamsLiveStreamIdThumbnail(
    req: operations.DeleteLiveStreamsLiveStreamIdThumbnailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteLiveStreamsLiveStreamIdThumbnailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteLiveStreamsLiveStreamIdThumbnailRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/live-streams/{liveStreamId}/thumbnail", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteLiveStreamsLiveStreamIdThumbnailResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.liveStream = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deletePlayersPlayerId - Delete a player
   *
   * Delete a player if you no longer need it. You can delete any player that you have the player ID for.
  **/
  deletePlayersPlayerId(
    req: operations.DeletePlayersPlayerIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletePlayersPlayerIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletePlayersPlayerIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/players/{playerId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeletePlayersPlayerIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deletePlayersPlayerIdLogo - Delete logo
  **/
  deletePlayersPlayerIdLogo(
    req: operations.DeletePlayersPlayerIdLogoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletePlayersPlayerIdLogoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletePlayersPlayerIdLogoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/players/{playerId}/logo", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeletePlayersPlayerIdLogoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deletePlayersPlayerIdLogo204ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteUploadTokensUploadToken - Delete an upload token
   *
   * Delete an existing upload token. This is especially useful for tokens you may have created that do not expire.
  **/
  deleteUploadTokensUploadToken(
    req: operations.DeleteUploadTokensUploadTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUploadTokensUploadTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUploadTokensUploadTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/upload-tokens/{uploadToken}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUploadTokensUploadTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteVideosVideoIdCaptionsLanguage - Delete a caption
   *
   * Delete a caption in a specific language by providing the video ID for the video you want to delete the caption from and the language the caption is in.
  **/
  deleteVideosVideoIdCaptionsLanguage(
    req: operations.DeleteVideosVideoIdCaptionsLanguageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteVideosVideoIdCaptionsLanguageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteVideosVideoIdCaptionsLanguageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/videos/{videoId}/captions/{language}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteVideosVideoIdCaptionsLanguageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteVideosVideoIdChaptersLanguage - Delete a chapter
  **/
  deleteVideosVideoIdChaptersLanguage(
    req: operations.DeleteVideosVideoIdChaptersLanguageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteVideosVideoIdChaptersLanguageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteVideosVideoIdChaptersLanguageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/videos/{videoId}/chapters/{language}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteVideosVideoIdChaptersLanguageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getWebhook - Show Webhook details
   *
   * This call provides the same JSON information provided on Webjhook creation.
  **/
  getWebhook(
    req: operations.GetWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWebhookRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/webhooks/{webhookId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.webhook = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getVideo - Show a video
   *
   * This call provides the same JSON information provided on video creation. For private videos, it will generate a unique token url. Use this to retrieve any details you need about a video, or set up a private viewing URL. Tutorials using [video GET](https://api.video/blog/endpoints/video-get).
  **/
  getVideo(
    req: operations.GetVideoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVideoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVideoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/videos/{videoId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetVideoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.video = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getVideoStatus - Show video status
   *
   * This API provides upload status & encoding status to determine when the video is uploaded or ready to playback. Once encoding is completed, the response also lists the available stream qualities. Tutorials using [video status](https://api.video/blog/endpoints/video-status).
  **/
  getVideoStatus(
    req: operations.GetVideoStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVideoStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVideoStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/videos/{videoId}/status", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetVideoStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.videostatus = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAccount - Show account
   *
   * Deprecated. Authenticate and get a token, then you can use the bearer token here to retrieve details about your account.
  **/
  getAccount(
    req: operations.GetAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/account";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.account = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAnalyticsLiveStreamsLiveStreamId - List live stream player sessions
  **/
  getAnalyticsLiveStreamsLiveStreamId(
    req: operations.GetAnalyticsLiveStreamsLiveStreamIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAnalyticsLiveStreamsLiveStreamIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAnalyticsLiveStreamsLiveStreamIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/analytics/live-streams/{liveStreamId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetAnalyticsLiveStreamsLiveStreamIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.rawStatisticsListLiveStreamAnalyticsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAnalyticsSessionsSessionIdEvents - List player session events
   *
   * Useful to track and measure video's engagement.
  **/
  getAnalyticsSessionsSessionIdEvents(
    req: operations.GetAnalyticsSessionsSessionIdEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAnalyticsSessionsSessionIdEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAnalyticsSessionsSessionIdEventsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/analytics/sessions/{sessionId}/events", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetAnalyticsSessionsSessionIdEventsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.rawStatisticsListPlayerSessionEventsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAnalyticsVideosVideoId - List video player sessions
   *
   * Retrieve all available user sessions for a specific video. Tutorials that use the [analytics endpoint](https://api.video/blog/endpoints/analytics).
  **/
  getAnalyticsVideosVideoId(
    req: operations.GetAnalyticsVideosVideoIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAnalyticsVideosVideoIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAnalyticsVideosVideoIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/analytics/videos/{videoId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetAnalyticsVideosVideoIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.rawStatisticsListSessionsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getLiveStreams - List all live streams
   *
   * With no parameters added to the url, this will return all livestreams. Query by name or key to limit the list.
  **/
  getLiveStreams(
    req: operations.GetLiveStreamsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLiveStreamsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLiveStreamsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/live-streams";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetLiveStreamsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.liveStreamListResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getLiveStreamsLiveStreamId - Show live stream
   *
   * Supply a LivestreamId, and you'll get all the details for streaming into, and watching the livestream. Tutorials that use the [show livestream endpoint](https://api.video/blog/endpoints/live-stream-status).
  **/
  getLiveStreamsLiveStreamId(
    req: operations.GetLiveStreamsLiveStreamIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLiveStreamsLiveStreamIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLiveStreamsLiveStreamIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/live-streams/{liveStreamId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetLiveStreamsLiveStreamIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.liveStream = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPlayers - List all players
   *
   * Retrieve a list of all the players you created, as well as details about each one.
   * Tutorials that use the [player endpoint](https://api.video/blog/endpoints/player).
  **/
  getPlayers(
    req: operations.GetPlayersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPlayersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPlayersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/players";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetPlayersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.playersListResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequest = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPlayersPlayerId - Show a player
   *
   * Use a player ID to retrieve details about the player and display it for viewers.
  **/
  getPlayersPlayerId(
    req: operations.GetPlayersPlayerIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPlayersPlayerIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPlayersPlayerIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/players/{playerId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPlayersPlayerIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.player = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUploadTokens - List all active upload tokens.
   *
   * A delegated token is used to allow secure uploads without exposing your API key. Use this endpoint to retrieve a list of all currently active delegated tokens.
   * Tutorials using [delegated upload](https://api.video/blog/endpoints/delegated-upload).
  **/
  getUploadTokens(
    req: operations.GetUploadTokensRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUploadTokensResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUploadTokensRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/upload-tokens";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetUploadTokensResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tokenListResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getUploadTokensUploadToken - Show upload token
   *
   * You can retrieve details about a specific upload token if you have the unique identifier for the upload token. Add it in the path of the endpoint. Details include time-to-live (ttl), when the token was created, and when it will expire.
  **/
  getUploadTokensUploadToken(
    req: operations.GetUploadTokensUploadTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUploadTokensUploadTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUploadTokensUploadTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/upload-tokens/{uploadToken}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUploadTokensUploadTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.uploadToken = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getVideosVideoIdCaptions - List video captions
   *
   * Retrieve a list of available captions for the videoId you provide.
  **/
  getVideosVideoIdCaptions(
    req: operations.GetVideosVideoIdCaptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVideosVideoIdCaptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVideosVideoIdCaptionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/videos/{videoId}/captions", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetVideosVideoIdCaptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.captionsListResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getVideosVideoIdCaptionsLanguage - Show a caption
   *
   * Display a caption for a video in a specific language. If the language is available, the caption is returned. Otherwise, you will get a response indicating the caption was not found.
   * Tutorials that use the [captions endpoint](https://api.video/blog/endpoints/captions).
  **/
  getVideosVideoIdCaptionsLanguage(
    req: operations.GetVideosVideoIdCaptionsLanguageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVideosVideoIdCaptionsLanguageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVideosVideoIdCaptionsLanguageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/videos/{videoId}/captions/{language}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetVideosVideoIdCaptionsLanguageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.subtitle = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getVideosVideoIdChapters - List video chapters
   *
   * Retrieve a list of all chapters for a specified video.
  **/
  getVideosVideoIdChapters(
    req: operations.GetVideosVideoIdChaptersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVideosVideoIdChaptersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVideosVideoIdChaptersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/videos/{videoId}/chapters", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetVideosVideoIdChaptersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.chaptersListResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getVideosVideoIdChaptersLanguage - Show a chapter
   *
   * Chapters help your viewers find the sections of the video they are most interested in viewing. Tutorials that use the [chapters endpoint](https://api.video/blog/endpoints/chapters).
  **/
  getVideosVideoIdChaptersLanguage(
    req: operations.GetVideosVideoIdChaptersLanguageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVideosVideoIdChaptersLanguageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVideosVideoIdChaptersLanguageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/videos/{videoId}/chapters/{language}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetVideosVideoIdChaptersLanguageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.chapter = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listVideos - List all videos
   *
   * Requests to this endpoint return a list of your videos (with all their details). With no parameters added to this query, the API returns all videos. You can filter what videos the API returns using the parameters described below.  We have [several tutorials](https://api.video/blog/endpoints/video-list) that demonstrate this endpoint.
  **/
  listVideos(
    req: operations.ListVideosRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListVideosResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListVideosRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/videos";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ListVideosResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.videosListResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequest = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listWebhooks - List all webhooks
   *
   * Requests to this endpoint return a list of your webhooks (with all their details). You can filter what the webhook list that the API returns using the parameters described below.
  **/
  listWebhooks(
    req: operations.ListWebhooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListWebhooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListWebhooksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/webhooks";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.ListWebhooksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.webhooksListResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * patchVideo - Update a video
   *
   * Use this endpoint to update the parameters associated with your video. The video you are updating is determined by the video ID you provide in the path. For each parameter you want to update, include the update in the request body. NOTE: If you are updating an array, you must provide the entire array as what you provide here overwrites what is in the system rather than appending to it. Tutorials using [video update](https://api.video/blog/endpoints/video-update).
  **/
  patchVideo(
    req: operations.PatchVideoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchVideoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchVideoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/videos/{videoId}", req.pathParams);

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
        method: "patch",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PatchVideoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.video = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequest = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * patchLiveStreamsLiveStreamId - Update a live stream
   *
   * Use this endpoint to update the player, or to turn recording on/off (saving a copy of the livestream). NOTE: If the livestream is actively streaming, changing the recording status will only affect the NEXT stream.    The public=false 'private livestream' is available as a BETA feature, and should be limited to livestreams of 3,000 viewers or fewer.
  **/
  patchLiveStreamsLiveStreamId(
    req: operations.PatchLiveStreamsLiveStreamIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchLiveStreamsLiveStreamIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchLiveStreamsLiveStreamIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/live-streams/{liveStreamId}", req.pathParams);

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
        method: "patch",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PatchLiveStreamsLiveStreamIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.liveStream = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequest = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * patchPlayersPlayerId - Update a player
   *
   * Use a player ID to update specific details for a player. NOTE: It may take up to 10 min before the new player configuration is available from our CDN.
  **/
  patchPlayersPlayerId(
    req: operations.PatchPlayersPlayerIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchPlayersPlayerIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchPlayersPlayerIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/players/{playerId}", req.pathParams);

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "patch",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PatchPlayersPlayerIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.player = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * patchVideosVideoIdCaptionsLanguage - Update caption
   *
   * To have the captions on automatically, use this PATCH to set default: true.
  **/
  patchVideosVideoIdCaptionsLanguage(
    req: operations.PatchVideosVideoIdCaptionsLanguageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchVideosVideoIdCaptionsLanguageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchVideosVideoIdCaptionsLanguageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/videos/{videoId}/captions/{language}", req.pathParams);

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
        method: "patch",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PatchVideosVideoIdCaptionsLanguageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.subtitle = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequest = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * patchVideosVideoIdThumbnail - Pick a thumbnail
   *
   * Pick a thumbnail from the given time code. If you'd like to upload an image for your thumbnail, use the [Upload a Thumbnail](https://docs.api.video/reference#post_videos-videoid-thumbnail) endpoint. There may be a short delay for the thumbnail to update.
   * Tutorials using [Thumbnail picking](https://api.video/blog/endpoints/video-pick-a-thumbnail).
  **/
  patchVideosVideoIdThumbnail(
    req: operations.PatchVideosVideoIdThumbnailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchVideosVideoIdThumbnailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchVideosVideoIdThumbnailRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/videos/{videoId}/thumbnail", req.pathParams);

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
        method: "patch",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PatchVideosVideoIdThumbnailResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.video = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postVideo - Create a video
   *
   * To create a video, you create its container&parameters first, before adding the video file (exception - when using an existing HTTP source).
   * * Videos are public by default. [Learn about Private videos](https://api.video/blog/tutorials/tutorial-private-videos)
   * * Up to 6 responsive video streams will be created (from 240p to 4k)
   * * Mp4 encoded versions are created at the highest quality (max 1080p) by default.
   * * Panoramic videos are for videos recorded in 360 degrees.  You can toggle this after your 360 video upload.
   * * Searchable parameters: title, description, tags and metadata
   * 
   *  ```shell
   * $ curl https://ws.api.video/videos \ -H 'Authorization: Bearer {access_token} \ -d '{"title":"My video", 
   *      "description":"so many details",
   *      "mp4Support":true
   * }'
   * ```  
   * 
   * ## add an URL to upload on creation
   * You can also create a video directly from a video hosted on a third-party server by giving its URI in `source` parameter:
   * ```shell
   * $ curl https://ws.api.video/videos \
   * -H 'Authorization: Bearer {access_token} \
   * -d '{"source":"http://uri/to/video.mp4", "title":"My video"}'
   * ```
   * 
   * In this case, the service will respond `202 Accepted` and ingest the video asynchronously.
   * ## Track users with Dynamic Metadata
   * Metadata values can be a key:value where the values are predefined, but Dynamic metadata allows you to enter *any* value for a defined key.  To defined a dynamic metadata pair use:
   * ``` "metadata":[{"dynamicKey": "__dynamicKey__"}] ```
   * 
   * The double underscore on both sides of the value allows any variable to be added for a given video session. Added the the url you might have:
   * ``` <iframe type="text/html" src="https://embed.api.video/vod/vi6QvU9dhYCzW3BpPvPsZUa8?metadata[classUserName]=Doug" width="960" height="320" frameborder="0" scrollling="no"></iframe> ```
   * 
   * 
   * This video session will be tagged as watched by Doug - allowing for in-depth analysis on how each viewer interacts with the videos.
   * ### We have tutorials on:
   * * [Creating and uploading videos](https://api.video/blog/tutorials/video-upload-tutorial)
   * * [Uploading large videos](https://api.video/blog/tutorials/video-upload-tutorial-large-videos)
   * 
   * 
   * * [Using tags with videos](https://api.video/blog/tutorials/video-tagging-best-practices)
   * * [Private videos](https://api.video/blog/tutorials/tutorial-private-videos)
   * * [Using Dynamic Metadata](https://api.video/blog/tutorials/dynamic-metadata)
   * 
   * * Full list of [tutorials](https://api.video/blog/endpoints/video-create) that demonstrate this endpoint.
   * 
  **/
  postVideo(
    req: operations.PostVideoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostVideoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostVideoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/videos";

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
        const res: operations.PostVideoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.video = httpRes?.data;
            }
            break;
          case httpRes?.status == 202:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.video = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequest = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postWebhooks - Create Webhook
   *
   * Webhooks can push notifications to your server, rather than polling api.video for changes. We currently offer four events: 
   * * ```video.encoding.quality.completed```  When a new video is uploaded into your account, it will be encoded into several different HLS sizes/bitrates.  When each version is encoded, your webhook will get a notification.  It will look like ```{ \"type\": \"video.encoding.quality.completed\", \"emittedAt\": \"2021-01-29T16:46:25.217+01:00\", \"videoId\": \"viXXXXXXXX\", \"encoding\": \"hls\", \"quality\": \"720p\"} ```. This request says that the 720p HLS encoding was completed.
   * * ```live-stream.broadcast.started```  When a livestream begins broadcasting, the broadcasting parameter changes from false to true, and this webhook fires.
   * * ```live-stream.broadcast.ended```  This event fores when the livestream has finished broadcasting, and the broadcasting parameter flips from false to true.
   * * ```video.source.recorded```  This event is similar to ```video.encoding.quality.completed```, but tells you if a livestream has been recorded as a VOD.
  **/
  postWebhooks(
    req: operations.PostWebhooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostWebhooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostWebhooksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/webhooks";

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
        const res: operations.PostWebhooksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.webhook = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequest = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postAuthApiKey - Authenticate
   *
   * To get started, submit your API key in the body of your request. api.video returns an access token that is valid for one hour (3600 seconds). A refresh token is also returned. View a [tutorial](https://api.video/blog/tutorials/authentication-tutorial) on authentication.
   * All tutorials using the [authentication endpoint](https://api.video/blog/endpoints/authenticate)
  **/
  postAuthApiKey(
    req: operations.PostAuthApiKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAuthApiKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAuthApiKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/auth/api-key";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PostAuthApiKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessToken = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequest = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postAuthRefresh - Refresh token
   *
   * Use the refresh endpoint with the refresh token you received when you first authenticated using the api-key endpoint. Send the refresh token in the body of your request. The api.video API returns a new access token that is valid for one hour (3600 seconds) and a new refresh token. 
   * 
  **/
  postAuthRefresh(
    req: operations.PostAuthRefreshRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAuthRefreshResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAuthRefreshRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/auth/refresh";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PostAuthRefreshResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessToken = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequest = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postLiveStreams - Create live stream
   *
   * A live stream will give you the 'connection point' to RTMP your video stream to api.video. It will also give you the details for viewers to watch the same livestream.  The public=false 'private livestream' is available as a BETA feature, and should be limited to livestreams of 3,000 viewers or fewer. See our [Live Stream Tutorial](https://api.video/blog/tutorials/live-stream-tutorial) for a walkthrough of this API with OBS. Your RTMP endpoint for the livestream is rtmp://broadcast.api.video/s/{streamKey}
   * Tutorials that [create live streams](https://api.video/blog/endpoints/live-create).
  **/
  postLiveStreams(
    req: operations.PostLiveStreamsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostLiveStreamsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostLiveStreamsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/live-streams";

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
        const res: operations.PostLiveStreamsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.liveStream = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequest = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postLiveStreamsLiveStreamIdThumbnail - Upload a thumbnail
   *
   * Upload an image to use as a backdrop for your livestream. Tutorials that [update live stream thumbnails](https://api.video/blog/endpoints/live-upload-a-thumbnail).
  **/
  postLiveStreamsLiveStreamIdThumbnail(
    req: operations.PostLiveStreamsLiveStreamIdThumbnailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostLiveStreamsLiveStreamIdThumbnailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostLiveStreamsLiveStreamIdThumbnailRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/live-streams/{liveStreamId}/thumbnail", req.pathParams);

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
        const res: operations.PostLiveStreamsLiveStreamIdThumbnailResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.liveStream = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequest = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPlayers - Create a player
   *
   * Create a player for your video, and customise it.
  **/
  postPlayers(
    req: operations.PostPlayersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPlayersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPlayersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/players";

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
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.PostPlayersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.player = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postPlayersPlayerIdLogo - Upload a logo
   *
   * The uploaded image maximum size should be 200x100 and its weight should be 200KB.  It will be scaled down to 30px height and converted to PNG to be displayed in the player.
  **/
  postPlayersPlayerIdLogo(
    req: operations.PostPlayersPlayerIdLogoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPlayersPlayerIdLogoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPlayersPlayerIdLogoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/players/{playerId}/logo", req.pathParams);

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
        const res: operations.PostPlayersPlayerIdLogoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.player = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequest = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postUpload - Upload with an upload token
   *
   * When given a token, anyone can upload a file to the URI `https://ws.api.video/upload?token=<tokenId>`.
   * 
   * Example with cURL:
   * 
   * ```curl
   * $ curl  --request POST --url 'https://ws.api.video/upload?token=toXXX'
   *  --header 'content-type: multipart/form-data'
   *  -F file=@video.mp4
   * ```
   * 
   * Or in an HTML form, with a little JavaScript to convert the form into JSON:
   * ```html
   * <!--form for user interaction-->
   * <form name="videoUploadForm" >
   *   <label for=video>Video:</label>
   *   <input type=file name=source/><br/>
   *   <input value="Submit" type="submit">
   * </form>
   * <div></div>
   * <!--JS takes the form data 
   *     uses FormData to turn the response into JSON.
   *     then uses POST to upload the video file.
   *     Update the token parameter in the url to your upload token.
   *     -->
   * <script>
   *    var form = document.forms.namedItem("videoUploadForm");	
   *    form.addEventListener('submit', function(ev) {
   * 	 ev.preventDefault();
   *      var oOutput = document.querySelector("div"),
   *          oData = new FormData(form);
   *      var oReq = new XMLHttpRequest();
   * 	 
   *      oReq.open("POST", "https://ws.api.video/upload?token=toXXX", true);
   *      oReq.send(oData);
   * 	 oReq.onload = function(oEvent) {
   *        if (oReq.status ==201) {
   *          oOutput.innerHTML = "Your video is uploaded!<br/>"  + oReq.response;
   *        } else {
   *          oOutput.innerHTML = "Error " + oReq.status + " occurred when trying to upload your file.<br \/>";
   *        }
   *      };
   *    }, false);	
   * </script>
   * ```
   * 
   * 
   * ### Dealing with large files
   * 
   * We have created a <a href='https://api.video/blog/tutorials/uploading-large-files-with-javascript'>tutorial</a> to walk through the steps required.
  **/
  postUpload(
    req: operations.PostUploadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUploadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUploadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/upload";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostUploadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.video = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequest = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postUploadTokens - Generate an upload token
   *
   * Use this endpoint to generate an upload token. You can use this token to authenticate video uploads while keeping your API key safe. Tutorials using [delegated upload](https://api.video/blog/endpoints/delegated-upload).
  **/
  postUploadTokens(
    req: operations.PostUploadTokensRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUploadTokensResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUploadTokensRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/upload-tokens";

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
        const res: operations.PostUploadTokensResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.uploadToken = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequest = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postVideosVideoIdCaptionsLanguage - Upload a caption
   *
   * Upload a VTT file to add captions to your video.
   *  Read our [captioning tutorial](https://api.video/blog/tutorials/adding-captions) for more details.
  **/
  postVideosVideoIdCaptionsLanguage(
    req: operations.PostVideosVideoIdCaptionsLanguageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostVideosVideoIdCaptionsLanguageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostVideosVideoIdCaptionsLanguageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/videos/{videoId}/captions/{language}", req.pathParams);

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
        const res: operations.PostVideosVideoIdCaptionsLanguageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.subtitle = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequest = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postVideosVideoIdChaptersLanguage - Upload a chapter
   *
   * Chapters help break the video into sections. Read our [tutorial](https://api.video/blog/tutorials/adding-chapters-to-your-videos) for more details.
  **/
  postVideosVideoIdChaptersLanguage(
    req: operations.PostVideosVideoIdChaptersLanguageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostVideosVideoIdChaptersLanguageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostVideosVideoIdChaptersLanguageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/videos/{videoId}/chapters/{language}", req.pathParams);

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
        const res: operations.PostVideosVideoIdChaptersLanguageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.chapter = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequest = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postVideosVideoIdSource - Upload a video
   *
   * To upload a video to the videoId you created. Replace {videoId} with the id you'd like to use, {access_token} with your token, and /path/to/video.mp4 with the path to the video you'd like to upload. You can only upload your video to the videoId once.
   * ```bash
   * curl https://ws.api.video/videos/{videoId}/source \
   *   -H 'Authorization: Bearer {access_token}' \
   *   -F file=@/path/to/video.mp4
   * 
   *   ```
   * Tutorials using [video upload](https://api.video/blog/endpoints/video-upload).
  **/
  postVideosVideoIdSource(
    req: operations.PostVideosVideoIdSourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostVideosVideoIdSourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostVideosVideoIdSourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/videos/{videoId}/source", req.pathParams);

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
        const res: operations.PostVideosVideoIdSourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.video = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequest = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postVideosVideoIdThumbnail - Upload a thumbnail
   *
   * The thumbnail is the poster that appears in the player window before video playback begins.
   * This endpoint allows you to upload an image for the thumbnail.
   * To select a still frame from the video using a time stamp, use [Pick a Thumbnail](https://docs.api.video/reference#patch_videos-videoid-thumbnail) to pick a time in the video. 
   * Note: There may be a short delay before the new thumbnail is delivered to our CDN.
   * Tutorials using [Thumbnail upload](https://api.video/blog/endpoints/videos-upload-a-thumbnail).
  **/
  postVideosVideoIdThumbnail(
    req: operations.PostVideosVideoIdThumbnailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostVideosVideoIdThumbnailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostVideosVideoIdThumbnailRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/videos/{videoId}/thumbnail", req.pathParams);

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
        const res: operations.PostVideosVideoIdThumbnailResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.video = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.badRequest = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.notFound = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
