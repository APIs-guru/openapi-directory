import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://chompthis.com/api/v2",
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
   * getFoodBrandedBarcodePhp - Get a branded food item using a barcode
   *
   * ## Get data for a branded food using the food's UPC/EAN barcode.
   * 
   * **Example** 
   * > ```https://chompthis.com/api/v2/food/branded/barcode.php?api_key=API_KEY&code=CODE```
   * 
   * **Tips**
   *   * Read our **[Knowledge Base article](https://desk.zoho.com/portal/chompthis/kb/articles/im-having-trouble-getting-matches-for-barcodes-what-can-id-do)** for helpful tips and tricks.
   * 
  **/
  getFoodBrandedBarcodePhp(
    req: operations.GetFoodBrandedBarcodePhpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFoodBrandedBarcodePhpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFoodBrandedBarcodePhpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/food/branded/barcode.php";
    
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
        const res: operations.GetFoodBrandedBarcodePhpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.brandedFoodObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
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
   * getFoodBrandedNamePhp - Get a branded food item by name
   *
   * ## Search for branded food items by name.
   * 
   * **Example**
   * > ```https://chompthis.com/api/v2/food/branded/name.php?api_key=API_KEY&name=NAME```
   * 
   * **Tips**
   *   * Get started by using our **[food lookup tool](https://chompthis.com/api/lookup.php)**.
   * 
   * > This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription.
   * 
  **/
  getFoodBrandedNamePhp(
    req: operations.GetFoodBrandedNamePhpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFoodBrandedNamePhpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFoodBrandedNamePhpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/food/branded/name.php";
    
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
        const res: operations.GetFoodBrandedNamePhpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.brandedFoodObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
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
   * getFoodBrandedSearchPhp - Get data for branded food items using various search parameters
   *
   * ## Search for branded food items using various parameters.
   * 
   * **Example**
   * > ```https://chompthis.com/api/v2/food/branded/search.php?api_key=API_KEY&brand=BRAND&country=COUNTRY&page=1```
   * 
   * **Tips** 
   *   * Get started by using the **[Query Builder](https://chompthis.com/api/build.php)**.
   * 
   * > This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription.
   * 
  **/
  getFoodBrandedSearchPhp(
    req: operations.GetFoodBrandedSearchPhpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFoodBrandedSearchPhpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFoodBrandedSearchPhpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/food/branded/search.php";
    
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
        const res: operations.GetFoodBrandedSearchPhpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.brandedFoodObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
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
   * getFoodIngredientSearchPhp - Get raw/generic food ingredient item(s)
   *
   * ## Get data for a specific ingredient or a specific set of ingredients.
   * 
   * **Example #1: Single Ingredient**
   * > ```https://chompthis.com/api/v2/ingredient/search.php?api_key=API_KEY&find=raw broccoli```
   * 
   * **Example #2: Set of Ingredients**
   * > ```https://chompthis.com/api/v2/ingredient/search.php?api_key=API_KEY&find=raw broccoli,mashed potatoes,chicken drumstick```
   * 
   * **Tips**
   *   * Expose ingredient endpoints by using our **[food lookup tool](https://chompthis.com/api/lookup.php)**.
   * 
   * > This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription.
   * 
  **/
  getFoodIngredientSearchPhp(
    req: operations.GetFoodIngredientSearchPhpRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFoodIngredientSearchPhpResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFoodIngredientSearchPhpRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/food/ingredient/search.php";
    
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
        const res: operations.GetFoodIngredientSearchPhpResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.ingredientObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
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
