import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * bigquerydatatransferProjectsLocationsDataSourcesCheckValidCreds - Returns true if valid credentials exist for the given data source and requesting user.
    **/
    bigquerydatatransferProjectsLocationsDataSourcesCheckValidCreds(req: operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsRequest, config?: AxiosRequestConfig): Promise<operations.BigquerydatatransferProjectsLocationsDataSourcesCheckValidCredsResponse>;
    /**
     * bigquerydatatransferProjectsLocationsDataSourcesList - Lists supported data sources and returns their settings.
    **/
    bigquerydatatransferProjectsLocationsDataSourcesList(req: operations.BigquerydatatransferProjectsLocationsDataSourcesListRequest, config?: AxiosRequestConfig): Promise<operations.BigquerydatatransferProjectsLocationsDataSourcesListResponse>;
    /**
     * bigquerydatatransferProjectsLocationsEnrollDataSources - Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They will also appear in the ListDataSources RPC and as such, will appear in the [BigQuery UI](https://console.cloud.google.com/bigquery), and the documents can be found in the public guide for [BigQuery Web UI](https://cloud.google.com/bigquery/bigquery-web-ui) and [Data Transfer Service](https://cloud.google.com/bigquery/docs/working-with-transfers).
    **/
    bigquerydatatransferProjectsLocationsEnrollDataSources(req: operations.BigquerydatatransferProjectsLocationsEnrollDataSourcesRequest, config?: AxiosRequestConfig): Promise<operations.BigquerydatatransferProjectsLocationsEnrollDataSourcesResponse>;
    /**
     * bigquerydatatransferProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    bigquerydatatransferProjectsLocationsList(req: operations.BigquerydatatransferProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.BigquerydatatransferProjectsLocationsListResponse>;
    /**
     * bigquerydatatransferProjectsTransferConfigsCreate - Creates a new data transfer configuration.
    **/
    bigquerydatatransferProjectsTransferConfigsCreate(req: operations.BigquerydatatransferProjectsTransferConfigsCreateRequest, config?: AxiosRequestConfig): Promise<operations.BigquerydatatransferProjectsTransferConfigsCreateResponse>;
    /**
     * bigquerydatatransferProjectsTransferConfigsList - Returns information about all transfer configs owned by a project in the specified location.
    **/
    bigquerydatatransferProjectsTransferConfigsList(req: operations.BigquerydatatransferProjectsTransferConfigsListRequest, config?: AxiosRequestConfig): Promise<operations.BigquerydatatransferProjectsTransferConfigsListResponse>;
    /**
     * bigquerydatatransferProjectsTransferConfigsPatch - Updates a data transfer configuration. All fields must be set, even if they are not updated.
    **/
    bigquerydatatransferProjectsTransferConfigsPatch(req: operations.BigquerydatatransferProjectsTransferConfigsPatchRequest, config?: AxiosRequestConfig): Promise<operations.BigquerydatatransferProjectsTransferConfigsPatchResponse>;
    /**
     * bigquerydatatransferProjectsTransferConfigsRunsDelete - Deletes the specified transfer run.
    **/
    bigquerydatatransferProjectsTransferConfigsRunsDelete(req: operations.BigquerydatatransferProjectsTransferConfigsRunsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.BigquerydatatransferProjectsTransferConfigsRunsDeleteResponse>;
    /**
     * bigquerydatatransferProjectsTransferConfigsRunsGet - Returns information about the particular transfer run.
    **/
    bigquerydatatransferProjectsTransferConfigsRunsGet(req: operations.BigquerydatatransferProjectsTransferConfigsRunsGetRequest, config?: AxiosRequestConfig): Promise<operations.BigquerydatatransferProjectsTransferConfigsRunsGetResponse>;
    /**
     * bigquerydatatransferProjectsTransferConfigsRunsList - Returns information about running and completed transfer runs.
    **/
    bigquerydatatransferProjectsTransferConfigsRunsList(req: operations.BigquerydatatransferProjectsTransferConfigsRunsListRequest, config?: AxiosRequestConfig): Promise<operations.BigquerydatatransferProjectsTransferConfigsRunsListResponse>;
    /**
     * bigquerydatatransferProjectsTransferConfigsRunsTransferLogsList - Returns log messages for the transfer run.
    **/
    bigquerydatatransferProjectsTransferConfigsRunsTransferLogsList(req: operations.BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListRequest, config?: AxiosRequestConfig): Promise<operations.BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListResponse>;
    /**
     * bigquerydatatransferProjectsTransferConfigsScheduleRuns - Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.
    **/
    bigquerydatatransferProjectsTransferConfigsScheduleRuns(req: operations.BigquerydatatransferProjectsTransferConfigsScheduleRunsRequest, config?: AxiosRequestConfig): Promise<operations.BigquerydatatransferProjectsTransferConfigsScheduleRunsResponse>;
    /**
     * bigquerydatatransferProjectsTransferConfigsStartManualRuns - Start manual transfer runs to be executed now with schedule_time equal to current time. The transfer runs can be created for a time range where the run_time is between start_time (inclusive) and end_time (exclusive), or for a specific run_time.
    **/
    bigquerydatatransferProjectsTransferConfigsStartManualRuns(req: operations.BigquerydatatransferProjectsTransferConfigsStartManualRunsRequest, config?: AxiosRequestConfig): Promise<operations.BigquerydatatransferProjectsTransferConfigsStartManualRunsResponse>;
}
