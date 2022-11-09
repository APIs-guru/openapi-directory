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
     * Create Customer Support Customer
    **/
    CustomersAdd(req: operations.CustomersAddRequest, config?: AxiosRequestConfig): Promise<operations.CustomersAddResponse>;
    /**
     * List Customer Support Customers
    **/
    CustomersAll(req: operations.CustomersAllRequest, config?: AxiosRequestConfig): Promise<operations.CustomersAllResponse>;
    /**
     * Delete Customer Support Customer
    **/
    CustomersDelete(req: operations.CustomersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CustomersDeleteResponse>;
    /**
     * Get Customer Support Customer
    **/
    CustomersOne(req: operations.CustomersOneRequest, config?: AxiosRequestConfig): Promise<operations.CustomersOneResponse>;
    /**
     * Update Customer Support Customer
    **/
    CustomersUpdate(req: operations.CustomersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CustomersUpdateResponse>;
}
export {};
