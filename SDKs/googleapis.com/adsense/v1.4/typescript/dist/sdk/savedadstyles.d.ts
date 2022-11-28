import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Savedadstyles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adsenseSavedadstylesGet - Get a specific saved ad style from the user's account.
    **/
    adsenseSavedadstylesGet(req: operations.AdsenseSavedadstylesGetRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseSavedadstylesGetResponse>;
    /**
     * adsenseSavedadstylesList - List all saved ad styles in the user's account.
    **/
    adsenseSavedadstylesList(req: operations.AdsenseSavedadstylesListRequest, config?: AxiosRequestConfig): Promise<operations.AdsenseSavedadstylesListResponse>;
}
