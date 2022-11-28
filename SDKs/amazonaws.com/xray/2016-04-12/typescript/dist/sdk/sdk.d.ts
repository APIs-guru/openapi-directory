import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://xray.{region}.amazonaws.com", "https://xray.{region}.amazonaws.com", "http://xray.{region}.amazonaws.com.cn", "https://xray.{region}.amazonaws.com.cn"];
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
     * batchGetTraces - Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use <code>GetTraceSummaries</code> to get a list of trace IDs.
    **/
    batchGetTraces(req: operations.BatchGetTracesRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetTracesResponse>;
    /**
     * createGroup - Creates a group resource with a name and a filter expression.
    **/
    createGroup(req: operations.CreateGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupResponse>;
    /**
     * createSamplingRule - Creates a rule to control sampling behavior for instrumented applications. Services retrieve rules with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingRules.html">GetSamplingRules</a>, and evaluate each rule in ascending order of <i>priority</i> for each request. If a rule matches, the service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to X-Ray with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a> to get updated versions of each in-use rule. The updated rule contains a trace quota that the service can use instead of borrowing from the reservoir.
    **/
    createSamplingRule(req: operations.CreateSamplingRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateSamplingRuleResponse>;
    /**
     * deleteGroup - Deletes a group resource.
    **/
    deleteGroup(req: operations.DeleteGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupResponse>;
    /**
     * deleteSamplingRule - Deletes a sampling rule.
    **/
    deleteSamplingRule(req: operations.DeleteSamplingRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSamplingRuleResponse>;
    /**
     * getEncryptionConfig - Retrieves the current encryption configuration for X-Ray data.
    **/
    getEncryptionConfig(req: operations.GetEncryptionConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetEncryptionConfigResponse>;
    /**
     * getGroup - Retrieves group resource details.
    **/
    getGroup(req: operations.GetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupResponse>;
    /**
     * getGroups - Retrieves all active group details.
    **/
    getGroups(req: operations.GetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupsResponse>;
    /**
     * getInsight - Retrieves the summary information of an insight. This includes impact to clients and root cause services, the top anomalous services, the category, the state of the insight, and the start and end time of the insight.
    **/
    getInsight(req: operations.GetInsightRequest, config?: AxiosRequestConfig): Promise<operations.GetInsightResponse>;
    /**
     * getInsightEvents - X-Ray reevaluates insights periodically until they're resolved, and records each intermediate state as an event. You can review an insight's events in the Impact Timeline on the Inspect page in the X-Ray console.
    **/
    getInsightEvents(req: operations.GetInsightEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetInsightEventsResponse>;
    /**
     * getInsightImpactGraph - Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only structural information. For a complete service graph, use this API with the GetServiceGraph API.
    **/
    getInsightImpactGraph(req: operations.GetInsightImpactGraphRequest, config?: AxiosRequestConfig): Promise<operations.GetInsightImpactGraphResponse>;
    /**
     * getInsightSummaries - Retrieves the summaries of all insights in the specified group matching the provided filter values.
    **/
    getInsightSummaries(req: operations.GetInsightSummariesRequest, config?: AxiosRequestConfig): Promise<operations.GetInsightSummariesResponse>;
    /**
     * getSamplingRules - Retrieves all sampling rules.
    **/
    getSamplingRules(req: operations.GetSamplingRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetSamplingRulesResponse>;
    /**
     * getSamplingStatisticSummaries - Retrieves information about recent sampling results for all sampling rules.
    **/
    getSamplingStatisticSummaries(req: operations.GetSamplingStatisticSummariesRequest, config?: AxiosRequestConfig): Promise<operations.GetSamplingStatisticSummariesResponse>;
    /**
     * getSamplingTargets - Requests a sampling quota for rules that the service is using to sample requests.
    **/
    getSamplingTargets(req: operations.GetSamplingTargetsRequest, config?: AxiosRequestConfig): Promise<operations.GetSamplingTargetsResponse>;
    /**
     * getServiceGraph - Retrieves a document that describes services that process incoming requests, and downstream services that they call as a result. Root services process incoming requests and make calls to downstream services. Root services are applications that use the <a href="https://docs.aws.amazon.com/xray/index.html">Amazon Web Services X-Ray SDK</a>. Downstream services can be other applications, Amazon Web Services resources, HTTP web APIs, or SQL databases.
    **/
    getServiceGraph(req: operations.GetServiceGraphRequest, config?: AxiosRequestConfig): Promise<operations.GetServiceGraphResponse>;
    /**
     * getTimeSeriesServiceStatistics - Get an aggregation of service statistics defined by a specific time range.
    **/
    getTimeSeriesServiceStatistics(req: operations.GetTimeSeriesServiceStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.GetTimeSeriesServiceStatisticsResponse>;
    /**
     * getTraceGraph - Retrieves a service graph for one or more specific trace IDs.
    **/
    getTraceGraph(req: operations.GetTraceGraphRequest, config?: AxiosRequestConfig): Promise<operations.GetTraceGraphResponse>;
    /**
     * getTraceSummaries - <p>Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to <code>BatchGetTraces</code>.</p> <p>A filter expression can target traced requests that hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter expression targets traces that pass through <code>api.example.com</code>:</p> <p> <code>service("api.example.com")</code> </p> <p>This filter expression finds traces that have an annotation named <code>account</code> with the value <code>12345</code>:</p> <p> <code>annotation.account = "12345"</code> </p> <p>For a full list of indexed fields and keywords that you can use in filter expressions, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-console-filters.html">Using Filter Expressions</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p>
    **/
    getTraceSummaries(req: operations.GetTraceSummariesRequest, config?: AxiosRequestConfig): Promise<operations.GetTraceSummariesResponse>;
    /**
     * listTagsForResource - Returns a list of tags that are applied to the specified Amazon Web Services X-Ray group or sampling rule.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * putEncryptionConfig - Updates the encryption configuration for X-Ray data.
    **/
    putEncryptionConfig(req: operations.PutEncryptionConfigRequest, config?: AxiosRequestConfig): Promise<operations.PutEncryptionConfigResponse>;
    /**
     * putTelemetryRecords - Used by the Amazon Web Services X-Ray daemon to upload telemetry.
    **/
    putTelemetryRecords(req: operations.PutTelemetryRecordsRequest, config?: AxiosRequestConfig): Promise<operations.PutTelemetryRecordsResponse>;
    /**
     * putTraceSegments - <p>Uploads segment documents to Amazon Web Services X-Ray. The <a href="https://docs.aws.amazon.com/xray/index.html">X-Ray SDK</a> generates segment documents and sends them to the X-Ray daemon, which uploads them in batches. A segment document can be a completed segment, an in-progress segment, or an array of subsegments.</p> <p>Segments must include the following fields. For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">Amazon Web Services X-Ray Segment Documents</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p> <p class="title"> <b>Required segment document fields</b> </p> <ul> <li> <p> <code>name</code> - The name of the service that handled the request.</p> </li> <li> <p> <code>id</code> - A 64-bit identifier for the segment, unique among segments in the same trace, in 16 hexadecimal digits.</p> </li> <li> <p> <code>trace_id</code> - A unique identifier that connects all segments and subsegments originating from a single client request.</p> </li> <li> <p> <code>start_time</code> - Time the segment or subsegment was created, in floating point seconds in epoch time, accurate to milliseconds. For example, <code>1480615200.010</code> or <code>1.480615200010E9</code>.</p> </li> <li> <p> <code>end_time</code> - Time the segment or subsegment was closed. For example, <code>1480615200.090</code> or <code>1.480615200090E9</code>. Specify either an <code>end_time</code> or <code>in_progress</code>.</p> </li> <li> <p> <code>in_progress</code> - Set to <code>true</code> instead of specifying an <code>end_time</code> to record that a segment has been started, but is not complete. Send an in-progress segment when your application receives a request that will take a long time to serve, to trace that the request was received. When the response is sent, send the complete segment to overwrite the in-progress segment.</p> </li> </ul> <p>A <code>trace_id</code> consists of three numbers separated by hyphens. For example, 1-58406520-a006649127e371903a2de979. This includes:</p> <p class="title"> <b>Trace ID Format</b> </p> <ul> <li> <p>The version number, for instance, <code>1</code>.</p> </li> <li> <p>The time of the original request, in Unix epoch time, in 8 hexadecimal digits. For example, 10:00AM December 2nd, 2016 PST in epoch time is <code>1480615200</code> seconds, or <code>58406520</code> in hexadecimal.</p> </li> <li> <p>A 96-bit identifier for the trace, globally unique, in 24 hexadecimal digits.</p> </li> </ul>
    **/
    putTraceSegments(req: operations.PutTraceSegmentsRequest, config?: AxiosRequestConfig): Promise<operations.PutTraceSegmentsResponse>;
    /**
     * tagResource - Applies tags to an existing Amazon Web Services X-Ray group or sampling rule.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes tags from an Amazon Web Services X-Ray group or sampling rule. You cannot edit or delete system tags (those with an <code>aws:</code> prefix).
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateGroup - Updates a group resource.
    **/
    updateGroup(req: operations.UpdateGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupResponse>;
    /**
     * updateSamplingRule - Modifies a sampling rule's configuration.
    **/
    updateSamplingRule(req: operations.UpdateSamplingRuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSamplingRuleResponse>;
}
export {};
