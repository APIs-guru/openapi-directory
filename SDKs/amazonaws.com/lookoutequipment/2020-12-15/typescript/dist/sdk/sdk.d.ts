import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://lookoutequipment.{region}.amazonaws.com", "https://lookoutequipment.{region}.amazonaws.com", "http://lookoutequipment.{region}.amazonaws.com.cn", "https://lookoutequipment.{region}.amazonaws.com.cn"];
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
     * createDataset - Creates a container for a collection of data being ingested for analysis. The dataset contains the metadata describing where the data is and what the data actually looks like. In other words, it contains the location of the data source, the data schema, and other information. A dataset also contains any tags associated with the ingested data.
    **/
    createDataset(req: operations.CreateDatasetRequest, config?: AxiosRequestConfig): Promise<operations.CreateDatasetResponse>;
    /**
     * createInferenceScheduler -  Creates a scheduled inference. Scheduling an inference is setting up a continuous real-time inference plan to analyze new measurement data. When setting up the schedule, you provide an S3 bucket location for the input data, assign it a delimiter between separate entries in the data, set an offset delay if desired, and set the frequency of inferencing. You must also provide an S3 bucket location for the output data.
    **/
    createInferenceScheduler(req: operations.CreateInferenceSchedulerRequest, config?: AxiosRequestConfig): Promise<operations.CreateInferenceSchedulerResponse>;
    /**
     * createModel - <p>Creates an ML model for data inference. </p> <p>A machine-learning (ML) model is a mathematical model that finds patterns in your data. In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and detects abnormal behavior that could be potential equipment failure (or maintenance events). The models are made by analyzing normal data and abnormalities in machine behavior that have already occurred.</p> <p>Your model is trained using a portion of the data from your dataset and uses that data to learn patterns of normal behavior and abnormal patterns that lead to equipment failure. Another portion of the data is used to evaluate the model's accuracy. </p>
    **/
    createModel(req: operations.CreateModelRequest, config?: AxiosRequestConfig): Promise<operations.CreateModelResponse>;
    /**
     * deleteDataset -  Deletes a dataset and associated artifacts. The operation will check to see if any inference scheduler or data ingestion job is currently using the dataset, and if there isn't, the dataset, its metadata, and any associated data stored in S3 will be deleted. This does not affect any models that used this dataset for training and evaluation, but does prevent it from being used in the future.
    **/
    deleteDataset(req: operations.DeleteDatasetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDatasetResponse>;
    /**
     * deleteInferenceScheduler - Deletes an inference scheduler that has been set up. Already processed output results are not affected.
    **/
    deleteInferenceScheduler(req: operations.DeleteInferenceSchedulerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInferenceSchedulerResponse>;
    /**
     * deleteModel - Deletes an ML model currently available for Amazon Lookout for Equipment. This will prevent it from being used with an inference scheduler, even one that is already set up.
    **/
    deleteModel(req: operations.DeleteModelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteModelResponse>;
    /**
     * describeDataIngestionJob - Provides information on a specific data ingestion job such as creation time, dataset ARN, status, and so on.
    **/
    describeDataIngestionJob(req: operations.DescribeDataIngestionJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDataIngestionJobResponse>;
    /**
     * describeDataset - Provides a JSON description of the data that is in each time series dataset, including names, column names, and data types.
    **/
    describeDataset(req: operations.DescribeDatasetRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDatasetResponse>;
    /**
     * describeInferenceScheduler -  Specifies information about the inference scheduler being used, including name, model, status, and associated metadata
    **/
    describeInferenceScheduler(req: operations.DescribeInferenceSchedulerRequest, config?: AxiosRequestConfig): Promise<operations.DescribeInferenceSchedulerResponse>;
    /**
     * describeModel - Provides a JSON containing the overall information about a specific ML model, including model name and ARN, dataset, training and evaluation information, status, and so on.
    **/
    describeModel(req: operations.DescribeModelRequest, config?: AxiosRequestConfig): Promise<operations.DescribeModelResponse>;
    /**
     * listDataIngestionJobs - Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location of the input data, status, and so on.
    **/
    listDataIngestionJobs(req: operations.ListDataIngestionJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListDataIngestionJobsResponse>;
    /**
     * listDatasets - Lists all datasets currently available in your account, filtering on the dataset name.
    **/
    listDatasets(req: operations.ListDatasetsRequest, config?: AxiosRequestConfig): Promise<operations.ListDatasetsResponse>;
    /**
     * listInferenceExecutions -  Lists all inference executions that have been performed by the specified inference scheduler.
    **/
    listInferenceExecutions(req: operations.ListInferenceExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.ListInferenceExecutionsResponse>;
    /**
     * listInferenceSchedulers - Retrieves a list of all inference schedulers currently available for your account.
    **/
    listInferenceSchedulers(req: operations.ListInferenceSchedulersRequest, config?: AxiosRequestConfig): Promise<operations.ListInferenceSchedulersResponse>;
    /**
     * listModels - Generates a list of all models in the account, including model name and ARN, dataset, and status.
    **/
    listModels(req: operations.ListModelsRequest, config?: AxiosRequestConfig): Promise<operations.ListModelsResponse>;
    /**
     * listTagsForResource - Lists all the tags for a specified resource, including key and value.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * startDataIngestionJob - Starts a data ingestion job. Amazon Lookout for Equipment returns the job status.
    **/
    startDataIngestionJob(req: operations.StartDataIngestionJobRequest, config?: AxiosRequestConfig): Promise<operations.StartDataIngestionJobResponse>;
    /**
     * startInferenceScheduler - Starts an inference scheduler.
    **/
    startInferenceScheduler(req: operations.StartInferenceSchedulerRequest, config?: AxiosRequestConfig): Promise<operations.StartInferenceSchedulerResponse>;
    /**
     * stopInferenceScheduler - Stops an inference scheduler.
    **/
    stopInferenceScheduler(req: operations.StopInferenceSchedulerRequest, config?: AxiosRequestConfig): Promise<operations.StopInferenceSchedulerResponse>;
    /**
     * tagResource - Associates a given tag to a resource in your account. A tag is a key-value pair which can be added to an Amazon Lookout for Equipment resource as metadata. Tags can be used for organizing your resources as well as helping you to search and filter by tag. Multiple tags can be added to a resource, either when you create it, or later. Up to 50 tags can be associated with each resource.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes a specific tag from a given resource. The tag is specified by its key.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateInferenceScheduler - Updates an inference scheduler.
    **/
    updateInferenceScheduler(req: operations.UpdateInferenceSchedulerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateInferenceSchedulerResponse>;
}
export {};
