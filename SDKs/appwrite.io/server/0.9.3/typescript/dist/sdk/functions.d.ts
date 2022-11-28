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
     * functionsCreate - Create Function
     *
     * Create a new function. You can pass a list of [permissions](/docs/permissions) to allow different project users or team with access to execute the function using the client API.
    **/
    functionsCreate(req: operations.FunctionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.FunctionsCreateResponse>;
    /**
     * functionsCreateExecution - Create Execution
     *
     * Trigger a function execution. The returned object will return you the current execution status. You can ping the `Get Execution` endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.
    **/
    functionsCreateExecution(req: operations.FunctionsCreateExecutionRequest, config?: AxiosRequestConfig): Promise<operations.FunctionsCreateExecutionResponse>;
    /**
     * functionsCreateTag - Create Tag
     *
     * Create a new function code tag. Use this endpoint to upload a new version of your code function. To execute your newly uploaded code, you'll need to update the function's tag to use your new tag UID.
     *
     * This endpoint accepts a tar.gz file compressed with your code. Make sure to include any dependencies your code has within the compressed file. You can learn more about code packaging in the [Appwrite Cloud Functions tutorial](/docs/functions).
     *
     * Use the "command" param to set the entry point used to execute your code.
    **/
    functionsCreateTag(req: operations.FunctionsCreateTagRequest, config?: AxiosRequestConfig): Promise<operations.FunctionsCreateTagResponse>;
    /**
     * functionsDelete - Delete Function
     *
     * Delete a function by its unique ID.
    **/
    functionsDelete(req: operations.FunctionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.FunctionsDeleteResponse>;
    /**
     * functionsDeleteTag - Delete Tag
     *
     * Delete a code tag by its unique ID.
    **/
    functionsDeleteTag(req: operations.FunctionsDeleteTagRequest, config?: AxiosRequestConfig): Promise<operations.FunctionsDeleteTagResponse>;
    /**
     * functionsGet - Get Function
     *
     * Get a function by its unique ID.
    **/
    functionsGet(req: operations.FunctionsGetRequest, config?: AxiosRequestConfig): Promise<operations.FunctionsGetResponse>;
    /**
     * functionsGetExecution - Get Execution
     *
     * Get a function execution log by its unique ID.
    **/
    functionsGetExecution(req: operations.FunctionsGetExecutionRequest, config?: AxiosRequestConfig): Promise<operations.FunctionsGetExecutionResponse>;
    /**
     * functionsGetTag - Get Tag
     *
     * Get a code tag by its unique ID.
    **/
    functionsGetTag(req: operations.FunctionsGetTagRequest, config?: AxiosRequestConfig): Promise<operations.FunctionsGetTagResponse>;
    /**
     * functionsList - List Functions
     *
     * Get a list of all the project's functions. You can use the query params to filter your results.
    **/
    functionsList(req: operations.FunctionsListRequest, config?: AxiosRequestConfig): Promise<operations.FunctionsListResponse>;
    /**
     * functionsListExecutions - List Executions
     *
     * Get a list of all the current user function execution logs. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's executions. [Learn more about different API modes](/docs/admin).
    **/
    functionsListExecutions(req: operations.FunctionsListExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.FunctionsListExecutionsResponse>;
    /**
     * functionsListTags - List Tags
     *
     * Get a list of all the project's code tags. You can use the query params to filter your results.
    **/
    functionsListTags(req: operations.FunctionsListTagsRequest, config?: AxiosRequestConfig): Promise<operations.FunctionsListTagsResponse>;
    /**
     * functionsUpdate - Update Function
     *
     * Update function by its unique ID.
    **/
    functionsUpdate(req: operations.FunctionsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.FunctionsUpdateResponse>;
    /**
     * functionsUpdateTag - Update Function Tag
     *
     * Update the function code tag ID using the unique function ID. Use this endpoint to switch the code tag that should be executed by the execution endpoint.
    **/
    functionsUpdateTag(req: operations.FunctionsUpdateTagRequest, config?: AxiosRequestConfig): Promise<operations.FunctionsUpdateTagResponse>;
}
