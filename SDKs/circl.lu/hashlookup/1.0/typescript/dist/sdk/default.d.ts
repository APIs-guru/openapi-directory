import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Default {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getLookupSha1Sha1 - Lookup SHA-1.
    **/
    getLookupSha1Sha1(req: operations.GetLookupSha1Sha1Request, config?: AxiosRequestConfig): Promise<operations.GetLookupSha1Sha1Response>;
    /**
     * getSessionGetName - Return set of matching and non-matching hashes from a session.
    **/
    getSessionGetName(req: operations.GetSessionGetNameRequest, config?: AxiosRequestConfig): Promise<operations.GetSessionGetNameResponse>;
    /**
     * getInfo - Info about the hashlookup database
    **/
    getInfo(config?: AxiosRequestConfig): Promise<operations.GetInfoResponse>;
    /**
     * getLookup - Lookup MD5.
    **/
    getLookup(req: operations.GetLookupRequest, config?: AxiosRequestConfig): Promise<operations.GetLookupResponse>;
    /**
     * getSessioncreate - Create a session key to keep search context. The session is attached to a name. After the session is created, the header `hashlookup_session` can be set to the session name.
    **/
    getSessioncreate(req: operations.GetSessioncreateRequest, config?: AxiosRequestConfig): Promise<operations.GetSessioncreateResponse>;
    /**
     * postBulkmd5 - Bulk search of MD5 hashes in a JSON array with the key 'hashes'.
    **/
    postBulkmd5(config?: AxiosRequestConfig): Promise<operations.PostBulkmd5Response>;
    /**
     * postBulksha1 - Bulk search of SHA1 hashes in a JSON array with the 'hashes'.
    **/
    postBulksha1(config?: AxiosRequestConfig): Promise<operations.PostBulksha1Response>;
}
