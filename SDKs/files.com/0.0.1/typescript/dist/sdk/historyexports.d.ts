import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class HistoryExports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getHistoryExportsId - Show History Export
     *
     * Show History Export
    **/
    getHistoryExportsId(req: operations.GetHistoryExportsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetHistoryExportsIdResponse>;
    /**
     * postHistoryExports - Create History Export
     *
     * Create History Export
    **/
    postHistoryExports(req: operations.PostHistoryExportsRequest, config?: AxiosRequestConfig): Promise<operations.PostHistoryExportsResponse>;
}
