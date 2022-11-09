import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://api.apideck.com",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}

// SDK Documentation: https://developers.apideck.com - Apideck Developer Docs
export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // CategoriesAll - List categories
  /** 
   * List categories
  **/
  CategoriesAll(
    req: operations.CategoriesAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CategoriesAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CategoriesAllRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/ecosystems/{ecosystem_id}/categories", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CategoriesAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getCategoriesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CategoriesOne - Get category
  /** 
   * Get category
  **/
  CategoriesOne(
    req: operations.CategoriesOneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CategoriesOneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CategoriesOneRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/ecosystems/{ecosystem_id}/categories/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CategoriesOneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getCategoryResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CategoryListingsAll - List category listings
  /** 
   * List category listings
  **/
  CategoryListingsAll(
    req: operations.CategoryListingsAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CategoryListingsAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CategoryListingsAllRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/ecosystems/{ecosystem_id}/categories/{id}/listings", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CategoryListingsAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getListingsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CollectionListingsAll - List collection listings
  /** 
   * List collection listings
  **/
  CollectionListingsAll(
    req: operations.CollectionListingsAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CollectionListingsAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CollectionListingsAllRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/ecosystems/{ecosystem_id}/collections/{id}/listings", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CollectionListingsAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getListingsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CollectionsAll - List collections
  /** 
   * List collections
  **/
  CollectionsAll(
    req: operations.CollectionsAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CollectionsAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CollectionsAllRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/ecosystems/{ecosystem_id}/collections", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CollectionsAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getCollectionsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CollectionsOne - Get collection
  /** 
   * Get collection
  **/
  CollectionsOne(
    req: operations.CollectionsOneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CollectionsOneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CollectionsOneRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/ecosystems/{ecosystem_id}/collections/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CollectionsOneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getCollectionResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // EcosystemsOne - Get ecosystem
  /** 
   * Get ecosystem
  **/
  EcosystemsOne(
    req: operations.EcosystemsOneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EcosystemsOneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EcosystemsOneRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/ecosystems/{ecosystem_id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.EcosystemsOneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getEcosystemResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListingsAll - List listings
  /** 
   * List listings
  **/
  ListingsAll(
    req: operations.ListingsAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListingsAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListingsAllRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/ecosystems/{ecosystem_id}/listings", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListingsAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getListingsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListingsOne - Get listing
  /** 
   * Get listing
  **/
  ListingsOne(
    req: operations.ListingsOneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListingsOneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListingsOneRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/ecosystems/{ecosystem_id}/listings/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListingsOneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getListingResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProductListingsAll - List product listings
  /** 
   * List product listings
  **/
  ProductListingsAll(
    req: operations.ProductListingsAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProductListingsAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProductListingsAllRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/ecosystems/{ecosystem_id}/products/{id}/listings", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProductListingsAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getListingsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProductsAll - List products
  /** 
   * List products
  **/
  ProductsAll(
    req: operations.ProductsAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProductsAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProductsAllRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/ecosystems/{ecosystem_id}/products", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProductsAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getProductsResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ProductsOne - Get product
  /** 
   * Get product
  **/
  ProductsOne(
    req: operations.ProductsOneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProductsOneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProductsOneRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/ecosystems/{ecosystem_id}/products/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ProductsOneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getProductResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
