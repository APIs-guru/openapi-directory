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
    BatchMeterUsage(req: operations.BatchMeterUsageRequest, config?: AxiosRequestConfig): Promise<operations.BatchMeterUsageResponse>;
    MeterUsage(req: operations.MeterUsageRequest, config?: AxiosRequestConfig): Promise<operations.MeterUsageResponse>;
    RegisterUsage(req: operations.RegisterUsageRequest, config?: AxiosRequestConfig): Promise<operations.RegisterUsageResponse>;
    ResolveCustomer(req: operations.ResolveCustomerRequest, config?: AxiosRequestConfig): Promise<operations.ResolveCustomerResponse>;
}
export {};
