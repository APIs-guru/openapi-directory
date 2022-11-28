import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://lookoutmetrics.{region}.amazonaws.com", "https://lookoutmetrics.{region}.amazonaws.com", "http://lookoutmetrics.{region}.amazonaws.com.cn", "https://lookoutmetrics.{region}.amazonaws.com.cn"];
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
     * activateAnomalyDetector - Activates an anomaly detector.
    **/
    activateAnomalyDetector(req: operations.ActivateAnomalyDetectorRequest, config?: AxiosRequestConfig): Promise<operations.ActivateAnomalyDetectorResponse>;
    /**
     * backTestAnomalyDetector - Runs a backtest for anomaly detection for the specified resource.
    **/
    backTestAnomalyDetector(req: operations.BackTestAnomalyDetectorRequest, config?: AxiosRequestConfig): Promise<operations.BackTestAnomalyDetectorResponse>;
    /**
     * createAlert - Creates an alert for an anomaly detector.
    **/
    createAlert(req: operations.CreateAlertRequest, config?: AxiosRequestConfig): Promise<operations.CreateAlertResponse>;
    /**
     * createAnomalyDetector - Creates an anomaly detector.
    **/
    createAnomalyDetector(req: operations.CreateAnomalyDetectorRequest, config?: AxiosRequestConfig): Promise<operations.CreateAnomalyDetectorResponse>;
    /**
     * createMetricSet - Creates a dataset.
    **/
    createMetricSet(req: operations.CreateMetricSetRequest, config?: AxiosRequestConfig): Promise<operations.CreateMetricSetResponse>;
    /**
     * deleteAlert - Deletes an alert.
    **/
    deleteAlert(req: operations.DeleteAlertRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAlertResponse>;
    /**
     * deleteAnomalyDetector - Deletes a detector. Deleting an anomaly detector will delete all of its corresponding resources including any configured datasets and alerts.
    **/
    deleteAnomalyDetector(req: operations.DeleteAnomalyDetectorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAnomalyDetectorResponse>;
    /**
     * describeAlert - <p>Describes an alert.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
    **/
    describeAlert(req: operations.DescribeAlertRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAlertResponse>;
    /**
     * describeAnomalyDetectionExecutions - Returns information about the status of the specified anomaly detection jobs.
    **/
    describeAnomalyDetectionExecutions(req: operations.DescribeAnomalyDetectionExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAnomalyDetectionExecutionsResponse>;
    /**
     * describeAnomalyDetector - <p>Describes a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
    **/
    describeAnomalyDetector(req: operations.DescribeAnomalyDetectorRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAnomalyDetectorResponse>;
    /**
     * describeMetricSet - <p>Describes a dataset.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
    **/
    describeMetricSet(req: operations.DescribeMetricSetRequest, config?: AxiosRequestConfig): Promise<operations.DescribeMetricSetResponse>;
    /**
     * getAnomalyGroup - Returns details about a group of anomalous metrics.
    **/
    getAnomalyGroup(req: operations.GetAnomalyGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetAnomalyGroupResponse>;
    /**
     * getFeedback - Get feedback for an anomaly group.
    **/
    getFeedback(req: operations.GetFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.GetFeedbackResponse>;
    /**
     * getSampleData - Returns a selection of sample records from an Amazon S3 datasource.
    **/
    getSampleData(req: operations.GetSampleDataRequest, config?: AxiosRequestConfig): Promise<operations.GetSampleDataResponse>;
    /**
     * listAlerts - <p>Lists the alerts attached to a detector.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
    **/
    listAlerts(req: operations.ListAlertsRequest, config?: AxiosRequestConfig): Promise<operations.ListAlertsResponse>;
    /**
     * listAnomalyDetectors - <p>Lists the detectors in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
    **/
    listAnomalyDetectors(req: operations.ListAnomalyDetectorsRequest, config?: AxiosRequestConfig): Promise<operations.ListAnomalyDetectorsResponse>;
    /**
     * listAnomalyGroupSummaries - Returns a list of anomaly groups.
    **/
    listAnomalyGroupSummaries(req: operations.ListAnomalyGroupSummariesRequest, config?: AxiosRequestConfig): Promise<operations.ListAnomalyGroupSummariesResponse>;
    /**
     * listAnomalyGroupTimeSeries - Gets a list of anomalous metrics for a measure in an anomaly group.
    **/
    listAnomalyGroupTimeSeries(req: operations.ListAnomalyGroupTimeSeriesRequest, config?: AxiosRequestConfig): Promise<operations.ListAnomalyGroupTimeSeriesResponse>;
    /**
     * listMetricSets - <p>Lists the datasets in the current AWS Region.</p> <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
    **/
    listMetricSets(req: operations.ListMetricSetsRequest, config?: AxiosRequestConfig): Promise<operations.ListMetricSetsResponse>;
    /**
     * listTagsForResource - Gets a list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> for a detector, dataset, or alert.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * putFeedback - Add feedback for an anomalous metric.
    **/
    putFeedback(req: operations.PutFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.PutFeedbackResponse>;
    /**
     * tagResource - Adds <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to a detector, dataset, or alert.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> from a detector, dataset, or alert.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateAnomalyDetector - Updates a detector. After activation, you can only change a detector's ingestion delay and description.
    **/
    updateAnomalyDetector(req: operations.UpdateAnomalyDetectorRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAnomalyDetectorResponse>;
    /**
     * updateMetricSet - Updates a dataset.
    **/
    updateMetricSet(req: operations.UpdateMetricSetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMetricSetResponse>;
}
export {};
