import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://migrationhub-config.{region}.amazonaws.com", "https://migrationhub-config.{region}.amazonaws.com", "http://migrationhub-config.{region}.amazonaws.com.cn", "https://migrationhub-config.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * createHomeRegionControl - This API sets up the home region for the calling account only.
    **/
    createHomeRegionControl(req: operations.CreateHomeRegionControlRequest, config?: AxiosRequestConfig): Promise<operations.CreateHomeRegionControlResponse>;
    /**
     * describeHomeRegionControls - This API permits filtering on the <code>ControlId</code> and <code>HomeRegion</code> fields.
    **/
    describeHomeRegionControls(req: operations.DescribeHomeRegionControlsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeHomeRegionControlsResponse>;
    /**
     * getHomeRegion - Returns the calling account’s home region, if configured. This API is used by other AWS services to determine the regional endpoint for calling AWS Application Discovery Service and Migration Hub. You must call <code>GetHomeRegion</code> at least once before you call any other AWS Application Discovery Service and AWS Migration Hub APIs, to obtain the account's Migration Hub home region.
    **/
    getHomeRegion(req: operations.GetHomeRegionRequest, config?: AxiosRequestConfig): Promise<operations.GetHomeRegionResponse>;
}
export {};
