import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Automations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteAutomationsId - Delete Automation
     *
     * Delete Automation
    **/
    deleteAutomationsId(req: operations.DeleteAutomationsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAutomationsIdResponse>;
    /**
     * getAutomations - List Automations
     *
     * List Automations
    **/
    getAutomations(req: operations.GetAutomationsRequest, config?: AxiosRequestConfig): Promise<operations.GetAutomationsResponse>;
    /**
     * getAutomationsId - Show Automation
     *
     * Show Automation
    **/
    getAutomationsId(req: operations.GetAutomationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAutomationsIdResponse>;
    /**
     * patchAutomationsId - Update Automation
     *
     * Update Automation
    **/
    patchAutomationsId(req: operations.PatchAutomationsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchAutomationsIdResponse>;
    /**
     * postAutomations - Create Automation
     *
     * Create Automation
    **/
    postAutomations(req: operations.PostAutomationsRequest, config?: AxiosRequestConfig): Promise<operations.PostAutomationsResponse>;
}
