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
    CreateConnector(req: operations.CreateConnectorRequest, config?: AxiosRequestConfig): Promise<operations.CreateConnectorResponse>;
    CreateCustomPlugin(req: operations.CreateCustomPluginRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomPluginResponse>;
    CreateWorkerConfiguration(req: operations.CreateWorkerConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkerConfigurationResponse>;
    DeleteConnector(req: operations.DeleteConnectorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectorResponse>;
    DescribeConnector(req: operations.DescribeConnectorRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConnectorResponse>;
    DescribeCustomPlugin(req: operations.DescribeCustomPluginRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCustomPluginResponse>;
    DescribeWorkerConfiguration(req: operations.DescribeWorkerConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorkerConfigurationResponse>;
    ListConnectors(req: operations.ListConnectorsRequest, config?: AxiosRequestConfig): Promise<operations.ListConnectorsResponse>;
    ListCustomPlugins(req: operations.ListCustomPluginsRequest, config?: AxiosRequestConfig): Promise<operations.ListCustomPluginsResponse>;
    ListWorkerConfigurations(req: operations.ListWorkerConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.ListWorkerConfigurationsResponse>;
    UpdateConnector(req: operations.UpdateConnectorRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConnectorResponse>;
}
export {};
