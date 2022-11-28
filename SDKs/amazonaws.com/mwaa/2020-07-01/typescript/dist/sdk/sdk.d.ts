import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://airflow.{region}.amazonaws.com", "https://airflow.{region}.amazonaws.com", "http://airflow.{region}.amazonaws.com.cn", "https://airflow.{region}.amazonaws.com.cn"];
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
     * createCliToken - Create a CLI token to use Airflow CLI.
    **/
    createCliToken(req: operations.CreateCliTokenRequest, config?: AxiosRequestConfig): Promise<operations.CreateCliTokenResponse>;
    /**
     * createEnvironment - Creates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
    **/
    createEnvironment(req: operations.CreateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateEnvironmentResponse>;
    /**
     * createWebLoginToken - Create a JWT token to be used to login to Airflow Web UI with claims based Authentication.
    **/
    createWebLoginToken(req: operations.CreateWebLoginTokenRequest, config?: AxiosRequestConfig): Promise<operations.CreateWebLoginTokenResponse>;
    /**
     * deleteEnvironment - Deletes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
    **/
    deleteEnvironment(req: operations.DeleteEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEnvironmentResponse>;
    /**
     * getEnvironment - Retrieves the details of an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
    **/
    getEnvironment(req: operations.GetEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.GetEnvironmentResponse>;
    /**
     * listEnvironments - Lists the Amazon Managed Workflows for Apache Airflow (MWAA) environments.
    **/
    listEnvironments(req: operations.ListEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.ListEnvironmentsResponse>;
    /**
     * listTagsForResource - Lists the key-value tag pairs associated to the Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * publishMetrics - An operation for publishing metrics from the customers to the Ops plane.
    **/
    publishMetrics(req: operations.PublishMetricsRequest, config?: AxiosRequestConfig): Promise<operations.PublishMetricsResponse>;
    /**
     * tagResource - Associates key-value tag pairs to your Amazon Managed Workflows for Apache Airflow (MWAA) environment.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes key-value tag pairs associated to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateEnvironment - Updates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
    **/
    updateEnvironment(req: operations.UpdateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEnvironmentResponse>;
}
export {};
