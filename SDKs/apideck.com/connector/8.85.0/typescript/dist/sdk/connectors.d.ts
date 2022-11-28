import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Connectors {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * connectorsAll - List Connectors
     *
     * List Connectors
    **/
    connectorsAll(req: operations.ConnectorsAllRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsAllResponse>;
    /**
     * connectorsOne - Get Connector
     *
     * Get Connector
    **/
    connectorsOne(req: operations.ConnectorsOneRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsOneResponse>;
}
