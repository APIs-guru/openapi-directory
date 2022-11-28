import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Leads {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * leadsAdd - Create lead
     *
     * Create lead
    **/
    leadsAdd(req: operations.LeadsAddRequest, config?: AxiosRequestConfig): Promise<operations.LeadsAddResponse>;
    /**
     * leadsAll - List leads
     *
     * List leads
    **/
    leadsAll(req: operations.LeadsAllRequest, config?: AxiosRequestConfig): Promise<operations.LeadsAllResponse>;
    /**
     * leadsDelete - Delete lead
     *
     * Delete lead
    **/
    leadsDelete(req: operations.LeadsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.LeadsDeleteResponse>;
    /**
     * leadsOne - Get lead
     *
     * Get lead
    **/
    leadsOne(req: operations.LeadsOneRequest, config?: AxiosRequestConfig): Promise<operations.LeadsOneResponse>;
    /**
     * leadsUpdate - Update lead
     *
     * Update lead
    **/
    leadsUpdate(req: operations.LeadsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.LeadsUpdateResponse>;
}
