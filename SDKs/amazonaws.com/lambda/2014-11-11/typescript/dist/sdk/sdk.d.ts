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
    AddEventSource(req: operations.AddEventSourceRequest, config?: AxiosRequestConfig): Promise<operations.AddEventSourceResponse>;
    DeleteFunction(req: operations.DeleteFunctionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFunctionResponse>;
    GetEventSource(req: operations.GetEventSourceRequest, config?: AxiosRequestConfig): Promise<operations.GetEventSourceResponse>;
    GetFunction(req: operations.GetFunctionRequest, config?: AxiosRequestConfig): Promise<operations.GetFunctionResponse>;
    GetFunctionConfiguration(req: operations.GetFunctionConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetFunctionConfigurationResponse>;
    InvokeAsync(req: operations.InvokeAsyncRequest, config?: AxiosRequestConfig): Promise<operations.InvokeAsyncResponse>;
    ListEventSources(req: operations.ListEventSourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListEventSourcesResponse>;
    ListFunctions(req: operations.ListFunctionsRequest, config?: AxiosRequestConfig): Promise<operations.ListFunctionsResponse>;
    RemoveEventSource(req: operations.RemoveEventSourceRequest, config?: AxiosRequestConfig): Promise<operations.RemoveEventSourceResponse>;
    UpdateFunctionConfiguration(req: operations.UpdateFunctionConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFunctionConfigurationResponse>;
    UploadFunction(req: operations.UploadFunctionRequest, config?: AxiosRequestConfig): Promise<operations.UploadFunctionResponse>;
}
export {};
