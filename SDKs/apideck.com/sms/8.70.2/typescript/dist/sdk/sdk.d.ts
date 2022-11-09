import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Create Message
    **/
    MessagesAdd(req: operations.MessagesAddRequest, config?: AxiosRequestConfig): Promise<operations.MessagesAddResponse>;
    /**
     * List Messages
    **/
    MessagesAll(req: operations.MessagesAllRequest, config?: AxiosRequestConfig): Promise<operations.MessagesAllResponse>;
    /**
     * Delete Message
    **/
    MessagesDelete(req: operations.MessagesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MessagesDeleteResponse>;
    /**
     * Get Message
    **/
    MessagesOne(req: operations.MessagesOneRequest, config?: AxiosRequestConfig): Promise<operations.MessagesOneResponse>;
    /**
     * Update Message
    **/
    MessagesUpdate(req: operations.MessagesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.MessagesUpdateResponse>;
}
export {};
