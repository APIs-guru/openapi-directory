import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    GetListingViolations(req: operations.GetListingViolationsRequest, config?: AxiosRequestConfig): Promise<operations.GetListingViolationsResponse>;
    GetListingViolationsSummary(req: operations.GetListingViolationsSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetListingViolationsSummaryResponse>;
    SuppressViolation(req: operations.SuppressViolationRequest, config?: AxiosRequestConfig): Promise<operations.SuppressViolationResponse>;
}
export {};
