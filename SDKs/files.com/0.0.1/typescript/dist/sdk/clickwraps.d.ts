import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Clickwraps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteClickwrapsId - Delete Clickwrap
     *
     * Delete Clickwrap
    **/
    deleteClickwrapsId(req: operations.DeleteClickwrapsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteClickwrapsIdResponse>;
    /**
     * getClickwraps - List Clickwraps
     *
     * List Clickwraps
    **/
    getClickwraps(req: operations.GetClickwrapsRequest, config?: AxiosRequestConfig): Promise<operations.GetClickwrapsResponse>;
    /**
     * getClickwrapsId - Show Clickwrap
     *
     * Show Clickwrap
    **/
    getClickwrapsId(req: operations.GetClickwrapsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetClickwrapsIdResponse>;
    /**
     * patchClickwrapsId - Update Clickwrap
     *
     * Update Clickwrap
    **/
    patchClickwrapsId(req: operations.PatchClickwrapsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchClickwrapsIdResponse>;
    /**
     * postClickwraps - Create Clickwrap
     *
     * Create Clickwrap
    **/
    postClickwraps(req: operations.PostClickwrapsRequest, config?: AxiosRequestConfig): Promise<operations.PostClickwrapsResponse>;
}
