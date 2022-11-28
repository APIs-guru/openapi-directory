# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.BatchGetTracesRequest(
    query_params=operations.BatchGetTracesQueryParams(
        next_token="autem",
    ),
    headers=operations.BatchGetTracesHeaders(
        x_amz_algorithm="aliquam",
        x_amz_content_sha256="beatae",
        x_amz_credential="atque",
        x_amz_date="enim",
        x_amz_security_token="facere",
        x_amz_signature="est",
        x_amz_signed_headers="quod",
    ),
    request=operations.BatchGetTracesRequestBody(
        next_token="tempore",
        trace_ids=[
            "ullam",
        ],
    ),
)
    
res = s.sdk.batch_get_traces(req)

if res.batch_get_traces_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `batch_get_traces` - Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use <code>GetTraceSummaries</code> to get a list of trace IDs.
* `create_group` - Creates a group resource with a name and a filter expression. 
* `create_sampling_rule` - Creates a rule to control sampling behavior for instrumented applications. Services retrieve rules with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingRules.html">GetSamplingRules</a>, and evaluate each rule in ascending order of <i>priority</i> for each request. If a rule matches, the service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to X-Ray with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a> to get updated versions of each in-use rule. The updated rule contains a trace quota that the service can use instead of borrowing from the reservoir.
* `delete_group` - Deletes a group resource.
* `delete_sampling_rule` - Deletes a sampling rule.
* `get_encryption_config` - Retrieves the current encryption configuration for X-Ray data.
* `get_group` - Retrieves group resource details.
* `get_groups` - Retrieves all active group details.
* `get_insight` - Retrieves the summary information of an insight. This includes impact to clients and root cause services, the top anomalous services, the category, the state of the insight, and the start and end time of the insight.
* `get_insight_events` - X-Ray reevaluates insights periodically until they're resolved, and records each intermediate state as an event. You can review an insight's events in the Impact Timeline on the Inspect page in the X-Ray console.
* `get_insight_impact_graph` - Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only structural information. For a complete service graph, use this API with the GetServiceGraph API.
* `get_insight_summaries` - Retrieves the summaries of all insights in the specified group matching the provided filter values.
* `get_sampling_rules` - Retrieves all sampling rules.
* `get_sampling_statistic_summaries` - Retrieves information about recent sampling results for all sampling rules.
* `get_sampling_targets` - Requests a sampling quota for rules that the service is using to sample requests. 
* `get_service_graph` - Retrieves a document that describes services that process incoming requests, and downstream services that they call as a result. Root services process incoming requests and make calls to downstream services. Root services are applications that use the <a href="https://docs.aws.amazon.com/xray/index.html">Amazon Web Services X-Ray SDK</a>. Downstream services can be other applications, Amazon Web Services resources, HTTP web APIs, or SQL databases.
* `get_time_series_service_statistics` - Get an aggregation of service statistics defined by a specific time range.
* `get_trace_graph` - Retrieves a service graph for one or more specific trace IDs.
* `get_trace_summaries` - <p>Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to <code>BatchGetTraces</code>.</p> <p>A filter expression can target traced requests that hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter expression targets traces that pass through <code>api.example.com</code>:</p> <p> <code>service("api.example.com")</code> </p> <p>This filter expression finds traces that have an annotation named <code>account</code> with the value <code>12345</code>:</p> <p> <code>annotation.account = "12345"</code> </p> <p>For a full list of indexed fields and keywords that you can use in filter expressions, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-console-filters.html">Using Filter Expressions</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p>
* `list_tags_for_resource` - Returns a list of tags that are applied to the specified Amazon Web Services X-Ray group or sampling rule.
* `put_encryption_config` - Updates the encryption configuration for X-Ray data.
* `put_telemetry_records` - Used by the Amazon Web Services X-Ray daemon to upload telemetry.
* `put_trace_segments` - <p>Uploads segment documents to Amazon Web Services X-Ray. The <a href="https://docs.aws.amazon.com/xray/index.html">X-Ray SDK</a> generates segment documents and sends them to the X-Ray daemon, which uploads them in batches. A segment document can be a completed segment, an in-progress segment, or an array of subsegments.</p> <p>Segments must include the following fields. For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">Amazon Web Services X-Ray Segment Documents</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p> <p class="title"> <b>Required segment document fields</b> </p> <ul> <li> <p> <code>name</code> - The name of the service that handled the request.</p> </li> <li> <p> <code>id</code> - A 64-bit identifier for the segment, unique among segments in the same trace, in 16 hexadecimal digits.</p> </li> <li> <p> <code>trace_id</code> - A unique identifier that connects all segments and subsegments originating from a single client request.</p> </li> <li> <p> <code>start_time</code> - Time the segment or subsegment was created, in floating point seconds in epoch time, accurate to milliseconds. For example, <code>1480615200.010</code> or <code>1.480615200010E9</code>.</p> </li> <li> <p> <code>end_time</code> - Time the segment or subsegment was closed. For example, <code>1480615200.090</code> or <code>1.480615200090E9</code>. Specify either an <code>end_time</code> or <code>in_progress</code>.</p> </li> <li> <p> <code>in_progress</code> - Set to <code>true</code> instead of specifying an <code>end_time</code> to record that a segment has been started, but is not complete. Send an in-progress segment when your application receives a request that will take a long time to serve, to trace that the request was received. When the response is sent, send the complete segment to overwrite the in-progress segment.</p> </li> </ul> <p>A <code>trace_id</code> consists of three numbers separated by hyphens. For example, 1-58406520-a006649127e371903a2de979. This includes:</p> <p class="title"> <b>Trace ID Format</b> </p> <ul> <li> <p>The version number, for instance, <code>1</code>.</p> </li> <li> <p>The time of the original request, in Unix epoch time, in 8 hexadecimal digits. For example, 10:00AM December 2nd, 2016 PST in epoch time is <code>1480615200</code> seconds, or <code>58406520</code> in hexadecimal.</p> </li> <li> <p>A 96-bit identifier for the trace, globally unique, in 24 hexadecimal digits.</p> </li> </ul>
* `tag_resource` - Applies tags to an existing Amazon Web Services X-Ray group or sampling rule.
* `untag_resource` - Removes tags from an Amazon Web Services X-Ray group or sampling rule. You cannot edit or delete system tags (those with an <code>aws:</code> prefix).
* `update_group` - Updates a group resource.
* `update_sampling_rule` - Modifies a sampling rule's configuration.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
