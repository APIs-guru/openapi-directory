import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Translation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getShakespeareTranslate - Translate from English to Shakespeare English.
    **/
    getShakespeareTranslate(req: operations.GetShakespeareTranslateRequest, config?: AxiosRequestConfig): Promise<operations.GetShakespeareTranslateResponse>;
}
