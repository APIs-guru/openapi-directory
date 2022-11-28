import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://gettyimages.com",
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

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk._security = security;
  };
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _security?: Security;
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
      if (this._security) {
        this._securityClient = utils.CreateSecurityClient(
          this._defaultClient,
          this._security
        );
      } else {
        this._securityClient = this._defaultClient;
      }
    }
    
  }
  
  /**
   * deleteV3AssetChangesChangeSetsChangeSetId - Confirm asset change notifications.
   *
   * # Delete Asset Changes
   * 
   * Confirm asset changes acknowledges receipt of asset changes (from the PUT asset changes endpoint).
   * 
   * ##  Quickstart
   * 
   * You'll need an API key and an access token to use this resource.
   * 
  **/
  deleteV3AssetChangesChangeSetsChangeSetId(
    req: operations.DeleteV3AssetChangesChangeSetsChangeSetIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteV3AssetChangesChangeSetsChangeSetIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteV3AssetChangesChangeSetsChangeSetIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/asset-changes/change-sets/{change-set-id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteV3AssetChangesChangeSetsChangeSetIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteV3BoardsBoardId - Delete a board
  **/
  deleteV3BoardsBoardId(
    req: operations.DeleteV3BoardsBoardIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteV3BoardsBoardIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteV3BoardsBoardIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/boards/{board_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteV3BoardsBoardIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteV3BoardsBoardIdAssets - Remove assets from a board
  **/
  deleteV3BoardsBoardIdAssets(
    req: operations.DeleteV3BoardsBoardIdAssetsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteV3BoardsBoardIdAssetsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteV3BoardsBoardIdAssetsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/boards/{board_id}/assets", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "delete",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteV3BoardsBoardIdAssetsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteV3BoardsBoardIdAssetsAssetId - Remove an asset from a board
  **/
  deleteV3BoardsBoardIdAssetsAssetId(
    req: operations.DeleteV3BoardsBoardIdAssetsAssetIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteV3BoardsBoardIdAssetsAssetIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteV3BoardsBoardIdAssetsAssetIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/boards/{board_id}/assets/{asset_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteV3BoardsBoardIdAssetsAssetIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteV3BoardsBoardIdCommentsCommentId - Delete a comment from a board
  **/
  deleteV3BoardsBoardIdCommentsCommentId(
    req: operations.DeleteV3BoardsBoardIdCommentsCommentIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteV3BoardsBoardIdCommentsCommentIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteV3BoardsBoardIdCommentsCommentIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/boards/{board_id}/comments/{comment_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteV3BoardsBoardIdCommentsCommentIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getV3AffiliatesSearchImages(
    req: operations.GetV3AffiliatesSearchImagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3AffiliatesSearchImagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3AffiliatesSearchImagesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/affiliates/search/images";
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3AffiliatesSearchImagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.affiliateImageSearchResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getV3AffiliatesSearchVideos(
    req: operations.GetV3AffiliatesSearchVideosRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3AffiliatesSearchVideosResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3AffiliatesSearchVideosRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/affiliates/search/videos";
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3AffiliatesSearchVideosResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.affiliateVideoSearchResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3ArtistsImages - Search for images by a photographer
  **/
  getV3ArtistsImages(
    req: operations.GetV3ArtistsImagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3ArtistsImagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3ArtistsImagesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/artists/images";
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3ArtistsImagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3ArtistsVideos - Search for videos by a photographer
  **/
  getV3ArtistsVideos(
    req: operations.GetV3ArtistsVideosRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3ArtistsVideosResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3ArtistsVideosRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/artists/videos";
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3ArtistsVideosResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3AssetChangesChannels - Get a list of asset change notification channels.
   *
   * # Get Partner Channels
   * 
   * Retrieves the channel data for the partner. This data can be used to populate the channel_id parameter in the Put Asset Changes query.
   * 
   * ##  Quickstart
   * 
   * You'll need an API key and an access token to use this resource.
   * 
   * Partners who have a channel that has been removed should contact their sales representative to be set up again.
   * 
   * 
  **/
  getV3AssetChangesChannels(
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3AssetChangesChannelsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/asset-changes/channels";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV3AssetChangesChannelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.channels = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3Boards - Get all boards that the user participates in
  **/
  getV3Boards(
    req: operations.GetV3BoardsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3BoardsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3BoardsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/boards";
    
    const client: AxiosInstance = this._securityClient!;
    
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
        const res: operations.GetV3BoardsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.boardList = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3BoardsBoardId - Get assets and metadata for a specific board
  **/
  getV3BoardsBoardId(
    req: operations.GetV3BoardsBoardIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3BoardsBoardIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3BoardsBoardIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/boards/{board_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV3BoardsBoardIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.boardDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3BoardsBoardIdComments - Get comments from a board
  **/
  getV3BoardsBoardIdComments(
    req: operations.GetV3BoardsBoardIdCommentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3BoardsBoardIdCommentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3BoardsBoardIdCommentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/boards/{board_id}/comments", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetV3BoardsBoardIdCommentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentsList = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3Collections - Gets collections applicable for the customer.
   *
   * Use this endpoint to retrieve collections associated with your Getty Images account. To browse available collections see our [Image collections page]( http://www.gettyimages.com/creative-images/collections).
   * 
   * You'll need an API key and access token to use this resource.
   * 
  **/
  getV3Collections(
    req: operations.GetV3CollectionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3CollectionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3CollectionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/collections";
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3CollectionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.collectionsList = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3Countries - Gets countries codes and names.
   *
   * Returns a list of country objects that contains country name, two letter ISO abbreviation and three letter ISO abbreviation.
   * 
   * You'll need an API key and access token to use this resource.
   * 
  **/
  getV3Countries(
    req: operations.GetV3CountriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3CountriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3CountriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/countries";
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3CountriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.countriesList = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3CustomersCurrent - Returns information about the current user.
   *
   * Returns the first, middle and last name of the authenticated user.
   * 
   * You'll need an API key and access token to use this resource.
   * 	
   * Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.
   * 
  **/
  getV3CustomersCurrent(
    req: operations.GetV3CustomersCurrentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3CustomersCurrentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3CustomersCurrentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/customers/current";
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3CustomersCurrentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.customerInfoResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3Downloads - Returns information about a customer's downloaded assets.
   *
   * Returns information about a customer's previously downloaded assets.
   * 
   * You'll need an API key and access token to use this resource.
   *  
   * 	
   * This endpoint requires being a Getty Images customer to limit your results to only assets that you have a license to use, 
   * you need to also include an authorization token in the header of your request. 
   * Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.
   * 
  **/
  getV3Downloads(
    req: operations.GetV3DownloadsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3DownloadsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3DownloadsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/downloads";
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3DownloadsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getDownloadsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3Events - Get metadata for multiple events
   *
   * This endpoint returns the detailed event metadata for all specified events. Getty Images news, sports and entertainment photographers and
   * videographers cover editorially relevant events occurring around the world.  All images or video clips produced in association with 
   * an event, are assigned the same EventID. EventIDs are part of the meta-data returned in SearchForImages Results. Only content 
   * produced under a Getty Images brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) 
   * will be consistently assigned an EventID. The Event framework may also be used to group similar content, such as 
   * "Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week". 
   * 
   * You'll need an API key and access token to use this resource.
   * 
  **/
  getV3Events(
    req: operations.GetV3EventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3EventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3EventsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/events";
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3EventsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3EventsId - Get metadata for a single event
   *
   * This endpoint returns the detailed event metadata for a specified event. Getty Images news, sports and entertainment 
   * photographers and videographers cover editorially relevant events occurring around the world.  
   * All images or video clips produced in association with an event, are assigned the same EventID. 
   * EventIDs are part of the meta-data returned in SearchForImages Results. Only content produced under a Getty Images 
   * brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) will be 
   * consistently assigned an EventID. The Event framework may also be used to group similar content, such as 
   * "Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week". 
   * 
   * You'll need an API key and access token to use this resource.
   * 
  **/
  getV3EventsId(
    req: operations.GetV3EventsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3EventsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3EventsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/events/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3EventsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3Images - Get metadata for multiple images by supplying multiple image ids
   *
   * This endpoint returns the detailed image metadata for all specified images.
   * 
   * You'll need an API key and access token to use this resource.
   * 
   * ## Working with Fields Sets
   * 
   * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
   * 
   * #### Summary Fields Set
   * 
   * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build 
   * search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
   * 
   * ```
   * {
   *     "images":
   *     [
   *         "artist",
   *         "asset_family",
   *         "caption",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name",
   *         "license_model",
   *         "max_dimensions",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Detail Fields Set
   * 
   * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a 
   * detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
   * 
   * ```
   * {
   *     "images":
   *     [
   *         "allowed_use",
   *         "artist", 
   *         "artist_title", 
   *         "asset_family",
   *         "call_for_image",
   *         "caption", 
   *         "city",
   *         "collection_code",
   *         "collection_id", 
   *         "collection_name",
   *         "color_type", 
   *         "copyright", 
   *         "country", 
   *         "credit_line", 
   *         "date_created", 
   *         "date_submitted",
   *         "download_sizes", 
   *         "editorial_segments",
   *         "event_ids",
   *         "graphical_style",
   *         "license_model",
   *         "max_dimensions",
   *         "orientation",
   *         "product_types",
   *         "quality_rank",
   *         "referral_destinations",
   *         "state_province", 
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Display Fields Set
   * 
   * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution
   * files that are most frequently used to build a UI displaying search results. The following fields are provided for every image 
   * in your result set when you include **display_set** in your request.
   * 
   * ```
   * {
   *     "images":
   *     [
   *         "display_sizes": 
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ]
   *     ]
   * }
   * ```
   * 
   * ## Request Usage Considerations
   * 
   * - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
   * 
  **/
  getV3Images(
    req: operations.GetV3ImagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3ImagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3ImagesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/images";
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3ImagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.imagesDetailResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3ImagesId - Get metadata for a single image by supplying one image id
   *
   * This endpoint returns the detailed image metadata for a specified image.
   * 
   * You'll need an API key and access token to use this resource. 
   *  
   * ## Working with Fields Sets
   * 
   * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
   * 
   * #### Summary Fields Set
   * 
   * The **summary_set** query string parameter fields value represents a small batch of metadata fields that
   * are often used to build search response results. The following fields are provided for every image in your
   * result set when you include **summary_set** in your request.
   * 
   * ```
   * {
   *     "images":
   *     [
   *         "artist",
   *         "asset_family",
   *         "caption",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name",
   *         "license_model",
   *         "max_dimensions",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Detail Fields Set
   * 
   * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are 
   * often used to build a detailed view of images. The following fields are provided for every image in your 
   * result set when you include **detail_set** in your request.
   * 
   * ```
   * {
   *     "images":
   *     [
   *         "allowed_use",
   *         "artist", 
   *         "artist_title", 
   *         "asset_family",
   *         "call_for_image",
   *         "caption", 
   *         "city",
   *         "collection_code",
   *         "collection_id", 
   *         "collection_name",
   *         "color_type", 
   *         "copyright", 
   *         "country", 
   *         "credit_line", 
   *         "date_created", 
   *         "date_submitted",
   *         "download_sizes", 
   *         "editorial_segments",
   *         "event_ids",
   *         "graphical_style",
   *         "license_model",
   *         "max_dimensions",
   *         "orientation",
   *         "product_types",
   *         "quality_rank",
   *         "referral_destinations",
   *         "state_province", 
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Display Fields Set
   * 
   * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low
   * resolution files that are most frequently used to build a UI displaying search results. The following fields are provided 
   * for every image in your result set when you include **display_set** in your request.
   * 
   * ```
   * {
   *     "images":
   *     [
   *         "display_sizes": 
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ]
   *     ]
   * }
   * ```
   * 
   * ## Request Usage Considerations
   * 
   * - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
   * 
  **/
  getV3ImagesId(
    req: operations.GetV3ImagesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3ImagesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3ImagesIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/images/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3ImagesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.imagesDetailResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3ImagesIdDownloadhistory - Returns information about a customer's download history for a specific asset
  **/
  getV3ImagesIdDownloadhistory(
    req: operations.GetV3ImagesIdDownloadhistoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3ImagesIdDownloadhistoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3ImagesIdDownloadhistoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/images/{id}/downloadhistory", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3ImagesIdDownloadhistoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.assetDownloadHistoryResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3ImagesIdSameSeries - Retrieve creative images from the same series
   *
   * This endpoint will provide the list of images, if any exist, from the same series as the specified creative asset id. These images are typically from the same photo shoot. This functionality will not work for editorial assets.
   * 
   * You'll need an API key and access token to use this resource.
   * 
   * ## Working with Fields Sets
   * 
   * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
   * 
   * #### Summary Fields Set
   * 
   * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
   * search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
   * 
   * ```
   * {
   *     "images":
   *     [
   *         "asset_family",
   *         "caption",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name",
   *         "display_sizes": 
   *         [
   *             {
   *                 "name": "thumb"
   *             }
   *         ]
   *         "license_model",
   *         "max_dimensions",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Detail Fields Set
   * 
   * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a 
   * detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
   * 
   * ```
   * {
   *     "images":
   *     [
   *         "allowed_use",
   *         "artist",
   *         "asset_family",
   *         "call_for_image",
   *         "caption",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name",
   *         "copyright",
   *         "date_created",
   *         "display_sizes": 
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "editorial_segments",
   *         "event_ids",
   *         "graphical_style",
   *         "license_model",
   *         "max_dimensions",
   *         "orientation",
   *         "product_types",
   *         "quality_rank",
   *         "referral_destinations",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Display Fields Set
   * 
   * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files 
   * that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result
   * set when you include **display_set** in your request.
   * 
   * ```
   * {
   *     "images":
   *     [
   *         "display_sizes": 
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ]
   *     ]
   * }
   * ```
  **/
  getV3ImagesIdSameSeries(
    req: operations.GetV3ImagesIdSameSeriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3ImagesIdSameSeriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3ImagesIdSameSeriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/images/{id}/same-series", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3ImagesIdSameSeriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.imageSearchItemSearchResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3ImagesIdSimilar - Retrieve similar images
   *
   * This endpoint will provide a list of images that are similar to the specified asset id.
   * 
   * You'll need an API key and access token to use this resource.
   * 
   * ## Working with Fields Sets
   * 
   * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
   * 
   * #### Summary Fields Set
   * 
   * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
   * search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
   * 
   * ```
   * {
   *     "images":
   *     [
   *         "asset_family",
   *         "caption",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name",
   *         "display_sizes": 
   *         [
   *             {
   *                 "name": "thumb"
   *             }
   *         ]
   *         "license_model",
   *         "max_dimensions",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Detail Fields Set
   * 
   * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a 
   * detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
   * 
   * ```
   * {
   *     "images":
   *     [
   *         "allowed_use",
   *         "artist",
   *         "asset_family",
   *         "call_for_image",
   *         "caption",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name",
   *         "copyright",
   *         "date_created",
   *         "display_sizes": 
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "editorial_segments",
   *         "event_ids",
   *         "graphical_style",
   *         "license_model",
   *         "max_dimensions",
   *         "orientation",
   *         "product_types",
   *         "quality_rank",
   *         "referral_destinations",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Display Fields Set
   * 
   * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files 
   * that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result
   * set when you include **display_set** in your request.
   * 
   * ```
   * {
   *     "images":
   *     [
   *         "display_sizes": 
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ]
   *     ]
   * }
   * ```
  **/
  getV3ImagesIdSimilar(
    req: operations.GetV3ImagesIdSimilarRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3ImagesIdSimilarResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3ImagesIdSimilarRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/images/{id}/similar", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3ImagesIdSimilarResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.imageSearchItemSearchResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3OrdersId - Get order metadata
   *
   * This endpoint returns detailed order metadata for a specified order.
   * Use of this endpoint requires configuration changes to your API key. 
   * 
   * You'll need an API key and access token to use this resource.
  **/
  getV3OrdersId(
    req: operations.GetV3OrdersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3OrdersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3OrdersIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/orders/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3OrdersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.orderDetail = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3Products - Get Products
   *
   * This endpoint returns all products available to the username used during authentication. As such, this endpoint requires the use of
   * a fully authorized access_token. The product data can then be used as search filters, restricting results to images from a specific product.
   * 
   * You'll need an API key and access token to use this resource.
   * 
  **/
  getV3Products(
    req: operations.GetV3ProductsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3ProductsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3ProductsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/products";
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3ProductsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.productsResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3PurchasedAssets - Get Previously Purchased Images and Video
   *
   * This endpoint returns a list of all assets purchased on gettyimages.com by the username used for authentication. 
   * Use of this endpoint requires configuration changes to your API key. Please contact your sales representative
   * to learn more.
   * 
   * You'll need an API key and access token to use this resource.
   * 
  **/
  getV3PurchasedAssets(
    req: operations.GetV3PurchasedAssetsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3PurchasedAssetsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3PurchasedAssetsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/purchased-assets";
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3PurchasedAssetsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.previousAssetPurchases = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3SearchEvents - Search for events
   *
   * Use this endpoint to search Getty Images news, sports and entertainment events. Getty Images photographers and videographers cover editorially relevant events occurring around the world.  All images or video clips produced in association with an event, are assigned the same EventID. EventIDs are part of the meta-data returned in Search Results. Only content produced under a Getty Images brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) will be consistently assigned an EventID. The Event framework may also be used to group similar content, such as "Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week".   
   * 
   * You'll need an API key and access token to use this resource.
   * 
   * 
   * You can show different information in the response by specifying values on the "fields" parameter (see details below).
   * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
   * 
  **/
  getV3SearchEvents(
    req: operations.GetV3SearchEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3SearchEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3SearchEventsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/search/events";
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3SearchEventsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.eventsSearchResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3SearchImages - Search for both creative and editorial images
   *
   * Use this endpoint to search over a blend of our contemporary stock photos, illustrations, archival images, editorial photos, illustrations and archival images. Because this draws from such a large diversity of content, the results will not be as relevant as when the more specific Creative or Editorial endpoints are used. Additionally, the response time for this endpoint is slower compared to that for Creative and Editorial-specific endpoints. For these reasons, it is highly recommended that those endpoints are used instead of this blended endpoint.
   * 
   * You'll need an API key and access token to use this resource.
   * 
   * You can show different information in the response by specifying values on the "fields" parameter (see details below).
   * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.<br>
   * To include your API token in the search request, add it to the headers as a Bearer token (example in curl):
   * 
   * 	-H "Authorization: Bearer <your-token>"
   * 
   * ## Working with Fields Sets
   * 
   * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
   * 
   * #### Summary Fields Set
   * 
   * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
   * 
   * ```
   * {
   *     "images": 
   *     [
   *         "asset_family",
   *         "caption",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name",
   *         "display_sizes": 
   *         [
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "license_model",
   *         "max_dimensions",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Detail Fields Set
   * 
   * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of images. 
   * The following fields are provided for every image in your result set when you include **detail_set** in your request.
   * 
   * ```
   * {
   *     "images": 
   *     [
   *         "allowed_use",
   *         "artist",
   *         "asset_family",
   *         "call_for_image",
   *         "caption",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name",
   *         "copyright",
   *         "date_created",
   *         "display_sizes": 
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "editorial_segments",
   *         "event_ids",
   *         "graphical_style",
   *         "license_model",
   *         "max_dimensions",
   *         "orientation",
   *         "product_types",
   *         "quality_rank",
   *         "referral_destinations",
   *         "title"
   *     ]
   * ]
   * ```
   * 
   * #### Display Fields Set
   * 
   * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most 
   * frequently used to build a UI displaying search results. The following fields are provided for every image in your result set when you include **display_set**
   * in your request.
   * 
   * ```
   * {
   *     "images": 
   *     [
   *         "display_sizes": 
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ]
   *     ]
   * }
   * ```
   * 
   * ## Request Usage Considerations
   * 
   * - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
   * 
  **/
  getV3SearchImages(
    req: operations.GetV3SearchImagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3SearchImagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3SearchImagesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/search/images";
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3SearchImagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.imageSearchItemSearchResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3SearchImagesCreative - Search for creative images only
   *
   * Use this endpoint to search our contemporary stock photos, illustrations and archival images.
   * 
   * You'll need an API key and access token to use this resource.
   *  
   * You can show different information in the response by specifying values on the "fields" parameter (see details below).
   * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
   * 
   * ## Working with Fields Sets
   * 
   * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
   * 
   * #### Summary Fields Set
   * 
   * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to 
   * build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
   * 
   * ```
   * {
   *     "images": 
   *     [
   *         "asset_family",
   *         "caption",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name",
   *         "display_sizes": 
   *         [
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "license_model",
   *         "max_dimensions",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Detail Fields Set
   * 
   * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to 
   * build a detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
   * 
   * ```
   * {
   *     "images": 
   *     [
   *         "allowed_use",
   *         "artist",
   *         "asset_family",
   *         "call_for_image",
   *         "caption",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name",
   *         "copyright",
   *         "date_created",
   *         "display_sizes": 
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "editorial_segments",
   *         "event_ids",
   *         "graphical_style",
   *         "license_model",
   *         "max_dimensions",
   *         "orientation",
   *         "product_types",
   *         "quality_rank",
   *         "referral_destinations",
   *         "title"
   *     ]
   * ]
   * ```
   * 
   * #### Display Fields Set
   * 
   * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution
   * files that are most frequently used to build a UI displaying search results. The following fields are provided for every image 
   * in your result set when you include **display_set** in your request.
   * 
   * ```Go
   * {
   *     "images": 
   *     [
   *         "display_sizes": 
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ]
   *     ]
   * }
   * ```
   * 
  **/
  getV3SearchImagesCreative(
    req: operations.GetV3SearchImagesCreativeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3SearchImagesCreativeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3SearchImagesCreativeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/search/images/creative";
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3SearchImagesCreativeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.creativeImageSearchResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3SearchImagesCreativeByImage - Search for creative images based on url
   *
   * Allows searching for similar creative images by passing the URL to an existing image. All responses will have the exclude_nudity filter automatically applied.
   * 
   * Before calling the search by image endpoint, an image must be uploaded to a specific AWS S3 bucket. The bucket name is `search-by-image.s3.amazonaws.com`.
   * For example, using cURL:
   * ```sh
   * curl -i -X PUT https://search-by-image.s3.amazonaws.com/my-test-image.jpg -H "Content-Type: image/jpeg" --data-binary "@testimage.jpg"
   * ```
   * 
   * Uploads can be overwritten if the names are the same, so using a prefix like the API Key, application name or company name is recommended. Uploads will expire from the bucket after 24 hours.
   * 
   * Once the image has been uploaded, use the full URL in the `image_url` parameter, e.g. `image_url=https://search-by-image.s3.amazonaws.com/my-test-image.jpg`.
   * 
   * <!-- TODO/HACK from https://app.clickup.com/t/8mfmv3 - Uncomment this if image_fingerprint ever comes back to be useful -->
   * <!-- Subsequent searches for the same image can be executed using the `image_fingerprint` that is returned by the initial search. -->
   * 
  **/
  getV3SearchImagesCreativeByImage(
    req: operations.GetV3SearchImagesCreativeByImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3SearchImagesCreativeByImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3SearchImagesCreativeByImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/search/images/creative/by-image";
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3SearchImagesCreativeByImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.searchByImageResourceResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3SearchImagesEditorial - Search for editorial images only
   *
   * Use this endpoint to search our editorial stock photos, illustrations and archival images.  Editorial images represent newsworthy events or illustrate matters of general interest, such as news, sport and entertainment and are generally intended for editorial use.
   * 
   * You'll need an API key and access token to use this resource.
   * 
   * You can show different information in the response by specifying values on the "fields" parameter (see details below).
   * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
   * To include your API token in the search request, add it to the headers as a Bearer token (example in curl):
   * 
   * 	-H "Authorization: Bearer <your-token>"
   * 
   * ## Working with Fields Sets
   * 
   * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
   * 
   * #### Summary Fields Set
   * 
   * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.
   * 
   * ```
   * {
   *     "images": 
   *     [
   *         "asset_family",
   *         "caption",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name",
   *         "display_sizes": 
   *         [
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "license_model",
   *         "max_dimensions",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Detail Fields Set
   * 
   * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.
   * 
   * ```
   * {
   *     "images": 
   *     [
   *         "allowed_use",
   *         "artist",
   *         "asset_family",
   *         "call_for_image",
   *         "caption",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name",
   *         "copyright",
   *         "date_created",
   *         "display_sizes": 
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "editorial_segments",
   *         "event_ids",
   *         "graphical_style",
   *         "license_model",
   *         "max_dimensions",
   *         "orientation",
   *         "product_types",
   *         "quality_rank",
   *         "referral_destinations",
   *         "title"
   *     ]
   * ]
   * ```
   * 
   * #### Display Fields Set
   * 
   * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result set when you include **display_set** in your request.
   * 
   * ```
   * {
   *     "images": 
   *     [
   *         "display_sizes": 
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ]
   *     ]
   * }
   * ```
   * 
   * ## Request Usage Considerations
   * 
   * - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
   * 
  **/
  getV3SearchImagesEditorial(
    req: operations.GetV3SearchImagesEditorialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3SearchImagesEditorialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3SearchImagesEditorialRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/search/images/editorial";
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3SearchImagesEditorialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.editorialImageSearchResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3SearchVideosCreative - Search for creative videos
   *
   * Use this endpoint to search premium stock video, from archival film to contemporary 4K and HD footage.
   * 
   * You'll need an API key and access token to use this resource.
   * 
   * You can show different information in the response by specifying values on the "fields" parameter (see details below).
   * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without
   * being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only 
   * assets that you have a license to use, you need to also include an authorization token in the header of your request.
   * Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.
   * 
   * ## Working with Fields Sets
   * 
   * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
   * 
   * #### Summary Fields Set
   * 
   * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search
   * response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
   * 
   * ```
   * {
   *     "videos": 
   *     [
   *         "asset_family", 
   *         "caption",
   *         "collection_code",
   *         "collection_name",
   *         "display_sizes":
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "license_model",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Detail Fields Set
   * 
   * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a 
   * detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
   * 
   * ```
   * {
   *     "videos": 
   *     [
   *         "allowed_use",
   *         "artist",
   *         "asset_family", 
   * 		"call_for_image",
   *         "caption", 
   *         "clip_length",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name", 
   *         "color_type",
   *         "copyright",
   *         "date_created",
   *         "display_sizes":
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "era",
   *         "license_model",
   *         "mastered_to",
   *         "originally_shot_on",
   *         "product_types",
   *         "quality_rank",
   *         "shot_speed",
   *         "source",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Display Fields Set
   * 
   * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files 
   * that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result 
   * set when you include **display_set** in your request.
   * 
   * ```
   * {
   *     "videos":
   *     [
   *         "display_sizes":
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ]
   *     ]
   * }
   * ```
  **/
  getV3SearchVideosCreative(
    req: operations.GetV3SearchVideosCreativeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3SearchVideosCreativeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3SearchVideosCreativeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/search/videos/creative";
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3SearchVideosCreativeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.creativeVideoSearchResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3SearchVideosCreativeByImage - Search for creative videos based on url
   *
   * Search for **similar creative videos** by passing an `asset_id` to an asset in our catalog OR `image_url` to any image or a frame grab from a video. All responses will have the exclude_nudity filter automatically applied.
   * 
   * ## Searching by URL
   * 
   * When searching by `image_url`, an image or frame grab in JPEG format must be uploaded to a specific AWS S3 bucket. The bucket name is `search-by-image.s3.amazonaws.com`.
   * Example using cURL:
   * ```sh
   * curl -i -X PUT https://search-by-image.s3.amazonaws.com/my-test-image.jpg -H "Content-Type: image/jpeg" --data-binary "@testimage.jpg"
   * ```
   * 
   * Uploads will be overwritten if the names are the same, so using a prefix like the API Key, application name or company name is recommended. Uploads will expire from the bucket after 24 hours.
   * 
   * Once the JPEG has been uploaded, use the full URL in the `image_url` parameter, e.g. `image_url=https://search-by-image.s3.amazonaws.com/my-test-image.jpg`.
   * 
   * ## Searching by asset id
   * 
   * When searching by `asset_id`, any image or video asset id in the Getty/iStock catalog can be used. 
  **/
  getV3SearchVideosCreativeByImage(
    req: operations.GetV3SearchVideosCreativeByImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3SearchVideosCreativeByImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3SearchVideosCreativeByImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/search/videos/creative/by-image";
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3SearchVideosCreativeByImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.creativeVideoSearchResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3SearchVideosEditorial - Search for editorial videos
   *
   * Use this endpoint to search current and archival video clips of celebrities, newsmakers, and events.
   * 
   * You'll need an API key and access token to use this resource.
   * 
   * You can show different information in the response by specifying values on the "fields" parameter (see details below).
   * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
   * 
   * ## Working with Fields Sets
   * 
   * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
   * 
   * #### Summary Fields Set
   * 
   * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
   * 
   * ```
   * {
   *     "videos": 
   *     [
   *         "asset_family", 
   *         "caption",
   *         "collection_code",
   *         "collection_name",
   *         "display_sizes":
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "license_model",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Detail Fields Set
   * 
   * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
   * 
   * ```
   * {
   *     "videos": 
   *     [
   *         "allowed_use",
   *         "artist",
   *         "asset_family", 
   * 		"call_for_image",
   *         "caption", 
   *         "clip_length",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name", 
   *         "color_type",
   *         "copyright",
   *         "date_created",
   *         "display_sizes":
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "era",
   *         "event_ids",
   *         "license_model",
   *         "mastered_to",
   *         "originally_shot_on",
   *         "product_types",
   *         "quality_rank",
   *         "shot_speed",
   *         "source",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Display Fields Set
   * 
   * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
   * 
   * ```
   * {
   *     "videos":
   *     [
   *         "display_sizes":
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ]
   *     ]
   * }
   * ```
   * 
   * ## Request Usage Considerations
   * 
   * - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
   * 
  **/
  getV3SearchVideosEditorial(
    req: operations.GetV3SearchVideosEditorialRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3SearchVideosEditorialResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3SearchVideosEditorialRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/search/videos/editorial";
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3SearchVideosEditorialResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.editorialVideoSearchResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3Videos - Get metadata for multiple videos by supplying multiple video ids
   *
   * Use this endpoint to return detailed video metadata for all the specified video ids.
   * 
   * You'll need an API key and access token to use this resource.
   * 
   * You can show different information in the response by specifying values on the "fields" parameter (see details below).
   * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
   * 
   * ## Working with Fields Sets
   * 
   * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
   * 
   * #### Summary Fields Set
   * 
   * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
   * 
   * ```
   * {
   *     "videos": 
   *     [
   *         "asset_family",
   *         "caption",
   *         "collection_code",
   *         "collection_name",
   *         "display_sizes":
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "license_model",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Detail Fields Set
   * 
   * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
   * 
   * ```
   * {
   *     "videos": 
   *     [
   *         "allowed_use",
   *         "artist",
   *         "asset_family",
   * 		"call_for_image",
   *         "caption",
   *         "clip_length",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name",
   *         "color_type",
   *         "copyright",
   *         "date_created",
   *         "display_sizes":
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "download_sizes",
   *         "era",
   *         "event_ids",
   *         "license_model",
   *         "mastered_to",
   *         "originally_shot_on",
   *         "product_types",
   *         "quality_rank",
   *         "shot_speed",
   *         "source",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Display Fields Set
   * 
   * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
   * 
   * ```
   * {
   *     "videos":
   *     [
   *         "display_sizes": 
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ]
   *     ]
   * }
   * ```
   * 
   * ## Request Usage Considerations
   * 
   * - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
   * 
  **/
  getV3Videos(
    req: operations.GetV3VideosRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3VideosResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3VideosRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/videos";
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3VideosResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3VideosId - Get metadata for a single video by supplying one video id
   *
   * Use this endpoint to return detailed video metadata for the specified video id.
   * 
   * You'll need an API key and access token to use this resource.
   * 
   * You can show different information in the response by specifying values on the "fields" parameter (see details below).
   * You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
   * 
   * ## Working with Fields Sets
   * 
   * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
   * 
   * #### Summary Fields Set
   * 
   * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
   * 
   * ```
   * {
   *     "videos":
   *     [
   *         "asset_family",
   *         "caption",
   *         "collection_code",
   *         "collection_name",
   *         "display_sizes":
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "license_model",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Detail Fields Set
   * 
   * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
   * 
   * ```
   * {
   *     "videos":
   *     [
   *         "allowed_use",
   *         "artist",
   *         "asset_family",
   * 		"call_for_image",
   *         "caption",
   *         "clip_length",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name",
   *         "color_type",
   *         "copyright",
   *         "date_created",
   *         "display_sizes":
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "download_sizes",
   *         "era",
   *         "event_ids",
   *         "license_model",
   *         "mastered_to",
   *         "originally_shot_on",
   *         "product_types",
   *         "quality_rank",
   *         "shot_speed",
   *         "source",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Display Fields Set
   * 
   * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
   * 
   * ```
   * {
   *     "videos":
   *     [
   *         "display_sizes":
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ]
   *     ]
   * }
   * ```
   * 
   * ## Request Usage Considerations
   * 
   * - Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.
   * 
  **/
  getV3VideosId(
    req: operations.GetV3VideosIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3VideosIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3VideosIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/videos/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3VideosIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3VideosIdDownloadhistory - Returns information about a customer's download history for a specific asset
  **/
  getV3VideosIdDownloadhistory(
    req: operations.GetV3VideosIdDownloadhistoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3VideosIdDownloadhistoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3VideosIdDownloadhistoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/videos/{id}/downloadhistory", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3VideosIdDownloadhistoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.assetDownloadHistoryResults = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3VideosIdSameSeries - Retrieve creative videos from the same series
   *
   * This endpoint will provide the list of videos, if any exist, from the same series as the specified creative asset id. These images are typically from the same photo shoot. This functionality will not work for editorial assets.
   * 
   * You'll need an API key and access token to use this resource.
   * 
   * ## Working with Fields Sets
   * 
   * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
   * 
   * #### Summary Fields Set
   * 
   * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
   * 
   * ```
   * {
   *     "videos":
   *     [
   *         "asset_family",
   *         "caption",
   *         "collection_code",
   *         "collection_name",
   *         "display_sizes":
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "license_model",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Detail Fields Set
   * 
   * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
   * 
   * ```
   * {
   *     "videos":
   *     [
   *         "allowed_use",
   *         "artist",
   *         "asset_family",
   * 		"call_for_image",
   *         "caption",
   *         "clip_length",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name",
   *         "color_type",
   *         "copyright",
   *         "date_created",
   *         "display_sizes":
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "download_sizes",
   *         "era",
   *         "license_model",
   *         "mastered_to",
   *         "originally_shot_on",
   *         "product_types",
   *         "quality_rank",
   *         "shot_speed",
   *         "source",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Display Fields Set
   * 
   * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
   * 
   * ```
   * {
   *     "videos":
   *     [
   *         "display_sizes":
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ]
   *     ]
   * }
   * ```
  **/
  getV3VideosIdSameSeries(
    req: operations.GetV3VideosIdSameSeriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3VideosIdSameSeriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3VideosIdSameSeriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/videos/{id}/same-series", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3VideosIdSameSeriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getV3VideosIdSimilar - Retrieve similar videos
   *
   * This endpoint will provide a list of videos that are similar to the specified asset id.
   * 
   * You'll need an API key and access token to use this resource.
   * 
   * ## Working with Fields Sets
   * 
   * Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:
   * 
   * #### Summary Fields Set
   * 
   * The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.
   * 
   * ```
   * {
   *     "videos": 
   *     [
   *         "asset_family",
   *         "caption",
   *         "collection_code",
   *         "collection_name",
   *         "display_sizes":
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "license_model",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Detail Fields Set
   * 
   * The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.
   * 
   * ```
   * {
   *     "videos": 
   *     [
   *         "allowed_use",
   *         "artist",
   *         "asset_family",
   * 		"call_for_image",
   *         "caption",
   *         "clip_length",
   *         "collection_code",
   *         "collection_id",
   *         "collection_name",
   *         "color_type",
   *         "copyright",
   *         "date_created",
   *         "display_sizes":
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ],
   *         "download_sizes",
   *         "era",
   *         "event_ids",
   *         "license_model",
   *         "mastered_to",
   *         "originally_shot_on",
   *         "product_types",
   *         "quality_rank",
   *         "shot_speed",
   *         "source",
   *         "title"
   *     ]
   * }
   * ```
   * 
   * #### Display Fields Set
   * 
   * The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.
   * 
   * ```
   * {
   *     "videos":
   *     [
   *         "display_sizes": 
   *         [
   *             {
   *                 "name": "comp"
   *             },
   *             {
   *                 "name": "preview"
   *             },
   *             {
   *                 "name": "thumb"
   *             }
   *         ]
   *     ]
   * }
   * ```
  **/
  getV3VideosIdSimilar(
    req: operations.GetV3VideosIdSimilarRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3VideosIdSimilarResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3VideosIdSimilarRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/videos/{id}/similar", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.GetV3VideosIdSimilarResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postV3AssetLicensingAssetId - Endpoint for acquiring extended licenses with iStock credits for an asset.
  **/
  postV3AssetLicensingAssetId(
    req: operations.PostV3AssetLicensingAssetIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV3AssetLicensingAssetIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV3AssetLicensingAssetIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/asset-licensing/{assetId}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostV3AssetLicensingAssetIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.assetLicensingResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 402:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postV3Boards - Create a new board
  **/
  postV3Boards(
    req: operations.PostV3BoardsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV3BoardsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV3BoardsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/boards";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostV3BoardsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.boardCreated = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postV3BoardsBoardIdComments - Add a comment to a board
  **/
  postV3BoardsBoardIdComments(
    req: operations.PostV3BoardsBoardIdCommentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV3BoardsBoardIdCommentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV3BoardsBoardIdCommentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/boards/{board_id}/comments", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
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
        const res: operations.PostV3BoardsBoardIdCommentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commentCreated = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postV3DownloadsImagesId - Download an image
   *
   * Use this endpoint to generate download URLs and related data for images you are authorized to download.
   * 
   * Most product offerings have enforced periodic download limits such as monthly, weekly, and daily. When this operation executes, the count of allowed downloads is decremented by one for the product offering. Once the download limit is reached for a given product offering, no further downloads may be requested for that product offering until the next download period.
   * 
   * The download limit for a given download period is covered in your product agreement established with Getty Images.
   * 
   * You'll need an API key and a [Resource Owner Grant or Implicit Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
   * 
   * ## Auto Downloads
   * The `auto_download` request query parameter specifies whether to automatically download the image.
   * 
   * If the `auto_download` request query parameter is set to _true_, the API will return an HTTP status code 303 *See Other*. Your client code will need to process this response and redirect to the URI specified in the *Location* header to enable you to automatically download the file. The redirection workflow follows the [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4.4).
   * 
   * Client Request:
   * 
   * ```
   * https://api.gettyimages.com/v3/downloads/images/[asset_id]?auto_download=true
   * ```
   * 
   * Server Response:
   * 
   * ```
   * HTTP/1.1 303 See Other
   * Location: https://delivery.gettyimages.com/...
   * ```
   * 
   * If the `auto_download` request query parameter is set to false, the API will return a HTTP status code 200, along with the URI in the response body which can be used to download the image. 
   * 
   * Client Request:
   * 
   * ```
   * https://api.gettyimages.com/v3/downloads/images/[asset_id]?auto_download=false
   * ```
   * 
   * Server Response:
   * 
   * ```
   * HTTP/1.1 200 OK
   * {
   * 	"uri": "https://delivery.gettyimages.com/..."
   * }
   * ```
   * ## Downloading Via the Returned URI
   * 
   * The URI returned by this call should be considered opaque and the format could change at any time.
   * In order to get the filename, length or file type, the response headers must be inspected. An example
   * response follows:
   * 
   * ```
   * content-length: 33959979
   * content-type: image/jpeg
   * content-disposition: attachment; filename=GettyImages-1167612765.jpg
   * ```
   * 
   * The `content-disposition` header must be parsed to get a usable filename.
   * 
   * ## Download URI expiration
   * 
   * Download URIs are _**only valid for 24 hours**_, starting from the moment they are returned from this call.
   * 
  **/
  postV3DownloadsImagesId(
    req: operations.PostV3DownloadsImagesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV3DownloadsImagesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV3DownloadsImagesIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/downloads/images/{id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PostV3DownloadsImagesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 303:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postV3DownloadsVideosId - Download a video
   *
   * Use this endpoint to generate download URLs and related data for videos you are authorized to download.
   * 
   * Most product offerings have enforced periodic download limits such as monthly, weekly, and daily. When this operation executes, the count of allowed downloads is decremented by one for the product offering. Once the download limit is reached for a given product offering, no further downloads may be requested for that product offering until the next download period.
   * 
   * The download limit for a given download period is covered in your product agreement established with Getty Images.
   * 
   * You'll need an API key and a [Resource Owner Grant or Implicit Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
   * 
   * ## Auto Downloads
   * The `auto_download` request query parameter specifies whether to automatically download the video.
   * 
   * If the `auto_download` request query parameter is set to _true_, the API will return an HTTP status code 303 *See Other*. Your client code will need to process this response and redirect to the URI specified in the *Location* header to enable you to automatically download the file. The redirection workflow follows the [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4.4).
   * 
   * Client Request:
   * 
   * ```
   * https://api.gettyimages.com/v3/downloads/videos/[asset_id]?auto_download=true
   * ```
   * 
   * Server Response:
   * 
   * ```
   * HTTP/1.1 303 See Other
   * Location: https://delivery.gettyimages.com/...
   * ```
   * 
   * If the `auto_download` request query parameter is set to false, the API will return a HTTP status code 200, along with the URI in the response body which can be used to download the video. 
   * 
   * Client Request:
   * 
   * ```
   * https://api.gettyimages.com/v3/downloads/videos/[asset_id]?auto_download=false
   * ```
   * 
   * Server Response:
   * 
   * ```
   * HTTP/1.1 200 OK
   * {
   * 	"uri": "https://delivery.gettyimages.com/..."
   * }
   * ```
   * 
   * ## Downloading Via the Returned URI
   * 
   * The URI returned by this call should be considered opaque and the format could change at any time.
   * In order to get the filename, length or file type, the response headers must be inspected. An example
   * response follows:
   * 
   * ```
   * content-length: 283925783
   * content-type: video/quicktime
   * content-disposition: attachment; filename=GettyImages-690773579.mov
   * ```
   * 
   * The `content-disposition` header must be parsed to get a usable filename.
   * 
   * ## Download URI expiration
   * 
   * Download URIs are _**only valid for 24 hours**_, starting from the moment they are returned from this call.
   * 
  **/
  postV3DownloadsVideosId(
    req: operations.PostV3DownloadsVideosIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostV3DownloadsVideosIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostV3DownloadsVideosIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/downloads/videos/{id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PostV3DownloadsVideosIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 303:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putV3AssetChangesChangeSets - Get asset change notifications.
   *
   * # Asset Changes
   * 
   * Get notifications about new, updated or deleted assets.
   * 
   * ##  Quickstart
   * 
   * You'll need an API key and an access token to use this resource. 
   * 
   * Notifications older than 60 days will be removed from partner channels.
   * 
  **/
  putV3AssetChangesChangeSets(
    req: operations.PutV3AssetChangesChangeSetsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV3AssetChangesChangeSetsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV3AssetChangesChangeSetsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/asset-changes/change-sets";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "put",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutV3AssetChangesChangeSetsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.assetChanges = httpRes?.data;
            }
            break;
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.assetChanges = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putV3BoardsBoardId - Update a board
  **/
  putV3BoardsBoardId(
    req: operations.PutV3BoardsBoardIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV3BoardsBoardIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV3BoardsBoardIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/boards/{board_id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutV3BoardsBoardIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putV3BoardsBoardIdAssets - Add assets to a board
  **/
  putV3BoardsBoardIdAssets(
    req: operations.PutV3BoardsBoardIdAssetsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV3BoardsBoardIdAssetsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV3BoardsBoardIdAssetsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/boards/{board_id}/assets", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutV3BoardsBoardIdAssetsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.addBoardAssetsResult = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putV3BoardsBoardIdAssetsAssetId - Add an asset to a board
  **/
  putV3BoardsBoardIdAssetsAssetId(
    req: operations.PutV3BoardsBoardIdAssetsAssetIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV3BoardsBoardIdAssetsAssetIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV3BoardsBoardIdAssetsAssetIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/boards/{board_id}/assets/{asset_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutV3BoardsBoardIdAssetsAssetIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putV3UsageBatchesId - Report usage of assets via a batch format.
   *
   * # Report Usage
   * 
   * Use this endpoint to report the usages of a set of assets. The count of assets submitted in a single batch to this endpoint is limited to 1000. Note that all asset Ids specified must be valid or the operation will fail causing no usages to be recorded. In this case, you will need to remove the invalid asset Ids from the query request and re-submit the query.
   * 
   * ##  Quickstart
   * 
   * You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
   * Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. 
   * 
   * _Note_: Date of use can be in any unambiguous date format.
   * 
  **/
  putV3UsageBatchesId(
    req: operations.PutV3UsageBatchesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutV3UsageBatchesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutV3UsageBatchesIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/v3/usage-batches/{id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutV3UsageBatchesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reportUsageBatchResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 409:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
