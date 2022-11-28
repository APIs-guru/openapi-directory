import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://api.ebay.com{basePath}",
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
   * getAutomotivePartsCompatibilityPolicies - This method returns the eBay policies that define how to list automotive-parts-compatibility items in the categories of a specific marketplace. By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the filter query parameter to specify only the category IDs you want to review. Tip: This method can return a very large response payload and we strongly recommend you get the results from this call in a GZIP file by including the following HTTP header with your request: &nbsp;&nbsp;Accept-Encoding: application/gzip
  **/
  getAutomotivePartsCompatibilityPolicies(
    req: operations.GetAutomotivePartsCompatibilityPoliciesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAutomotivePartsCompatibilityPoliciesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAutomotivePartsCompatibilityPoliciesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/marketplace/{marketplace_id}/get_automotive_parts_compatibility_policies", req.pathParams);
    
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
        const res: operations.GetAutomotivePartsCompatibilityPoliciesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.automotivePartsCompatibilityPolicyResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
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
   * getItemConditionPolicies - This method returns item condition metadata on one, multiple, or all eBay categories on an eBay marketplace. This metadata consists of the different item conditions (with IDs) that an eBay category supports, and a boolean to indicate if an eBay category requires an item condition. The identifier of the eBay marketplace is passed in as a path parameter, and unless one or more eBay category IDs are passed in through the filter query parameter, this method will return metadata on every single category for the specified marketplace. If you only want to view item condition metadata for one eBay category or a select group of eBay categories, you can pass in up to 50 eBay category ID through the filter query parameter. Important!: Certified Refurbished-eligible sellers must use an OAuth token created with the authorization code grant flow and https://api.ebay.com/oauth/api_scope/sell.inventory scope in order to retrieve the 'Certified Refurbished' condition (condition ID 2000) for the relevant categories. The Certified Refurbished item condition will not be returned if an OAuth token created with the client credentials grant flow and https://api.ebay.com/oauth/api_scope scope is used, or if any seller is not eligible to list with that item condition. See the Specifying OAuth scopes topic for more information about specifying scopes. Tip: If you retrieve metadata on all eBay categories for a marketplace, the response payload can be quite large. For this reason, we suggest that you consider using the Accept-Encoding request header and set its value to application/gzip. By doing this, the response payload output will be compressed into a GZIP file.
  **/
  getItemConditionPolicies(
    req: operations.GetItemConditionPoliciesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetItemConditionPoliciesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetItemConditionPoliciesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/marketplace/{marketplace_id}/get_item_condition_policies", req.pathParams);
    
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
        const res: operations.GetItemConditionPoliciesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.itemConditionPolicyResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
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
   * getListingStructurePolicies - This method returns the eBay policies that define the allowed listing structures for the categories of a specific marketplace. The listing-structure policies currently pertain to whether or not you can list items with variations. By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the filter query parameter to specify only the category IDs you want to review. Tip: This method can return a very large response payload and we strongly recommend you get the results from this call in a GZIP file by including the following HTTP header with your request: &nbsp;&nbsp;Accept-Encoding: application/gzip
  **/
  getListingStructurePolicies(
    req: operations.GetListingStructurePoliciesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingStructurePoliciesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingStructurePoliciesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/marketplace/{marketplace_id}/get_listing_structure_policies", req.pathParams);
    
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
        const res: operations.GetListingStructurePoliciesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listingStructurePolicyResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
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
   * getNegotiatedPricePolicies - This method returns the eBay policies that define the supported negotiated price features (like &quot;best offer&quot;) for the categories of a specific marketplace. By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the filter query parameter to specify only the category IDs you want to review. Tip: This method can return a very large response payload and we strongly recommend you get the results from this call in a GZIP file by including the following HTTP header with your request: &nbsp;&nbsp;Accept-Encoding: application/gzip
  **/
  getNegotiatedPricePolicies(
    req: operations.GetNegotiatedPricePoliciesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNegotiatedPricePoliciesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNegotiatedPricePoliciesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/marketplace/{marketplace_id}/get_negotiated_price_policies", req.pathParams);
    
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
        const res: operations.GetNegotiatedPricePoliciesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.negotiatedPricePolicyResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
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
   * getProductAdoptionPolicies - This method retrieves a list of leaf categories for a marketplace and identifies the categories that require items to have an eBay product ID value in order to be listed in those categories. An eBay product ID value (known as an &quot;ePID&quot;) is a value that references a specific product in the eBay Catalog. Important: eBay catalog product adoption is not currently required for any product categories. If product adoption requirements change, they will be noted here. Use the marketplace_id path parameter to specify the marketplace you want to review and use the filter query parameter to limit the categories returned in the response. Tip: This method can return a very large response payload and we strongly recommend you get the results from this call in a GZIP file by including the following HTTP header with your request: &nbsp;&nbsp;Accept-Encoding: application/gzip
  **/
  getProductAdoptionPolicies(
    req: operations.GetProductAdoptionPoliciesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProductAdoptionPoliciesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProductAdoptionPoliciesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/marketplace/{marketplace_id}/get_product_adoption_policies", req.pathParams);
    
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
        const res: operations.GetProductAdoptionPoliciesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.productAdoptionPolicyResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
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
   * getReturnPolicies - This method returns the eBay policies that define whether or not you must include a return policy for the items you list in the categories of a specific marketplace, plus the guidelines for creating domestic and international return policies in the different eBay categories. By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the filter query parameter to specify only the category IDs you want to review. Tip: This method can return a very large response payload and we strongly recommend you get the results from this call in a GZIP file by including the following HTTP header with your request: &nbsp;&nbsp;Accept-Encoding: application/gzip
  **/
  getReturnPolicies(
    req: operations.GetReturnPoliciesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetReturnPoliciesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetReturnPoliciesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/marketplace/{marketplace_id}/get_return_policies", req.pathParams);
    
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
        const res: operations.GetReturnPoliciesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.returnPolicyResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
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
   * getSalesTaxJurisdictions - This method retrieves all the sales tax jurisdictions for the country that you specify in the countryCode path parameter. Countries with valid sales tax jurisdictions are Canada and the US. The response from this call tells you the jurisdictions for which a seller can configure tax tables. Although setting up tax tables is optional, you can use the createOrReplaceSalesTax in the Account API call to configure the tax tables for the jurisdictions you sell to.
  **/
  getSalesTaxJurisdictions(
    req: operations.GetSalesTaxJurisdictionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSalesTaxJurisdictionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSalesTaxJurisdictionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/country/{countryCode}/sales_tax_jurisdiction", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSalesTaxJurisdictionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.salesTaxJurisdictions = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
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

}
