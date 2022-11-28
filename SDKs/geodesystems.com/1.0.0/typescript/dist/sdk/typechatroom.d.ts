import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeChatroom {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchChatroom - Search API for 'Chat Room' entry type
     *
     * API to search for entries of type Chat Room
    **/
    searchChatroom(req: operations.SearchChatroomRequest, config?: AxiosRequestConfig): Promise<operations.SearchChatroomResponse>;
}
