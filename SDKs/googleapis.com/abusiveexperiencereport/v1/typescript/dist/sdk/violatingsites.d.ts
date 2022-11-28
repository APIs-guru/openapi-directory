import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ViolatingSites {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * abusiveexperiencereportViolatingSitesList - Lists sites that are failing in the Abusive Experience Report.
    **/
    abusiveexperiencereportViolatingSitesList(req: operations.AbusiveexperiencereportViolatingSitesListRequest, config?: AxiosRequestConfig): Promise<operations.AbusiveexperiencereportViolatingSitesListResponse>;
}
