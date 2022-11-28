# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.BatchGetTracesRequest{
        QueryParams: operations.BatchGetTracesQueryParams{
            NextToken: "autem",
        },
        Headers: operations.BatchGetTracesHeaders{
            XAmzAlgorithm: "aliquam",
            XAmzContentSha256: "beatae",
            XAmzCredential: "atque",
            XAmzDate: "enim",
            XAmzSecurityToken: "facere",
            XAmzSignature: "est",
            XAmzSignedHeaders: "quod",
        },
        Request: operations.BatchGetTracesRequestBody{
            NextToken: "tempore",
            TraceIds: []string{
                "ullam",
            },
        },
    }
    
    res, err := s.Sdk.BatchGetTraces(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetTracesResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `BatchGetTraces` - Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use <code>GetTraceSummaries</code> to get a list of trace IDs.
* `CreateGroup` - Creates a group resource with a name and a filter expression. 
* `CreateSamplingRule` - Creates a rule to control sampling behavior for instrumented applications. Services retrieve rules with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingRules.html">GetSamplingRules</a>, and evaluate each rule in ascending order of <i>priority</i> for each request. If a rule matches, the service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to X-Ray with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a> to get updated versions of each in-use rule. The updated rule contains a trace quota that the service can use instead of borrowing from the reservoir.
* `DeleteGroup` - Deletes a group resource.
* `DeleteSamplingRule` - Deletes a sampling rule.
* `GetEncryptionConfig` - Retrieves the current encryption configuration for X-Ray data.
* `GetGroup` - Retrieves group resource details.
* `GetGroups` - Retrieves all active group details.
* `GetInsight` - Retrieves the summary information of an insight. This includes impact to clients and root cause services, the top anomalous services, the category, the state of the insight, and the start and end time of the insight.
* `GetInsightEvents` - X-Ray reevaluates insights periodically until they're resolved, and records each intermediate state as an event. You can review an insight's events in the Impact Timeline on the Inspect page in the X-Ray console.
* `GetInsightImpactGraph` - Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only structural information. For a complete service graph, use this API with the GetServiceGraph API.
* `GetInsightSummaries` - Retrieves the summaries of all insights in the specified group matching the provided filter values.
* `GetSamplingRules` - Retrieves all sampling rules.
* `GetSamplingStatisticSummaries` - Retrieves information about recent sampling results for all sampling rules.
* `GetSamplingTargets` - Requests a sampling quota for rules that the service is using to sample requests. 
* `GetServiceGraph` - Retrieves a document that describes services that process incoming requests, and downstream services that they call as a result. Root services process incoming requests and make calls to downstream services. Root services are applications that use the <a href="https://docs.aws.amazon.com/xray/index.html">Amazon Web Services X-Ray SDK</a>. Downstream services can be other applications, Amazon Web Services resources, HTTP web APIs, or SQL databases.
* `GetTimeSeriesServiceStatistics` - Get an aggregation of service statistics defined by a specific time range.
* `GetTraceGraph` - Retrieves a service graph for one or more specific trace IDs.
* `GetTraceSummaries` - <p>Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to <code>BatchGetTraces</code>.</p> <p>A filter expression can target traced requests that hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter expression targets traces that pass through <code>api.example.com</code>:</p> <p> <code>service("api.example.com")</code> </p> <p>This filter expression finds traces that have an annotation named <code>account</code> with the value <code>12345</code>:</p> <p> <code>annotation.account = "12345"</code> </p> <p>For a full list of indexed fields and keywords that you can use in filter expressions, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-console-filters.html">Using Filter Expressions</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p>
* `ListTagsForResource` - Returns a list of tags that are applied to the specified Amazon Web Services X-Ray group or sampling rule.
* `PutEncryptionConfig` - Updates the encryption configuration for X-Ray data.
* `PutTelemetryRecords` - Used by the Amazon Web Services X-Ray daemon to upload telemetry.
* `PutTraceSegments` - <p>Uploads segment documents to Amazon Web Services X-Ray. The <a href="https://docs.aws.amazon.com/xray/index.html">X-Ray SDK</a> generates segment documents and sends them to the X-Ray daemon, which uploads them in batches. A segment document can be a completed segment, an in-progress segment, or an array of subsegments.</p> <p>Segments must include the following fields. For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">Amazon Web Services X-Ray Segment Documents</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p> <p class="title"> <b>Required segment document fields</b> </p> <ul> <li> <p> <code>name</code> - The name of the service that handled the request.</p> </li> <li> <p> <code>id</code> - A 64-bit identifier for the segment, unique among segments in the same trace, in 16 hexadecimal digits.</p> </li> <li> <p> <code>trace_id</code> - A unique identifier that connects all segments and subsegments originating from a single client request.</p> </li> <li> <p> <code>start_time</code> - Time the segment or subsegment was created, in floating point seconds in epoch time, accurate to milliseconds. For example, <code>1480615200.010</code> or <code>1.480615200010E9</code>.</p> </li> <li> <p> <code>end_time</code> - Time the segment or subsegment was closed. For example, <code>1480615200.090</code> or <code>1.480615200090E9</code>. Specify either an <code>end_time</code> or <code>in_progress</code>.</p> </li> <li> <p> <code>in_progress</code> - Set to <code>true</code> instead of specifying an <code>end_time</code> to record that a segment has been started, but is not complete. Send an in-progress segment when your application receives a request that will take a long time to serve, to trace that the request was received. When the response is sent, send the complete segment to overwrite the in-progress segment.</p> </li> </ul> <p>A <code>trace_id</code> consists of three numbers separated by hyphens. For example, 1-58406520-a006649127e371903a2de979. This includes:</p> <p class="title"> <b>Trace ID Format</b> </p> <ul> <li> <p>The version number, for instance, <code>1</code>.</p> </li> <li> <p>The time of the original request, in Unix epoch time, in 8 hexadecimal digits. For example, 10:00AM December 2nd, 2016 PST in epoch time is <code>1480615200</code> seconds, or <code>58406520</code> in hexadecimal.</p> </li> <li> <p>A 96-bit identifier for the trace, globally unique, in 24 hexadecimal digits.</p> </li> </ul>
* `TagResource` - Applies tags to an existing Amazon Web Services X-Ray group or sampling rule.
* `UntagResource` - Removes tags from an Amazon Web Services X-Ray group or sampling rule. You cannot edit or delete system tags (those with an <code>aws:</code> prefix).
* `UpdateGroup` - Updates a group resource.
* `UpdateSamplingRule` - Modifies a sampling rule's configuration.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
