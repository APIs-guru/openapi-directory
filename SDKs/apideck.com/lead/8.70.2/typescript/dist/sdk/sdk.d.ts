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
     * Create lead
    **/
    LeadsAdd(req: operations.LeadsAddRequest, config?: AxiosRequestConfig): Promise<operations.LeadsAddResponse>;
    /**
     * List leads
    **/
    LeadsAll(req: operations.LeadsAllRequest, config?: AxiosRequestConfig): Promise<operations.LeadsAllResponse>;
    /**
     * Delete lead
    **/
    LeadsDelete(req: operations.LeadsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.LeadsDeleteResponse>;
    /**
     * Get lead
    **/
    LeadsOne(req: operations.LeadsOneRequest, config?: AxiosRequestConfig): Promise<operations.LeadsOneResponse>;
    /**
     * Update lead
    **/
    LeadsUpdate(req: operations.LeadsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.LeadsUpdateResponse>;
}
export {};
