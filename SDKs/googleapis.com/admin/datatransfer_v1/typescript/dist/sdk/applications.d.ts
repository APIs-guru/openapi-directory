import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Applications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * datatransferApplicationsGet - Retrieves information about an application for the given application ID.
    **/
    datatransferApplicationsGet(req: operations.DatatransferApplicationsGetRequest, config?: AxiosRequestConfig): Promise<operations.DatatransferApplicationsGetResponse>;
    /**
     * datatransferApplicationsList - Lists the applications available for data transfer for a customer.
    **/
    datatransferApplicationsList(req: operations.DatatransferApplicationsListRequest, config?: AxiosRequestConfig): Promise<operations.DatatransferApplicationsListResponse>;
}
