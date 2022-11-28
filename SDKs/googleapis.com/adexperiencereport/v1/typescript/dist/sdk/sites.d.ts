import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Sites {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adexperiencereportSitesGet - Gets a site's Ad Experience Report summary.
    **/
    adexperiencereportSitesGet(req: operations.AdexperiencereportSitesGetRequest, config?: AxiosRequestConfig): Promise<operations.AdexperiencereportSitesGetResponse>;
}
