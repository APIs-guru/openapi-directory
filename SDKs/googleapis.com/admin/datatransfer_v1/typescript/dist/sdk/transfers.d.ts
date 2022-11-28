import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Transfers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * datatransferTransfersGet - Retrieves a data transfer request by its resource ID.
    **/
    datatransferTransfersGet(req: operations.DatatransferTransfersGetRequest, config?: AxiosRequestConfig): Promise<operations.DatatransferTransfersGetResponse>;
    /**
     * datatransferTransfersInsert - Inserts a data transfer request. See the [Transfer parameters](/admin-sdk/data-transfer/v1/parameters) reference for specific application requirements.
    **/
    datatransferTransfersInsert(req: operations.DatatransferTransfersInsertRequest, config?: AxiosRequestConfig): Promise<operations.DatatransferTransfersInsertResponse>;
    /**
     * datatransferTransfersList - Lists the transfers for a customer by source user, destination user, or status.
    **/
    datatransferTransfersList(req: operations.DatatransferTransfersListRequest, config?: AxiosRequestConfig): Promise<operations.DatatransferTransfersListResponse>;
}
