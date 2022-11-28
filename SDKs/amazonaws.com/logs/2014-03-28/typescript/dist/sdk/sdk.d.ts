import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://logs.{region}.amazonaws.com", "https://logs.{region}.amazonaws.com", "http://logs.{region}.amazonaws.com.cn", "https://logs.{region}.amazonaws.com.cn"];
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
     * associateKmsKey - <p>Associates the specified Key Management Service customer master key (CMK) with the specified log group.</p> <p>Associating an KMS CMK with a log group overrides any existing associations between the log group and a CMK. After a CMK is associated with a log group, all newly ingested data for the log group is encrypted using the CMK. This association is stored as long as the data encrypted with the CMK is still within CloudWatch Logs. This enables CloudWatch Logs to decrypt this data whenever it is requested.</p> <important> <p>CloudWatch Logs supports only symmetric CMKs. Do not use an associate an asymmetric CMK with your log group. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric Keys</a>.</p> </important> <p>It can take up to 5 minutes for this operation to take effect.</p> <p>If you attempt to associate a CMK with a log group but the CMK does not exist or the CMK is disabled, you receive an <code>InvalidParameterException</code> error. </p>
    **/
    associateKmsKey(req: operations.AssociateKmsKeyRequest, config?: AxiosRequestConfig): Promise<operations.AssociateKmsKeyResponse>;
    /**
     * cancelExportTask - <p>Cancels the specified export task.</p> <p>The task must be in the <code>PENDING</code> or <code>RUNNING</code> state.</p>
    **/
    cancelExportTask(req: operations.CancelExportTaskRequest, config?: AxiosRequestConfig): Promise<operations.CancelExportTaskResponse>;
    /**
     * createExportTask - <p>Creates an export task, which allows you to efficiently export data from a log group to an Amazon S3 bucket. When you perform a <code>CreateExportTask</code> operation, you must use credentials that have permission to write to the S3 bucket that you specify as the destination.</p> <p>This is an asynchronous call. If all the required information is provided, this operation initiates an export task and responds with the ID of the task. After the task has started, you can use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeExportTasks.html">DescribeExportTasks</a> to get the status of the export task. Each account can only have one active (<code>RUNNING</code> or <code>PENDING</code>) export task at a time. To cancel an export task, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CancelExportTask.html">CancelExportTask</a>.</p> <p>You can export logs from multiple log groups or multiple time ranges to the same S3 bucket. To separate out log data for each export task, you can specify a prefix to be used as the Amazon S3 key prefix for all exported objects.</p> <p>Exporting to S3 buckets that are encrypted with AES-256 is supported. Exporting to S3 buckets encrypted with SSE-KMS is not supported. </p>
    **/
    createExportTask(req: operations.CreateExportTaskRequest, config?: AxiosRequestConfig): Promise<operations.CreateExportTaskResponse>;
    /**
     * createLogGroup - <p>Creates a log group with the specified name. You can create up to 20,000 log groups per account.</p> <p>You must use the following guidelines when naming a log group:</p> <ul> <li> <p>Log group names must be unique within a region for an Amazon Web Services account.</p> </li> <li> <p>Log group names can be between 1 and 512 characters long.</p> </li> <li> <p>Log group names consist of the following characters: a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), '/' (forward slash), '.' (period), and '#' (number sign)</p> </li> </ul> <p>When you create a log group, by default the log events in the log group never expire. To set a retention policy so that events expire and are deleted after a specified time, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutRetentionPolicy.html">PutRetentionPolicy</a>.</p> <p>If you associate a Key Management Service customer master key (CMK) with the log group, ingested data is encrypted using the CMK. This association is stored as long as the data encrypted with the CMK is still within CloudWatch Logs. This enables CloudWatch Logs to decrypt this data whenever it is requested.</p> <p>If you attempt to associate a CMK with the log group but the CMK does not exist or the CMK is disabled, you receive an <code>InvalidParameterException</code> error. </p> <important> <p>CloudWatch Logs supports only symmetric CMKs. Do not associate an asymmetric CMK with your log group. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric Keys</a>.</p> </important>
    **/
    createLogGroup(req: operations.CreateLogGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateLogGroupResponse>;
    /**
     * createLogStream - <p>Creates a log stream for the specified log group. A log stream is a sequence of log events that originate from a single source, such as an application instance or a resource that is being monitored.</p> <p>There is no limit on the number of log streams that you can create for a log group. There is a limit of 50 TPS on <code>CreateLogStream</code> operations, after which transactions are throttled.</p> <p>You must use the following guidelines when naming a log stream:</p> <ul> <li> <p>Log stream names must be unique within the log group.</p> </li> <li> <p>Log stream names can be between 1 and 512 characters long.</p> </li> <li> <p>The ':' (colon) and '*' (asterisk) characters are not allowed.</p> </li> </ul>
    **/
    createLogStream(req: operations.CreateLogStreamRequest, config?: AxiosRequestConfig): Promise<operations.CreateLogStreamResponse>;
    /**
     * deleteDestination - Deletes the specified destination, and eventually disables all the subscription filters that publish to it. This operation does not delete the physical resource encapsulated by the destination.
    **/
    deleteDestination(req: operations.DeleteDestinationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDestinationResponse>;
    /**
     * deleteLogGroup - Deletes the specified log group and permanently deletes all the archived log events associated with the log group.
    **/
    deleteLogGroup(req: operations.DeleteLogGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLogGroupResponse>;
    /**
     * deleteLogStream - Deletes the specified log stream and permanently deletes all the archived log events associated with the log stream.
    **/
    deleteLogStream(req: operations.DeleteLogStreamRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLogStreamResponse>;
    /**
     * deleteMetricFilter - Deletes the specified metric filter.
    **/
    deleteMetricFilter(req: operations.DeleteMetricFilterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMetricFilterResponse>;
    /**
     * deleteQueryDefinition - <p>Deletes a saved CloudWatch Logs Insights query definition. A query definition contains details about a saved CloudWatch Logs Insights query.</p> <p>Each <code>DeleteQueryDefinition</code> operation can delete one query definition.</p> <p>You must have the <code>logs:DeleteQueryDefinition</code> permission to be able to perform this operation.</p>
    **/
    deleteQueryDefinition(req: operations.DeleteQueryDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteQueryDefinitionResponse>;
    /**
     * deleteResourcePolicy - Deletes a resource policy from this account. This revokes the access of the identities in that policy to put log events to this account.
    **/
    deleteResourcePolicy(req: operations.DeleteResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResourcePolicyResponse>;
    /**
     * deleteRetentionPolicy - <p>Deletes the specified retention policy.</p> <p>Log events do not expire if they belong to log groups without a retention policy.</p>
    **/
    deleteRetentionPolicy(req: operations.DeleteRetentionPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRetentionPolicyResponse>;
    /**
     * deleteSubscriptionFilter - Deletes the specified subscription filter.
    **/
    deleteSubscriptionFilter(req: operations.DeleteSubscriptionFilterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubscriptionFilterResponse>;
    /**
     * describeDestinations - Lists all your destinations. The results are ASCII-sorted by destination name.
    **/
    describeDestinations(req: operations.DescribeDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDestinationsResponse>;
    /**
     * describeExportTasks - Lists the specified export tasks. You can list all your export tasks or filter the results based on task ID or task status.
    **/
    describeExportTasks(req: operations.DescribeExportTasksRequest, config?: AxiosRequestConfig): Promise<operations.DescribeExportTasksResponse>;
    /**
     * describeLogGroups - <p>Lists the specified log groups. You can list all your log groups or filter the results by prefix. The results are ASCII-sorted by log group name.</p> <p>CloudWatch Logs doesn’t support IAM policies that control access to the <code>DescribeLogGroups</code> action by using the <code>aws:ResourceTag/<i>key-name</i> </code> condition key. Other CloudWatch Logs actions do support the use of the <code>aws:ResourceTag/<i>key-name</i> </code> condition key to control access. For more information about using tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources using tags</a>.</p>
    **/
    describeLogGroups(req: operations.DescribeLogGroupsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLogGroupsResponse>;
    /**
     * describeLogStreams - <p>Lists the log streams for the specified log group. You can list all the log streams or filter the results by prefix. You can also control how the results are ordered.</p> <p>This operation has a limit of five transactions per second, after which transactions are throttled.</p>
    **/
    describeLogStreams(req: operations.DescribeLogStreamsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLogStreamsResponse>;
    /**
     * describeMetricFilters - Lists the specified metric filters. You can list all of the metric filters or filter the results by log name, prefix, metric name, or metric namespace. The results are ASCII-sorted by filter name.
    **/
    describeMetricFilters(req: operations.DescribeMetricFiltersRequest, config?: AxiosRequestConfig): Promise<operations.DescribeMetricFiltersResponse>;
    /**
     * describeQueries - Returns a list of CloudWatch Logs Insights queries that are scheduled, executing, or have been executed recently in this account. You can request all queries or limit it to queries of a specific log group or queries with a certain status.
    **/
    describeQueries(req: operations.DescribeQueriesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeQueriesResponse>;
    /**
     * describeQueryDefinitions - <p>This operation returns a paginated list of your saved CloudWatch Logs Insights query definitions.</p> <p>You can use the <code>queryDefinitionNamePrefix</code> parameter to limit the results to only the query definitions that have names that start with a certain string.</p>
    **/
    describeQueryDefinitions(req: operations.DescribeQueryDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeQueryDefinitionsResponse>;
    /**
     * describeResourcePolicies - Lists the resource policies in this account.
    **/
    describeResourcePolicies(req: operations.DescribeResourcePoliciesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeResourcePoliciesResponse>;
    /**
     * describeSubscriptionFilters - Lists the subscription filters for the specified log group. You can list all the subscription filters or filter the results by prefix. The results are ASCII-sorted by filter name.
    **/
    describeSubscriptionFilters(req: operations.DescribeSubscriptionFiltersRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSubscriptionFiltersResponse>;
    /**
     * disassociateKmsKey - <p>Disassociates the associated Key Management Service customer master key (CMK) from the specified log group.</p> <p>After the KMS CMK is disassociated from the log group, CloudWatch Logs stops encrypting newly ingested data for the log group. All previously ingested data remains encrypted, and CloudWatch Logs requires permissions for the CMK whenever the encrypted data is requested.</p> <p>Note that it can take up to 5 minutes for this operation to take effect.</p>
    **/
    disassociateKmsKey(req: operations.DisassociateKmsKeyRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateKmsKeyResponse>;
    /**
     * filterLogEvents - <p>Lists log events from the specified log group. You can list all the log events or filter the results using a filter pattern, a time range, and the name of the log stream.</p> <p>By default, this operation returns as many log events as can fit in 1 MB (up to 10,000 log events) or all the events found within the time range that you specify. If the results include a token, then there are more log events available, and you can get additional results by specifying the token in a subsequent call. This operation can return empty results while there are more log events available through the token.</p> <p>The returned log events are sorted by event timestamp, the timestamp when the event was ingested by CloudWatch Logs, and the ID of the <code>PutLogEvents</code> request.</p>
    **/
    filterLogEvents(req: operations.FilterLogEventsRequest, config?: AxiosRequestConfig): Promise<operations.FilterLogEventsResponse>;
    /**
     * getLogEvents - <p>Lists log events from the specified log stream. You can list all of the log events or filter using a time range.</p> <p>By default, this operation returns as many log events as can fit in a response size of 1MB (up to 10,000 log events). You can get additional log events by specifying one of the tokens in a subsequent call. This operation can return empty results while there are more log events available through the token.</p>
    **/
    getLogEvents(req: operations.GetLogEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetLogEventsResponse>;
    /**
     * getLogGroupFields - <p>Returns a list of the fields that are included in log events in the specified log group, along with the percentage of log events that contain each field. The search is limited to a time period that you specify.</p> <p>In the results, fields that start with @ are fields generated by CloudWatch Logs. For example, <code>@timestamp</code> is the timestamp of each log event. For more information about the fields that are generated by CloudWatch logs, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData-discoverable-fields.html">Supported Logs and Discovered Fields</a>.</p> <p>The response results are sorted by the frequency percentage, starting with the highest percentage.</p>
    **/
    getLogGroupFields(req: operations.GetLogGroupFieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetLogGroupFieldsResponse>;
    /**
     * getLogRecord - <p>Retrieves all of the fields and values of a single log event. All fields are retrieved, even if the original query that produced the <code>logRecordPointer</code> retrieved only a subset of fields. Fields are returned as field name/field value pairs.</p> <p>The full unparsed log event is returned within <code>@message</code>.</p>
    **/
    getLogRecord(req: operations.GetLogRecordRequest, config?: AxiosRequestConfig): Promise<operations.GetLogRecordResponse>;
    /**
     * getQueryResults - <p>Returns the results from the specified query.</p> <p>Only the fields requested in the query are returned, along with a <code>@ptr</code> field, which is the identifier for the log record. You can use the value of <code>@ptr</code> in a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogRecord.html">GetLogRecord</a> operation to get the full log record.</p> <p> <code>GetQueryResults</code> does not start a query execution. To run a query, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a>.</p> <p>If the value of the <code>Status</code> field in the output is <code>Running</code>, this operation returns only partial results. If you see a value of <code>Scheduled</code> or <code>Running</code> for the status, you can retry the operation later to see the final results. </p>
    **/
    getQueryResults(req: operations.GetQueryResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetQueryResultsResponse>;
    /**
     * listTagsLogGroup - Lists the tags for the specified log group.
    **/
    listTagsLogGroup(req: operations.ListTagsLogGroupRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsLogGroupResponse>;
    /**
     * putDestination - <p>Creates or updates a destination. This operation is used only to create destinations for cross-account subscriptions.</p> <p>A destination encapsulates a physical resource (such as an Amazon Kinesis stream) and enables you to subscribe to a real-time stream of log events for a different account, ingested using <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a>.</p> <p>Through an access policy, a destination controls what is written to it. By default, <code>PutDestination</code> does not set any access policy with the destination, which means a cross-account user cannot call <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutSubscriptionFilter.html">PutSubscriptionFilter</a> against this destination. To enable this, the destination owner must call <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestinationPolicy.html">PutDestinationPolicy</a> after <code>PutDestination</code>.</p> <p>To perform a <code>PutDestination</code> operation, you must also have the <code>iam:PassRole</code> permission.</p>
    **/
    putDestination(req: operations.PutDestinationRequest, config?: AxiosRequestConfig): Promise<operations.PutDestinationResponse>;
    /**
     * putDestinationPolicy - <p>Creates or updates an access policy associated with an existing destination. An access policy is an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies_overview.html">IAM policy document</a> that is used to authorize claims to register a subscription filter against a given destination.</p> <p>If multiple Amazon Web Services accounts are sending logs to this destination, each sender account must be listed separately in the policy. The policy does not support specifying <code>*</code> as the Principal or the use of the <code>aws:PrincipalOrgId</code> global key.</p>
    **/
    putDestinationPolicy(req: operations.PutDestinationPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutDestinationPolicyResponse>;
    /**
     * putLogEvents - <p>Uploads a batch of log events to the specified log stream.</p> <p>You must include the sequence token obtained from the response of the previous call. An upload in a newly created log stream does not require a sequence token. You can also get the sequence token in the <code>expectedSequenceToken</code> field from <code>InvalidSequenceTokenException</code>. If you call <code>PutLogEvents</code> twice within a narrow time period using the same value for <code>sequenceToken</code>, both calls might be successful or one might be rejected.</p> <p>The batch of events must satisfy the following constraints:</p> <ul> <li> <p>The maximum batch size is 1,048,576 bytes. This size is calculated as the sum of all event messages in UTF-8, plus 26 bytes for each log event.</p> </li> <li> <p>None of the log events in the batch can be more than 2 hours in the future.</p> </li> <li> <p>None of the log events in the batch can be older than 14 days or older than the retention period of the log group.</p> </li> <li> <p>The log events in the batch must be in chronological order by their timestamp. The timestamp is the time the event occurred, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. (In Amazon Web Services Tools for PowerShell and the Amazon Web Services SDK for .NET, the timestamp is specified in .NET format: yyyy-mm-ddThh:mm:ss. For example, 2017-09-15T13:45:30.) </p> </li> <li> <p>A batch of log events in a single request cannot span more than 24 hours. Otherwise, the operation fails.</p> </li> <li> <p>The maximum number of log events in a batch is 10,000.</p> </li> <li> <p>There is a quota of 5 requests per second per log stream. Additional requests are throttled. This quota can't be changed.</p> </li> </ul> <p>If a call to <code>PutLogEvents</code> returns "UnrecognizedClientException" the most likely cause is an invalid Amazon Web Services access key ID or secret key. </p>
    **/
    putLogEvents(req: operations.PutLogEventsRequest, config?: AxiosRequestConfig): Promise<operations.PutLogEventsResponse>;
    /**
     * putMetricFilter - <p>Creates or updates a metric filter and associates it with the specified log group. Metric filters allow you to configure rules to extract metric data from log events ingested through <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a>.</p> <p>The maximum number of metric filters that can be associated with a log group is 100.</p> <p>When you create a metric filter, you can also optionally assign a unit and dimensions to the metric that is created.</p> <important> <p>Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as <code>IPAddress</code> or <code>requestID</code> as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric. </p> <p>To help prevent accidental high charges, Amazon disables a metric filter if it generates 1000 different name/value pairs for the dimensions that you have specified within a certain amount of time.</p> <p>You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html"> Creating a Billing Alarm to Monitor Your Estimated Amazon Web Services Charges</a>. </p> </important>
    **/
    putMetricFilter(req: operations.PutMetricFilterRequest, config?: AxiosRequestConfig): Promise<operations.PutMetricFilterResponse>;
    /**
     * putQueryDefinition - <p>Creates or updates a query definition for CloudWatch Logs Insights. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html">Analyzing Log Data with CloudWatch Logs Insights</a>.</p> <p>To update a query definition, specify its <code>queryDefinitionId</code> in your request. The values of <code>name</code>, <code>queryString</code>, and <code>logGroupNames</code> are changed to the values that you specify in your update operation. No current values are retained from the current query definition. For example, if you update a current query definition that includes log groups, and you don't specify the <code>logGroupNames</code> parameter in your update operation, the query definition changes to contain no log groups.</p> <p>You must have the <code>logs:PutQueryDefinition</code> permission to be able to perform this operation.</p>
    **/
    putQueryDefinition(req: operations.PutQueryDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.PutQueryDefinitionResponse>;
    /**
     * putResourcePolicy - Creates or updates a resource policy allowing other Amazon Web Services services to put log events to this account, such as Amazon Route 53. An account can have up to 10 resource policies per Amazon Web Services Region.
    **/
    putResourcePolicy(req: operations.PutResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutResourcePolicyResponse>;
    /**
     * putRetentionPolicy - Sets the retention of the specified log group. A retention policy allows you to configure the number of days for which to retain log events in the specified log group.
    **/
    putRetentionPolicy(req: operations.PutRetentionPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutRetentionPolicyResponse>;
    /**
     * putSubscriptionFilter - <p>Creates or updates a subscription filter and associates it with the specified log group. Subscription filters allow you to subscribe to a real-time stream of log events ingested through <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a> and have them delivered to a specific destination. When log events are sent to the receiving service, they are Base64 encoded and compressed with the gzip format.</p> <p>The following destinations are supported for subscription filters:</p> <ul> <li> <p>An Amazon Kinesis stream belonging to the same account as the subscription filter, for same-account delivery.</p> </li> <li> <p>A logical destination that belongs to a different account, for cross-account delivery.</p> </li> <li> <p>An Amazon Kinesis Firehose delivery stream that belongs to the same account as the subscription filter, for same-account delivery.</p> </li> <li> <p>An Lambda function that belongs to the same account as the subscription filter, for same-account delivery.</p> </li> </ul> <p>Each log group can have up to two subscription filters associated with it. If you are updating an existing filter, you must specify the correct name in <code>filterName</code>. </p> <p>To perform a <code>PutSubscriptionFilter</code> operation, you must also have the <code>iam:PassRole</code> permission.</p>
    **/
    putSubscriptionFilter(req: operations.PutSubscriptionFilterRequest, config?: AxiosRequestConfig): Promise<operations.PutSubscriptionFilterResponse>;
    /**
     * startQuery - <p>Schedules a query of a log group using CloudWatch Logs Insights. You specify the log group and time range to query and the query string to use.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query Syntax</a>.</p> <p>Queries time out after 15 minutes of execution. If your queries are timing out, reduce the time range being searched or partition your query into a number of queries.</p>
    **/
    startQuery(req: operations.StartQueryRequest, config?: AxiosRequestConfig): Promise<operations.StartQueryResponse>;
    /**
     * stopQuery - Stops a CloudWatch Logs Insights query that is in progress. If the query has already ended, the operation returns an error indicating that the specified query is not running.
    **/
    stopQuery(req: operations.StopQueryRequest, config?: AxiosRequestConfig): Promise<operations.StopQueryResponse>;
    /**
     * tagLogGroup - <p>Adds or updates the specified tags for the specified log group.</p> <p>To list the tags for a log group, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsLogGroup.html">ListTagsLogGroup</a>. To remove tags, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagLogGroup.html">UntagLogGroup</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html#log-group-tagging">Tag Log Groups in Amazon CloudWatch Logs</a> in the <i>Amazon CloudWatch Logs User Guide</i>.</p> <p>CloudWatch Logs doesn’t support IAM policies that prevent users from assigning specified tags to log groups using the <code>aws:Resource/<i>key-name</i> </code> or <code>aws:TagKeys</code> condition keys. For more information about using tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources using tags</a>.</p>
    **/
    tagLogGroup(req: operations.TagLogGroupRequest, config?: AxiosRequestConfig): Promise<operations.TagLogGroupResponse>;
    /**
     * testMetricFilter - Tests the filter pattern of a metric filter against a sample of log event messages. You can use this operation to validate the correctness of a metric filter pattern.
    **/
    testMetricFilter(req: operations.TestMetricFilterRequest, config?: AxiosRequestConfig): Promise<operations.TestMetricFilterResponse>;
    /**
     * untagLogGroup - <p>Removes the specified tags from the specified log group.</p> <p>To list the tags for a log group, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsLogGroup.html">ListTagsLogGroup</a>. To add tags, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagLogGroup.html">TagLogGroup</a>.</p> <p>CloudWatch Logs doesn’t support IAM policies that prevent users from assigning specified tags to log groups using the <code>aws:Resource/<i>key-name</i> </code> or <code>aws:TagKeys</code> condition keys. </p>
    **/
    untagLogGroup(req: operations.UntagLogGroupRequest, config?: AxiosRequestConfig): Promise<operations.UntagLogGroupResponse>;
}
export {};
