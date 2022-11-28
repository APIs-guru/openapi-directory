import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Opportunities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * opportunitiesAdd - Create opportunity
     *
     * Create opportunity
    **/
    opportunitiesAdd(req: operations.OpportunitiesAddRequest, config?: AxiosRequestConfig): Promise<operations.OpportunitiesAddResponse>;
    /**
     * opportunitiesAll - List opportunities
     *
     * List opportunities
    **/
    opportunitiesAll(req: operations.OpportunitiesAllRequest, config?: AxiosRequestConfig): Promise<operations.OpportunitiesAllResponse>;
    /**
     * opportunitiesDelete - Delete opportunity
     *
     * Delete opportunity
    **/
    opportunitiesDelete(req: operations.OpportunitiesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.OpportunitiesDeleteResponse>;
    /**
     * opportunitiesOne - Get opportunity
     *
     * Get opportunity
    **/
    opportunitiesOne(req: operations.OpportunitiesOneRequest, config?: AxiosRequestConfig): Promise<operations.OpportunitiesOneResponse>;
    /**
     * opportunitiesUpdate - Update opportunity
     *
     * Update opportunity
    **/
    opportunitiesUpdate(req: operations.OpportunitiesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.OpportunitiesUpdateResponse>;
}
