import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Tenders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * tendersAdd - Create Tender
     *
     * Create Tender
    **/
    tendersAdd(req: operations.TendersAddRequest, config?: AxiosRequestConfig): Promise<operations.TendersAddResponse>;
    /**
     * tendersAll - List Tenders
     *
     * List Tenders
    **/
    tendersAll(req: operations.TendersAllRequest, config?: AxiosRequestConfig): Promise<operations.TendersAllResponse>;
    /**
     * tendersDelete - Delete Tender
     *
     * Delete Tender
    **/
    tendersDelete(req: operations.TendersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TendersDeleteResponse>;
    /**
     * tendersOne - Get Tender
     *
     * Get Tender
    **/
    tendersOne(req: operations.TendersOneRequest, config?: AxiosRequestConfig): Promise<operations.TendersOneResponse>;
    /**
     * tendersUpdate - Update Tender
     *
     * Update Tender
    **/
    tendersUpdate(req: operations.TendersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TendersUpdateResponse>;
}
