import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://v2018.api2pdf.com",
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

/* SDK Documentation: https://www.api2pdf.com - Find out more about Api2Pdf*/
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
   * chromeFromHtmlPost - Convert raw HTML to PDF
   *
   * Convert HTML to a PDF using Headless Chrome on AWS Lambda.
   * ### Authorize via Header of Request
   * **Authorization: YOUR-API-KEY**
  **/
  chromeFromHtmlPost(
    req: operations.ChromeFromHtmlPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ChromeFromHtmlPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ChromeFromHtmlPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/chrome/html";

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
        const res: operations.ChromeFromHtmlPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiResponseSuccess = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiResponseFailure = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * chromeFromUrlGet - Convert URL to PDF
   *
   * Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.
   * ### Authorize via Query String Parameter
   * **apikey=YOUR-API-KEY**
   * ### Example
   * ``` https://v2018.api2pdf.com/chrome/url?url={UrlToConvert}&apikey={YourApiKey} ``` 
  **/
  chromeFromUrlGet(
    req: operations.ChromeFromUrlGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ChromeFromUrlGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ChromeFromUrlGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/chrome/url";
    
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
        const res: operations.ChromeFromUrlGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiResponseSuccess = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/pdf`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.chromeFromUrlGet200ApplicationPdfBinaryString = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiResponseFailure = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * chromeFromUrlPost - Convert URL to PDF
   *
   * Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda..
   * ### Authorize via Header of Request
   * **Authorization: YOUR-API-KEY**
  **/
  chromeFromUrlPost(
    req: operations.ChromeFromUrlPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ChromeFromUrlPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ChromeFromUrlPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/chrome/url";

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
        const res: operations.ChromeFromUrlPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiResponseSuccess = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiResponseFailure = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * libreConvertPost - Convert office document or image to PDF
   *
   * Convert an office document (Word, Excel, Powerpoint) or an image (jpg, gif, png) to a PDF using LibreOffice on AWS Lambda.
   * ### Authorize via Header of Request
   * **Authorization: YOUR-API-KEY**
  **/
  libreConvertPost(
    req: operations.LibreConvertPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LibreConvertPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LibreConvertPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/libreoffice/convert";

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
        const res: operations.LibreConvertPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiResponseSuccess = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiResponseFailure = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * mergePost - Merge multiple PDFs together
   *
   * Merge two or more PDFs together on AWS Lambda.
   * ### Authorize via Header of Request
   * **Authorization: YOUR-API-KEY**
  **/
  mergePost(
    req: operations.MergePostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MergePostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MergePostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/merge";

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
        const res: operations.MergePostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiResponseSuccess = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiResponseFailure = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * wkhtmltopdfFromHtmlPost - Convert raw HTML to PDF
   *
   * Convert HTML to a PDF using WkHtmlToPdf on AWS Lambda.
   * ### Authorize via Header of Request
   * **Authorization: YOUR-API-KEY**
  **/
  wkhtmltopdfFromHtmlPost(
    req: operations.WkhtmltopdfFromHtmlPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.WkhtmltopdfFromHtmlPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.WkhtmltopdfFromHtmlPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/wkhtmltopdf/html";

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
        const res: operations.WkhtmltopdfFromHtmlPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiResponseSuccess = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiResponseFailure = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * wkhtmltopdfFromUrlGet - Convert URL to PDF
   *
   * Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.
   * ### Authorize via Query String Parameter
   * **apikey=YOUR-API-KEY**
   * ### Example
   * ``` https://v2018.api2pdf.com/wkhtmltopdf/url?url={UrlToConvert}&apikey={YourApiKey} ``` 
  **/
  wkhtmltopdfFromUrlGet(
    req: operations.WkhtmltopdfFromUrlGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.WkhtmltopdfFromUrlGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.WkhtmltopdfFromUrlGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/wkhtmltopdf/url";
    
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
        const res: operations.WkhtmltopdfFromUrlGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiResponseSuccess = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/pdf`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.wkhtmltopdfFromUrlGet200ApplicationPdfBinaryString = out;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiResponseFailure = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * wkhtmltopdfFromUrlPost - Convert URL to PDF
   *
   * Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda..
   * ### Authorize via Header of Request
   * **Authorization: YOUR-API-KEY**
  **/
  wkhtmltopdfFromUrlPost(
    req: operations.WkhtmltopdfFromUrlPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.WkhtmltopdfFromUrlPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.WkhtmltopdfFromUrlPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/wkhtmltopdf/url";

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
        const res: operations.WkhtmltopdfFromUrlPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiResponseSuccess = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiResponseFailure = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * zebraGet - Generate bar codes and QR codes with ZXING.
   *
   * See full list of options and documentation [here](https://www.api2pdf.com/documentation/advanced-options-zxing-zebra-crossing-barcodes/)
   * ### Authorize via Query String Parameter
   * **apikey=YOUR-API-KEY**
   * ### Example
   * ``` https://v2018.api2pdf.com/zebra?format={format}&apikey={YourApiKey}&value={YourText} ``` 
  **/
  zebraGet(
    req: operations.ZebraGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ZebraGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ZebraGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/zebra";
    
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
        const res: operations.ZebraGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `image/png`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.zebraGet200ImagePngBinaryString = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
