import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MeteringDecorator {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * meteringGet - Meter Reading
     *
     * Retrieves a metered reading using account (Stromkonto).
     *
    **/
    meteringGet(req: operations.MeteringGetRequest, config?: AxiosRequestConfig): Promise<operations.MeteringGetResponse>;
    /**
     * meteringPost - Meter Reading
     *
     * Post meter reading and get it decorated. Best practice is to first create a new Stromkonto with the register method and choose a nice secret to protect updates. Now regularly send updates to get readings (consumption) split into green power (1.8.1) and grey power (1.8.2).
     *
    **/
    meteringPost(req: operations.MeteringPostRequest, config?: AxiosRequestConfig): Promise<operations.MeteringPostResponse>;
}
