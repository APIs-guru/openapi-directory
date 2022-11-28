import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PrivateFacts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteFact - Delete a Fact entry identified by the id.
    **/
    deleteFact(req: operations.DeleteFactRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFactResponse>;
    /**
     * getFact - Get a Fact belonging to the id.
    **/
    getFact(req: operations.GetFactRequest, config?: AxiosRequestConfig): Promise<operations.GetFactResponse>;
    /**
     * putFact - Add a Fact entry to the database (private collection).
    **/
    putFact(req: operations.PutFactRequest, config?: AxiosRequestConfig): Promise<operations.PutFactResponse>;
}
