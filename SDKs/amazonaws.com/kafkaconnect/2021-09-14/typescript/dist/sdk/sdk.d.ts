import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://kafkaconnect.{region}.amazonaws.com", "https://kafkaconnect.{region}.amazonaws.com", "http://kafkaconnect.{region}.amazonaws.com.cn", "https://kafkaconnect.{region}.amazonaws.com.cn"];
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
     * createConnector - Creates a connector using the specified properties.
    **/
    createConnector(req: operations.CreateConnectorRequest, config?: AxiosRequestConfig): Promise<operations.CreateConnectorResponse>;
    /**
     * createCustomPlugin - Creates a custom plugin using the specified properties.
    **/
    createCustomPlugin(req: operations.CreateCustomPluginRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomPluginResponse>;
    /**
     * createWorkerConfiguration - Creates a worker configuration using the specified properties.
    **/
    createWorkerConfiguration(req: operations.CreateWorkerConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkerConfigurationResponse>;
    /**
     * deleteConnector - Deletes the specified connector.
    **/
    deleteConnector(req: operations.DeleteConnectorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectorResponse>;
    /**
     * describeConnector - Returns summary information about the connector.
    **/
    describeConnector(req: operations.DescribeConnectorRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConnectorResponse>;
    /**
     * describeCustomPlugin - A summary description of the custom plugin.
    **/
    describeCustomPlugin(req: operations.DescribeCustomPluginRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCustomPluginResponse>;
    /**
     * describeWorkerConfiguration - Returns information about a worker configuration.
    **/
    describeWorkerConfiguration(req: operations.DescribeWorkerConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorkerConfigurationResponse>;
    /**
     * listConnectors - Returns a list of all the connectors in this account and Region. The list is limited to connectors whose name starts with the specified prefix. The response also includes a description of each of the listed connectors.
    **/
    listConnectors(req: operations.ListConnectorsRequest, config?: AxiosRequestConfig): Promise<operations.ListConnectorsResponse>;
    /**
     * listCustomPlugins - Returns a list of all of the custom plugins in this account and Region.
    **/
    listCustomPlugins(req: operations.ListCustomPluginsRequest, config?: AxiosRequestConfig): Promise<operations.ListCustomPluginsResponse>;
    /**
     * listWorkerConfigurations - Returns a list of all of the worker configurations in this account and Region.
    **/
    listWorkerConfigurations(req: operations.ListWorkerConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.ListWorkerConfigurationsResponse>;
    /**
     * updateConnector - Updates the specified connector.
    **/
    updateConnector(req: operations.UpdateConnectorRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConnectorResponse>;
}
export {};
