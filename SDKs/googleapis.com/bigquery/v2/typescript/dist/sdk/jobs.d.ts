import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Jobs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * bigqueryJobsCancel - Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.
    **/
    bigqueryJobsCancel(req: operations.BigqueryJobsCancelRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryJobsCancelResponse>;
    /**
     * bigqueryJobsDelete - Requests the deletion of the metadata of a job. This call returns when the job's metadata is deleted.
    **/
    bigqueryJobsDelete(req: operations.BigqueryJobsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryJobsDeleteResponse>;
    /**
     * bigqueryJobsGet - Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.
    **/
    bigqueryJobsGet(req: operations.BigqueryJobsGetRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryJobsGetResponse>;
    /**
     * bigqueryJobsGetQueryResults - Retrieves the results of a query job.
    **/
    bigqueryJobsGetQueryResults(req: operations.BigqueryJobsGetQueryResultsRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryJobsGetQueryResultsResponse>;
    /**
     * bigqueryJobsInsert - Starts a new asynchronous job. Requires the Can View project role.
    **/
    bigqueryJobsInsert(req: operations.BigqueryJobsInsertRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryJobsInsertResponse>;
    /**
     * bigqueryJobsList - Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.
    **/
    bigqueryJobsList(req: operations.BigqueryJobsListRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryJobsListResponse>;
    /**
     * bigqueryJobsQuery - Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.
    **/
    bigqueryJobsQuery(req: operations.BigqueryJobsQueryRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryJobsQueryResponse>;
}
