import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Styles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteStylesPath - Delete Style
     *
     * Delete Style
    **/
    deleteStylesPath(req: operations.DeleteStylesPathRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStylesPathResponse>;
    /**
     * getStylesPath - Show Style
     *
     * Show Style
    **/
    getStylesPath(req: operations.GetStylesPathRequest, config?: AxiosRequestConfig): Promise<operations.GetStylesPathResponse>;
    /**
     * patchStylesPath - Update Style
     *
     * Update Style
    **/
    patchStylesPath(req: operations.PatchStylesPathRequest, config?: AxiosRequestConfig): Promise<operations.PatchStylesPathResponse>;
}
