import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
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
   * createFulfillmentPolicy - This method creates a new fulfillment policy where the policy encapsulates seller's terms for fulfilling item purchases. Fulfillment policies include the shipment options that the seller offers to buyers. Each policy targets a marketplaceId and categoryTypes.name combination and you can create multiple policies for each combination. Be aware that some marketplaces require a specific fulfillment policy for vehicle listings. A successful request returns the URI to the new policy in the Location response header and the ID for the new policy is returned in the response payload. Tip: For details on creating and using the business policies supported by the Account API, see eBay business policies. Marketplaces and locales Policy instructions can be localized by providing a locale in the Accept-Language HTTP request header. For example, the following setting displays field values from the request body in German: Accept-Language: de-DE. Target the specific locale of a marketplace that supports multiple locales using the Content-Language request header. For example, target the French locale of the Canadian marketplace by specifying the fr-CA locale for Content-Language. Likewise, target the Dutch locale of the Belgium marketplace by setting Content-Language: nl-BE. Tip: For details on headers, see HTTP request headers.
  **/
  createFulfillmentPolicy(
    req: operations.CreateFulfillmentPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateFulfillmentPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateFulfillmentPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/fulfillment_policy";

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
        const res: operations.CreateFulfillmentPolicyResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setFulfillmentPolicyResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createOrReplaceSalesTax - This method creates or updates a sales tax table entry for a jurisdiction. Specify the tax table entry you want to configure using the two path parameters: countryCode and jurisdictionId. A tax table entry for a jurisdiction is comprised of two fields: one for the jurisdiction's sales-tax rate and another that's a boolean value indicating whether or not shipping and handling are taxed in the jurisdiction. You can set up tax tables for countries that support different tax jurisdictions. Currently, only Canada, India, and the US support separate tax jurisdictions. If you sell into any of these countries, you can set up tax tables for any of the country's jurisdictions. Retrieve valid jurisdiction IDs using getSalesTaxJurisdictions in the Metadata API. For details on using this call, see Establishing sales-tax tables. Important! Starting in January 2019, eBay will begin to calculate, collect, and remit sales tax on behalf of sellers for items shipped to customers. This feature is rolling out on specific dates to specific US states as defined on the following page: eBay sales tax collection. Once eBay starts to collect sales tax for a state, no action is required on the seller's part and there will be no charges or fees for eBay automatically calculating, collecting and remitting sales tax. The sales-tax collection process will apply to all the sales in the states that support this feature, whether the seller is located in or outside of the United States. When a buyer purchases an item on eBay, and the ship-to address is one of the states where eBay collects the sales tax, eBay will calculate and add the applicable sales tax at checkout. The buyer will pay both the cost of the item along with the sales tax. eBay will collect and remit the tax.
  **/
  createOrReplaceSalesTax(
    req: operations.CreateOrReplaceSalesTaxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateOrReplaceSalesTaxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateOrReplaceSalesTaxRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/sales_tax/{countryCode}/{jurisdictionId}", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateOrReplaceSalesTaxResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
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
   * createPaymentPolicy - This method creates a new payment policy where the policy encapsulates seller's terms for purchase payments. Each policy targets a marketplaceId and categoryTypes.name combination and you can create multiple policies for each combination. Be aware that some marketplaces require a specific payment policy for vehicle listings. A successful request returns the URI to the new policy in the Location response header and the ID for the new policy is returned in the response payload. Tip: For details on creating and using the business policies supported by the Account API, see eBay business policies. Marketplaces and locales Policy instructions can be localized by providing a locale in the Accept-Language HTTP request header. For example, the following setting displays field values from the request body in German: Accept-Language: de-DE. Target the specific locale of a marketplace that supports multiple locales using the Content-Language request header. For example, target the French locale of the Canadian marketplace by specifying the fr-CA locale for Content-Language. Likewise, target the Dutch locale of the Belgium marketplace by setting Content-Language: nl-BE. Tip: For details on headers, see HTTP request headers.
  **/
  createPaymentPolicy(
    req: operations.CreatePaymentPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreatePaymentPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreatePaymentPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/payment_policy";

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
        const res: operations.CreatePaymentPolicyResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setPaymentPolicyResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createReturnPolicy - This method creates a new return policy where the policy encapsulates seller's terms for returning items. Use the Metadata API method getReturnPolicies to determine which categories require you to supply a return policy for the marketplace(s) into which you list. Each policy targets a marketplaceId and categoryTypes.name combination and you can create multiple policies for each combination. A successful request returns the URI to the new policy in the Location response header and the ID for the new policy is returned in the response payload. Tip: For details on creating and using the business policies supported by the Account API, see eBay business policies. Marketplaces and locales Policy instructions can be localized by providing a locale in the Accept-Language HTTP request header. For example, the following setting displays field values from the request body in German: Accept-Language: de-DE. Target the specific locale of a marketplace that supports multiple locales using the Content-Language request header. For example, target the French locale of the Canadian marketplace by specifying the fr-CA locale for Content-Language. Likewise, target the Dutch locale of the Belgium marketplace by setting Content-Language: nl-BE. Tip: For details on headers, see HTTP request headers.
  **/
  createReturnPolicy(
    req: operations.CreateReturnPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateReturnPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateReturnPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/return_policy";

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
        const res: operations.CreateReturnPolicyResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setReturnPolicyResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteFulfillmentPolicy - This method deletes a fulfillment policy. Supply the ID of the policy you want to delete in the fulfillmentPolicyId path parameter. Note that you cannot delete the default fulfillment policy.
  **/
  deleteFulfillmentPolicy(
    req: operations.DeleteFulfillmentPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFulfillmentPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFulfillmentPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/fulfillment_policy/{fulfillmentPolicyId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteFulfillmentPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 409:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deletePaymentPolicy - This method deletes a payment policy. Supply the ID of the policy you want to delete in the paymentPolicyId path parameter. Note that you cannot delete the default payment policy.
  **/
  deletePaymentPolicy(
    req: operations.DeletePaymentPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeletePaymentPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeletePaymentPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/payment_policy/{payment_policy_id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeletePaymentPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 409:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteReturnPolicy - This method deletes a return policy. Supply the ID of the policy you want to delete in the returnPolicyId path parameter. Note that you cannot delete the default return policy.
  **/
  deleteReturnPolicy(
    req: operations.DeleteReturnPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteReturnPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteReturnPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/return_policy/{return_policy_id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteReturnPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 409:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteSalesTax - This call deletes a tax table entry for a jurisdiction. Specify the jurisdiction to delete using the countryCode and jurisdictionId path parameters.
  **/
  deleteSalesTax(
    req: operations.DeleteSalesTaxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSalesTaxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSalesTaxRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/sales_tax/{countryCode}/{jurisdictionId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteSalesTaxResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
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
   * getFulfillmentPolicies - This method retrieves all the fulfillment policies configured for the marketplace you specify using the marketplace_id query parameter. Marketplaces and locales Get the correct policies for a marketplace that supports multiple locales using the Content-Language request header. For example, get the policies for the French locale of the Canadian marketplace by specifying fr-CA for the Content-Language header. Likewise, target the Dutch locale of the Belgium marketplace by setting Content-Language: nl-BE. For details on header values, see HTTP request headers.
  **/
  getFulfillmentPolicies(
    req: operations.GetFulfillmentPoliciesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFulfillmentPoliciesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFulfillmentPoliciesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/fulfillment_policy";
    
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
        const res: operations.GetFulfillmentPoliciesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fulfillmentPolicyResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getFulfillmentPolicy - This method retrieves the complete details of a fulfillment policy. Supply the ID of the policy you want to retrieve using the fulfillmentPolicyId path parameter.
  **/
  getFulfillmentPolicy(
    req: operations.GetFulfillmentPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFulfillmentPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFulfillmentPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/fulfillment_policy/{fulfillmentPolicyId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetFulfillmentPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fulfillmentPolicy = httpRes?.data;
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

  
  /**
   * getFulfillmentPolicyByName - This method retrieves the complete details for a single fulfillment policy. In the request, supply both the policy name and its associated marketplace_id as query parameters. Marketplaces and locales Get the correct policy for a marketplace that supports multiple locales using the Content-Language request header. For example, get a policy for the French locale of the Canadian marketplace by specifying fr-CA for the Content-Language header. Likewise, target the Dutch locale of the Belgium marketplace by setting Content-Language: nl-BE. For details on header values, see HTTP request headers.
  **/
  getFulfillmentPolicyByName(
    req: operations.GetFulfillmentPolicyByNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFulfillmentPolicyByNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFulfillmentPolicyByNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/fulfillment_policy/get_by_policy_name";
    
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
        const res: operations.GetFulfillmentPolicyByNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fulfillmentPolicy = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getKyc - This method is used by sellers onboarded for eBay managed payments, or sellers who are currently going through, or who are eligible for onboarding for eBay managed payments. With this method, a seller can discover if there are any action items in regards to providing more documentation and/or information about themselves, their company, or the bank account they are or will be using for seller payouts. These 'action items' are also know as 'Know Your Customer' (or KYC) checks. This method does not require any parameters other than the OAuth user token associated with the seller's account. If the managed payments seller does not currently have any pending 'KYC' action items, only a 204 No Content HTTP status code is returned, and no response payload. Note: This method is not applicable for sellers who are not eligible for eBay managed payments. For sellers who sell on one or more eBay marketplaces that currently support managed payments, they can check on their managed payments onboarding status by using the getPaymentsProgramOnboarding method.
  **/
  getKyc(
    req: operations.GetKycRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetKycResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetKycRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/kyc";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetKycResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.kycResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getOptedInPrograms - This method gets a list of the seller programs that the seller has opted-in to.
  **/
  getOptedInPrograms(
    req: operations.GetOptedInProgramsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOptedInProgramsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOptedInProgramsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/program/get_opted_in_programs";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetOptedInProgramsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.programs = httpRes?.data;
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

  
  /**
   * getPaymentPolicies - This method retrieves all the payment policies configured for the marketplace you specify using the marketplace_id query parameter. Marketplaces and locales Get the correct policies for a marketplace that supports multiple locales using the Content-Language request header. For example, get the policies for the French locale of the Canadian marketplace by specifying fr-CA for the Content-Language header. Likewise, target the Dutch locale of the Belgium marketplace by setting Content-Language: nl-BE. For details on header values, see HTTP request headers.
  **/
  getPaymentPolicies(
    req: operations.GetPaymentPoliciesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentPoliciesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentPoliciesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/payment_policy";
    
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
        const res: operations.GetPaymentPoliciesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.paymentPolicyResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPaymentPolicy - This method retrieves the complete details of a payment policy. Supply the ID of the policy you want to retrieve using the paymentPolicyId path parameter.
  **/
  getPaymentPolicy(
    req: operations.GetPaymentPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/payment_policy/{payment_policy_id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPaymentPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.paymentPolicy = httpRes?.data;
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

  
  /**
   * getPaymentPolicyByName - This method retrieves the complete details of a single payment policy. Supply both the policy name and its associated marketplace_id in the request query parameters. Marketplaces and locales Get the correct policy for a marketplace that supports multiple locales using the Content-Language request header. For example, get a policy for the French locale of the Canadian marketplace by specifying fr-CA for the Content-Language header. Likewise, target the Dutch locale of the Belgium marketplace by setting Content-Language: nl-BE. For details on header values, see HTTP request headers.
  **/
  getPaymentPolicyByName(
    req: operations.GetPaymentPolicyByNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentPolicyByNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentPolicyByNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/payment_policy/get_by_policy_name";
    
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
        const res: operations.GetPaymentPolicyByNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.paymentPolicy = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getPaymentsProgram - This method returns whether or not the user is opted-in to the specified payments program. Sellers opt-in to payments programs by marketplace and you use the marketplace_id path parameter to specify the marketplace of the status flag you want returned. Note: Currently, the only supported payments program is eBay Payments. For details, see: Managed Payments on eBay Payments Terms of Use
  **/
  getPaymentsProgram(
    req: operations.GetPaymentsProgramRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentsProgramResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentsProgramRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/payments_program/{marketplace_id}/{payments_program_type}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPaymentsProgramResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.paymentsProgramResponse = httpRes?.data;
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

  
  /**
   * getPaymentsProgramOnboarding - This method retrieves a seller's onboarding status of eBay managed payments for a specified marketplace. The overall onboarding status of the seller and the status of each onboarding step is returned. Presently, the only supported payments program type is EBAY_PAYMENTS. See Managed Payments on eBay and Payments Terms of Use. Note: Managed payments availability: eBay managed payments is presently available in the US and Germany, and will roll out to Canada, UK, and Australia in July 2020.
  **/
  getPaymentsProgramOnboarding(
    req: operations.GetPaymentsProgramOnboardingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPaymentsProgramOnboardingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPaymentsProgramOnboardingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/payments_program/{marketplace_id}/{payments_program_type}/onboarding", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPaymentsProgramOnboardingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.paymentsProgramOnboardingResponse = httpRes?.data;
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

  
  /**
   * getPrivileges - This method retrieves the seller's current set of privileges. The call returns whether or not the seller's eBay registration has been completed, as well as the details of their site-wide sellingLimt (the amount and quantity they can sell on a given day).
  **/
  getPrivileges(
    req: operations.GetPrivilegesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPrivilegesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPrivilegesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/privilege";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPrivilegesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sellingPrivileges = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRateTables - This method retrieves a seller's shipping rate tables for the country specified in the country_code query parameter. If you call this method without specifying a country code, the call returns all the seller's shipping rate tables. The method's response includes a rateTableId for each table defined by the seller. Use a table's ID value in a fulfillment policy to specify the shipping rate table to use for that policy's DOMESTIC or INTERNATIONAL shipping option (make sure the locality of the rate table matches the optionType of the shipping option). This call currently supports getting rate tables related to the following marketplaces: EBAY_AU EBAY_CA EBAY_DE EBAY_ES EBAY_FR EBAY_GB EBAY_IT EBAY_US Note: Rate tables created with the Trading API might not have been assigned a rateTableId at the time of their creation. This method can assign and return rateTableId values for rate tables with missing IDs if you make a request using the country_code where the seller has defined rate tables. Sellers can define up to 40 shipping rate tables for their account, which lets them set up different rate tables for each of the marketplaces they sell into. Go to My eBay &gt; Account &gt; Site Preferences to create and maintain the rate tables. For more, see Using shipping rate tables. If you're using the Trading API, use the rate table ID values in the RateTableDetails container of the Add/Revise/Relist calls. If the locality for a rate table is set to DOMESTIC, pass the ID value in the RateTableDetails.DomesticRateTableId field. Otherwise, if locality is INTERNATIONAL, pass the ID value in RateTableDetails.InternationalRateTableId.
  **/
  getRateTables(
    req: operations.GetRateTablesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRateTablesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRateTablesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/rate_table";
    
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
        const res: operations.GetRateTablesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.rateTableResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getReturnPolicies - This method retrieves all the return policies configured for the marketplace you specify using the marketplace_id query parameter. Marketplaces and locales Get the correct policies for a marketplace that supports multiple locales using the Content-Language request header. For example, get the policies for the French locale of the Canadian marketplace by specifying fr-CA for the Content-Language header. Likewise, target the Dutch locale of the Belgium marketplace by setting Content-Language: nl-BE. For details on header values, see HTTP request headers.
  **/
  getReturnPolicies(
    req: operations.GetReturnPoliciesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetReturnPoliciesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetReturnPoliciesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/return_policy";
    
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
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getReturnPolicy - This method retrieves the complete details of the return policy specified by the returnPolicyId path parameter.
  **/
  getReturnPolicy(
    req: operations.GetReturnPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetReturnPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetReturnPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/return_policy/{return_policy_id}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetReturnPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.returnPolicy = httpRes?.data;
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

  
  /**
   * getReturnPolicyByName - This method retrieves the complete details of a single return policy. Supply both the policy name and its associated marketplace_id in the request query parameters. Marketplaces and locales Get the correct policy for a marketplace that supports multiple locales using the Content-Language request header. For example, get a policy for the French locale of the Canadian marketplace by specifying fr-CA for the Content-Language header. Likewise, target the Dutch locale of the Belgium marketplace by setting Content-Language: nl-BE. For details on header values, see HTTP request headers.
  **/
  getReturnPolicyByName(
    req: operations.GetReturnPolicyByNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetReturnPolicyByNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetReturnPolicyByNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/return_policy/get_by_policy_name";
    
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
        const res: operations.GetReturnPolicyByNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.returnPolicy = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSalesTax - This call gets the current tax table entry for a specific tax jurisdiction. Specify the jurisdiction to retrieve using the countryCode and jurisdictionId path parameters.
  **/
  getSalesTax(
    req: operations.GetSalesTaxRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSalesTaxResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSalesTaxRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/sales_tax/{countryCode}/{jurisdictionId}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSalesTaxResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.salesTax = httpRes?.data;
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
   * getSalesTaxes - Use this call to retrieve a sales tax table that the seller established for a specific country. Specify the tax table to retrieve using the country_code query parameter.
  **/
  getSalesTaxes(
    req: operations.GetSalesTaxesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSalesTaxesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSalesTaxesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/sales_tax";
    
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
        const res: operations.GetSalesTaxesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.salesTaxes = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * optInToProgram - This method opts the seller in to an eBay seller program. Refer to the Account API overview for information about available eBay seller programs. Note: It can take up to 24-hours for eBay to process your request to opt-in to a Seller Program. Use the getOptedInPrograms call to check the status of your request after the processing period has passed.
  **/
  optInToProgram(
    req: operations.OptInToProgramRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OptInToProgramResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OptInToProgramRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/program/opt_in";

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
        const res: operations.OptInToProgramResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.optInToProgram200ApplicationJsonObject = httpRes?.data;
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

  
  /**
   * optOutOfProgram - This method opts the seller out of a seller program to which you have previously opted-in to. Get a list of the seller programs you have opted-in to using the getOptedInPrograms call.
  **/
  optOutOfProgram(
    req: operations.OptOutOfProgramRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.OptOutOfProgramResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.OptOutOfProgramRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/program/opt_out";

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
        const res: operations.OptOutOfProgramResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.optOutOfProgram200ApplicationJsonObject = httpRes?.data;
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

  
  /**
   * updateFulfillmentPolicy - This method updates an existing fulfillment policy. Specify the policy you want to update using the fulfillment_policy_id path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.
  **/
  updateFulfillmentPolicy(
    req: operations.UpdateFulfillmentPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateFulfillmentPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateFulfillmentPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/fulfillment_policy/{fulfillmentPolicyId}", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateFulfillmentPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setFulfillmentPolicyResponse = httpRes?.data;
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

  
  /**
   * updatePaymentPolicy - This method updates an existing payment policy. Specify the policy you want to update using the payment_policy_id path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.
  **/
  updatePaymentPolicy(
    req: operations.UpdatePaymentPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdatePaymentPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdatePaymentPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/payment_policy/{payment_policy_id}", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdatePaymentPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setPaymentPolicyResponse = httpRes?.data;
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

  
  /**
   * updateReturnPolicy - This method updates an existing return policy. Specify the policy you want to update using the return_policy_id path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.
  **/
  updateReturnPolicy(
    req: operations.UpdateReturnPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateReturnPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateReturnPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/return_policy/{return_policy_id}", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateReturnPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.setReturnPolicyResponse = httpRes?.data;
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
