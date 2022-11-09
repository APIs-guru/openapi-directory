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
    CreateHomeRegionControl(req: operations.CreateHomeRegionControlRequest, config?: AxiosRequestConfig): Promise<operations.CreateHomeRegionControlResponse>;
    DescribeHomeRegionControls(req: operations.DescribeHomeRegionControlsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeHomeRegionControlsResponse>;
    GetHomeRegion(req: operations.GetHomeRegionRequest, config?: AxiosRequestConfig): Promise<operations.GetHomeRegionResponse>;
}
export {};
