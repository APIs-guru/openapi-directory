import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Functions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * functionsCreateExecution - Create Execution
     *
     * Trigger a function execution. The returned object will return you the current execution status. You can ping the `Get Execution` endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.
    **/
    functionsCreateExecution(req: operations.FunctionsCreateExecutionRequest, config?: AxiosRequestConfig): Promise<operations.FunctionsCreateExecutionResponse>;
    /**
     * functionsGetExecution - Get Execution
     *
     * Get a function execution log by its unique ID.
    **/
    functionsGetExecution(req: operations.FunctionsGetExecutionRequest, config?: AxiosRequestConfig): Promise<operations.FunctionsGetExecutionResponse>;
    /**
     * functionsListExecutions - List Executions
     *
     * Get a list of all the current user function execution logs. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's executions. [Learn more about different API modes](/docs/admin).
    **/
    functionsListExecutions(req: operations.FunctionsListExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.FunctionsListExecutionsResponse>;
}
