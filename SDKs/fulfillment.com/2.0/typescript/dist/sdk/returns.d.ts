import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Returns {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getReturns - List Returns
     *
     * Retrieves summary return activity during the queried timespan. Although return knowledge can be learned from `GET /orders/{id}` it can take an unknown amount of time for an order that is refused or undeliverable to return to an FDC facility. Instead we recommend regularly querying this API.
    **/
    getReturns(req: operations.GetReturnsRequest, config?: AxiosRequestConfig): Promise<operations.GetReturnsResponse>;
    /**
     * putReturns - Inform us of an RMA
     *
     * Inform FDC of an expected return.
    **/
    putReturns(req: operations.PutReturnsRequest, config?: AxiosRequestConfig): Promise<operations.PutReturnsResponse>;
}
