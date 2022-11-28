import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PrivateRiddles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteRiddle - Create a random Riddle entry.
    **/
    deleteRiddle(req: operations.DeleteRiddleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRiddleResponse>;
    /**
     * getRiddle - Get a Riddle entry for a given id. Retrieves a riddle question and answer based on the id.
    **/
    getRiddle(req: operations.GetRiddleRequest, config?: AxiosRequestConfig): Promise<operations.GetRiddleResponse>;
    /**
     * postRiddle - Create a random Riddle entry. Same as 'PUT' but can be used when some of the client libraries don't support 'PUT'.
    **/
    postRiddle(req: operations.PostRiddleRequest, config?: AxiosRequestConfig): Promise<operations.PostRiddleResponse>;
    /**
     * putRiddle - Create a random Riddle entry.
    **/
    putRiddle(req: operations.PutRiddleRequest, config?: AxiosRequestConfig): Promise<operations.PutRiddleResponse>;
}
