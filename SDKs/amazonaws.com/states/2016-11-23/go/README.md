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
    
    req := operations.CreateActivityRequest{
        Headers: operations.CreateActivityHeaders{
            XAmzAlgorithm: "aperiam",
            XAmzContentSha256: "ut",
            XAmzCredential: "illum",
            XAmzDate: "hic",
            XAmzSecurityToken: "quisquam",
            XAmzSignature: "sit",
            XAmzSignedHeaders: "autem",
            XAmzTarget: "AWSStepFunctions.CreateActivity",
        },
        Request: shared.CreateActivityInput{
            Name: "itaque",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "et",
                    Value: "et",
                },
            },
        },
    }
    
    res, err := s.Sdk.CreateActivity(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateActivityOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateActivity` - <p>Creates an activity. An activity is a task that you write in any programming language and host on any machine that has access to AWS Step Functions. Activities must poll Step Functions using the <code>GetActivityTask</code> API action and respond using <code>SendTask*</code> API actions. This function lets Step Functions know the existence of your activity and returns an identifier for use in a state machine and when polling from the activity.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <note> <p> <code>CreateActivity</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created. <code>CreateActivity</code>'s idempotency check is based on the activity <code>name</code>. If a following request has different <code>tags</code> values, Step Functions will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>
* `CreateStateMachine` - <p>Creates a state machine. A state machine consists of a collection of states that can do work (<code>Task</code> states), determine to which states to transition next (<code>Choice</code> states), stop an execution with an error (<code>Fail</code> states), and so on. State machines are specified using a JSON-based, structured language. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a> in the AWS Step Functions User Guide.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <note> <p> <code>CreateStateMachine</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created. <code>CreateStateMachine</code>'s idempotency check is based on the state machine <code>name</code>, <code>definition</code>, <code>type</code>, <code>LoggingConfiguration</code> and <code>TracingConfiguration</code>. If a following request has a different <code>roleArn</code> or <code>tags</code>, Step Functions will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>roleArn</code> and <code>tags</code> will not be updated, even if they are different.</p> </note>
* `DeleteActivity` - Deletes an activity.
* `DeleteStateMachine` - <p>Deletes a state machine. This is an asynchronous operation: It sets the state machine's status to <code>DELETING</code> and begins the deletion process. </p> <note> <p>For <code>EXPRESS</code>state machines, the deletion will happen eventually (usually less than a minute). Running executions may emit logs after <code>DeleteStateMachine</code> API is called.</p> </note>
* `DescribeActivity` - <p>Describes an activity.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>
* `DescribeExecution` - <p>Describes an execution.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
* `DescribeStateMachine` - <p>Describes a state machine.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>
* `DescribeStateMachineForExecution` - <p>Describes the state machine associated with a specific execution.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
* `GetActivityTask` - <p>Used by workers to retrieve a task (with the specified activity ARN) which has been scheduled for execution by a running state machine. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available (i.e. an execution of a task of this type is needed.) The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll returns a <code>taskToken</code> with a null string.</p> <important> <p>Workers should set their client side socket timeout to at least 65 seconds (5 seconds higher than the maximum time the service may hold the poll request).</p> <p>Polling with <code>GetActivityTask</code> can cause latency in some implementations. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/bp-activity-pollers.html">Avoid Latency When Polling for Activity Tasks</a> in the Step Functions Developer Guide.</p> </important>
* `GetExecutionHistory` - <p>Returns the history of the specified execution as a list of events. By default, the results are returned in ascending order of the <code>timeStamp</code> of the events. Use the <code>reverseOrder</code> parameter to get the latest events first.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
* `ListActivities` - <p>Lists the existing activities.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>
* `ListExecutions` - <p>Lists the executions of a state machine that meet the filtering criteria. Results are sorted by time, with the most recent execution first.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
* `ListStateMachines` - <p>Lists the existing state machines.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>
* `ListTagsForResource` - <p>List tags for a given resource.</p> <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>
* `SendTaskFailure` - Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern to report that the task identified by the <code>taskToken</code> failed.
* `SendTaskHeartbeat` - <p>Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern to report to Step Functions that the task represented by the specified <code>taskToken</code> is still making progress. This action resets the <code>Heartbeat</code> clock. The <code>Heartbeat</code> threshold is specified in the state machine's Amazon States Language definition (<code>HeartbeatSeconds</code>). This action does not in itself create an event in the execution history. However, if the task times out, the execution history contains an <code>ActivityTimedOut</code> entry for activities, or a <code>TaskTimedOut</code> entry for for tasks using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-sync">job run</a> or <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern.</p> <note> <p>The <code>Timeout</code> of a task, defined in the state machine's Amazon States Language definition, is its maximum allowed duration, regardless of the number of <a>SendTaskHeartbeat</a> requests received. Use <code>HeartbeatSeconds</code> to configure the timeout interval for heartbeats.</p> </note>
* `SendTaskSuccess` - Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern to report that the task identified by the <code>taskToken</code> completed successfully.
* `StartExecution` - <p>Starts a state machine execution.</p> <note> <p> <code>StartExecution</code> is idempotent. If <code>StartExecution</code> is called with the same name and input as a running execution, the call will succeed and return the same response as the original request. If the execution is closed or if the input is different, it will return a 400 <code>ExecutionAlreadyExists</code> error. Names can be reused after 90 days. </p> </note>
* `StartSyncExecution` - Starts a Synchronous Express state machine execution.
* `StopExecution` - <p>Stops an execution.</p> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
* `TagResource` - <p>Add a tag to a Step Functions resource.</p> <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM Tags</a>.</p> <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>
* `UntagResource` - Remove a tag from a Step Functions resource
* `UpdateStateMachine` - <p>Updates an existing state machine by modifying its <code>definition</code>, <code>roleArn</code>, or <code>loggingConfiguration</code>. Running executions will continue to use the previous <code>definition</code> and <code>roleArn</code>. You must include at least one of <code>definition</code> or <code>roleArn</code> or you will receive a <code>MissingRequiredParameter</code> error.</p> <note> <p>All <code>StartExecution</code> calls within a few seconds will use the updated <code>definition</code> and <code>roleArn</code>. Executions started immediately after calling <code>UpdateStateMachine</code> may use the previous state machine <code>definition</code> and <code>roleArn</code>. </p> </note>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
