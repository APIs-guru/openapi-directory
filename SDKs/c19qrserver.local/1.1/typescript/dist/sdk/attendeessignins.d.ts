import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AttendeesSignins {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteSigninSigninId - Delete a signin record
     *
     * Delete a signin record
     *
    **/
    deleteSigninSigninId(req: operations.DeleteSigninSigninIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSigninSigninIdResponse>;
    /**
     * getSigninSigninId - Retrieve the information associated with a signin record
     *
     * Retrieve the information associated with a signin record
     *
    **/
    getSigninSigninId(req: operations.GetSigninSigninIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSigninSigninIdResponse>;
    /**
     * getSignins - Get signin info
     *
     * Returns a list of signin objects sorted by signin ID descending.
    **/
    getSignins(req: operations.GetSigninsRequest, config?: AxiosRequestConfig): Promise<operations.GetSigninsResponse>;
    /**
     * postSignin - Create a new signin record
    **/
    postSignin(req: operations.PostSigninRequest, config?: AxiosRequestConfig): Promise<operations.PostSigninResponse>;
    /**
     * putSigninSigninId - Update a signin record
     *
     * Update a signin record
     *
    **/
    putSigninSigninId(req: operations.PutSigninSigninIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSigninSigninIdResponse>;
}
