import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Convert HTML to a PDF using Headless Chrome on AWS Lambda.
     * ### Authorize via Header of Request
     * **Authorization: YOUR-API-KEY**
    **/
    ChromeFromHtmlPost(req: operations.ChromeFromHtmlPostRequest, config?: AxiosRequestConfig): Promise<operations.ChromeFromHtmlPostResponse>;
    /**
     * Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.
     * ### Authorize via Query String Parameter
     * **apikey=YOUR-API-KEY**
     * ### Example
     * ``` https://v2018.api2pdf.com/chrome/url?url={UrlToConvert}&apikey={YourApiKey} ```
    **/
    ChromeFromUrlGet(req: operations.ChromeFromUrlGetRequest, config?: AxiosRequestConfig): Promise<operations.ChromeFromUrlGetResponse>;
    /**
     * Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda..
     * ### Authorize via Header of Request
     * **Authorization: YOUR-API-KEY**
    **/
    ChromeFromUrlPost(req: operations.ChromeFromUrlPostRequest, config?: AxiosRequestConfig): Promise<operations.ChromeFromUrlPostResponse>;
    /**
     * Convert an office document (Word, Excel, Powerpoint) or an image (jpg, gif, png) to a PDF using LibreOffice on AWS Lambda.
     * ### Authorize via Header of Request
     * **Authorization: YOUR-API-KEY**
    **/
    LibreConvertPost(req: operations.LibreConvertPostRequest, config?: AxiosRequestConfig): Promise<operations.LibreConvertPostResponse>;
    /**
     * Merge two or more PDFs together on AWS Lambda.
     * ### Authorize via Header of Request
     * **Authorization: YOUR-API-KEY**
    **/
    MergePost(req: operations.MergePostRequest, config?: AxiosRequestConfig): Promise<operations.MergePostResponse>;
    /**
     * Convert HTML to a PDF using WkHtmlToPdf on AWS Lambda.
     * ### Authorize via Header of Request
     * **Authorization: YOUR-API-KEY**
    **/
    WkhtmltopdfFromHtmlPost(req: operations.WkhtmltopdfFromHtmlPostRequest, config?: AxiosRequestConfig): Promise<operations.WkhtmltopdfFromHtmlPostResponse>;
    /**
     * Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.
     * ### Authorize via Query String Parameter
     * **apikey=YOUR-API-KEY**
     * ### Example
     * ``` https://v2018.api2pdf.com/wkhtmltopdf/url?url={UrlToConvert}&apikey={YourApiKey} ```
    **/
    WkhtmltopdfFromUrlGet(req: operations.WkhtmltopdfFromUrlGetRequest, config?: AxiosRequestConfig): Promise<operations.WkhtmltopdfFromUrlGetResponse>;
    /**
     * Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda..
     * ### Authorize via Header of Request
     * **Authorization: YOUR-API-KEY**
    **/
    WkhtmltopdfFromUrlPost(req: operations.WkhtmltopdfFromUrlPostRequest, config?: AxiosRequestConfig): Promise<operations.WkhtmltopdfFromUrlPostResponse>;
    /**
     * See full list of options and documentation [here](https://www.api2pdf.com/documentation/advanced-options-zxing-zebra-crossing-barcodes/)
     * ### Authorize via Query String Parameter
     * **apikey=YOUR-API-KEY**
     * ### Example
     * ``` https://v2018.api2pdf.com/zebra?format={format}&apikey={YourApiKey}&value={YourText} ```
    **/
    ZebraGet(req: operations.ZebraGetRequest, config?: AxiosRequestConfig): Promise<operations.ZebraGetResponse>;
}
export {};
