import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://mobile.{region}.amazonaws.com", "https://mobile.{region}.amazonaws.com", "http://mobile.{region}.amazonaws.com.cn", "https://mobile.{region}.amazonaws.com.cn"];
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
     * createProject -  Creates an AWS Mobile Hub project.
    **/
    createProject(req: operations.CreateProjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectResponse>;
    /**
     * deleteProject -  Delets a project in AWS Mobile Hub.
    **/
    deleteProject(req: operations.DeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectResponse>;
    /**
     * describeBundle -  Get the bundle details for the requested bundle id.
    **/
    describeBundle(req: operations.DescribeBundleRequest, config?: AxiosRequestConfig): Promise<operations.DescribeBundleResponse>;
    /**
     * describeProject -  Gets details about a project in AWS Mobile Hub.
    **/
    describeProject(req: operations.DescribeProjectRequest, config?: AxiosRequestConfig): Promise<operations.DescribeProjectResponse>;
    /**
     * exportBundle -  Generates customized software development kit (SDK) and or tool packages used to integrate mobile web or mobile app clients with backend AWS resources.
    **/
    exportBundle(req: operations.ExportBundleRequest, config?: AxiosRequestConfig): Promise<operations.ExportBundleResponse>;
    /**
     * exportProject -  Exports project configuration to a snapshot which can be downloaded and shared. Note that mobile app push credentials are encrypted in exported projects, so they can only be shared successfully within the same AWS account.
    **/
    exportProject(req: operations.ExportProjectRequest, config?: AxiosRequestConfig): Promise<operations.ExportProjectResponse>;
    /**
     * listBundles -  List all available bundles.
    **/
    listBundles(req: operations.ListBundlesRequest, config?: AxiosRequestConfig): Promise<operations.ListBundlesResponse>;
    /**
     * listProjects -  Lists projects in AWS Mobile Hub.
    **/
    listProjects(req: operations.ListProjectsRequest, config?: AxiosRequestConfig): Promise<operations.ListProjectsResponse>;
    /**
     * updateProject -  Update an existing project.
    **/
    updateProject(req: operations.UpdateProjectRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectResponse>;
}
export {};
