import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://v2018.api2pdf.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * chromeFromHtmlPost - Convert raw HTML to PDF
     *
     * Convert HTML to a PDF using Headless Chrome on AWS Lambda.
     * ### Authorize via Header of Request
     * **Authorization: YOUR-API-KEY**
    **/
    chromeFromHtmlPost(req: operations.ChromeFromHtmlPostRequest, config?: AxiosRequestConfig): Promise<operations.ChromeFromHtmlPostResponse>;
    /**
     * chromeFromUrlGet - Convert URL to PDF
     *
     * Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.
     * ### Authorize via Query String Parameter
     * **apikey=YOUR-API-KEY**
     * ### Example
     * ``` https://v2018.api2pdf.com/chrome/url?url={UrlToConvert}&apikey={YourApiKey} ```
    **/
    chromeFromUrlGet(req: operations.ChromeFromUrlGetRequest, config?: AxiosRequestConfig): Promise<operations.ChromeFromUrlGetResponse>;
    /**
     * chromeFromUrlPost - Convert URL to PDF
     *
     * Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda..
     * ### Authorize via Header of Request
     * **Authorization: YOUR-API-KEY**
    **/
    chromeFromUrlPost(req: operations.ChromeFromUrlPostRequest, config?: AxiosRequestConfig): Promise<operations.ChromeFromUrlPostResponse>;
    /**
     * libreConvertPost - Convert office document or image to PDF
     *
     * Convert an office document (Word, Excel, Powerpoint) or an image (jpg, gif, png) to a PDF using LibreOffice on AWS Lambda.
     * ### Authorize via Header of Request
     * **Authorization: YOUR-API-KEY**
    **/
    libreConvertPost(req: operations.LibreConvertPostRequest, config?: AxiosRequestConfig): Promise<operations.LibreConvertPostResponse>;
    /**
     * mergePost - Merge multiple PDFs together
     *
     * Merge two or more PDFs together on AWS Lambda.
     * ### Authorize via Header of Request
     * **Authorization: YOUR-API-KEY**
    **/
    mergePost(req: operations.MergePostRequest, config?: AxiosRequestConfig): Promise<operations.MergePostResponse>;
    /**
     * wkhtmltopdfFromHtmlPost - Convert raw HTML to PDF
     *
     * Convert HTML to a PDF using WkHtmlToPdf on AWS Lambda.
     * ### Authorize via Header of Request
     * **Authorization: YOUR-API-KEY**
    **/
    wkhtmltopdfFromHtmlPost(req: operations.WkhtmltopdfFromHtmlPostRequest, config?: AxiosRequestConfig): Promise<operations.WkhtmltopdfFromHtmlPostResponse>;
    /**
     * wkhtmltopdfFromUrlGet - Convert URL to PDF
     *
     * Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.
     * ### Authorize via Query String Parameter
     * **apikey=YOUR-API-KEY**
     * ### Example
     * ``` https://v2018.api2pdf.com/wkhtmltopdf/url?url={UrlToConvert}&apikey={YourApiKey} ```
    **/
    wkhtmltopdfFromUrlGet(req: operations.WkhtmltopdfFromUrlGetRequest, config?: AxiosRequestConfig): Promise<operations.WkhtmltopdfFromUrlGetResponse>;
    /**
     * wkhtmltopdfFromUrlPost - Convert URL to PDF
     *
     * Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda..
     * ### Authorize via Header of Request
     * **Authorization: YOUR-API-KEY**
    **/
    wkhtmltopdfFromUrlPost(req: operations.WkhtmltopdfFromUrlPostRequest, config?: AxiosRequestConfig): Promise<operations.WkhtmltopdfFromUrlPostResponse>;
    /**
     * zebraGet - Generate bar codes and QR codes with ZXING.
     *
     * See full list of options and documentation [here](https://www.api2pdf.com/documentation/advanced-options-zxing-zebra-crossing-barcodes/)
     * ### Authorize via Query String Parameter
     * **apikey=YOUR-API-KEY**
     * ### Example
     * ``` https://v2018.api2pdf.com/zebra?format={format}&apikey={YourApiKey}&value={YourText} ```
    **/
    zebraGet(req: operations.ZebraGetRequest, config?: AxiosRequestConfig): Promise<operations.ZebraGetResponse>;
}
export {};
