import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://lambda.{region}.amazonaws.com", "https://lambda.{region}.amazonaws.com", "http://lambda.{region}.amazonaws.com.cn", "https://lambda.{region}.amazonaws.com.cn"];
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
     * addLayerVersionPermission - <p>Adds permissions to the resource-based policy of a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Use this action to grant layer usage permission to other accounts. You can grant permission to a single account, all accounts in an organization, or all Amazon Web Services accounts. </p> <p>To revoke permission, call <a>RemoveLayerVersionPermission</a> with the statement ID that you specified when you added it.</p>
    **/
    addLayerVersionPermission(req: operations.AddLayerVersionPermissionRequest, config?: AxiosRequestConfig): Promise<operations.AddLayerVersionPermissionResponse>;
    /**
     * addPermission - <p>Grants an Amazon Web Services service or another account permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function.</p> <p>To grant permission to another account, specify the account ID as the <code>Principal</code>. For Amazon Web Services services, the principal is a domain-style identifier defined by the service, like <code>s3.amazonaws.com</code> or <code>sns.amazonaws.com</code>. For Amazon Web Services services, you can also specify the ARN of the associated resource as the <code>SourceArn</code>. If you grant permission to a service principal without specifying the source, other accounts could potentially configure resources in their account to invoke your Lambda function.</p> <p>This action adds a statement to a resource-based permissions policy for the function. For more information about function policies, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">Lambda Function Policies</a>. </p>
    **/
    addPermission(req: operations.AddPermissionRequest, config?: AxiosRequestConfig): Promise<operations.AddPermissionResponse>;
    /**
     * createAlias - <p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a> for a Lambda function version. Use aliases to provide clients with a function identifier that you can update to invoke a different version.</p> <p>You can also map an alias to split invocation requests between two versions. Use the <code>RoutingConfig</code> parameter to specify a second version and the percentage of invocation requests that it receives.</p>
    **/
    createAlias(req: operations.CreateAliasRequest, config?: AxiosRequestConfig): Promise<operations.CreateAliasResponse>;
    /**
     * createCodeSigningConfig - Creates a code signing configuration. A <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-trustedcode.html">code signing configuration</a> defines a list of allowed signing profiles and defines the code-signing validation policy (action to be taken if deployment validation checks fail).
    **/
    createCodeSigningConfig(req: operations.CreateCodeSigningConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateCodeSigningConfigResponse>;
    /**
     * createEventSourceMapping - <p>Creates a mapping between an event source and an Lambda function. Lambda reads items from the event source and triggers the function.</p> <p>For details about each event source type, see the following topics. In particular, each of the topics describes the required and optional parameters for the specific event source. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping"> Configuring a Dynamo DB stream as an event source</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping"> Configuring a Kinesis stream as an event source</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource"> Configuring an SQS queue as an event source</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping"> Configuring an MQ broker as an event source</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html"> Configuring MSK as an event source</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html"> Configuring Self-Managed Apache Kafka as an event source</a> </p> </li> </ul> <p>The following error handling options are only available for stream sources (DynamoDB and Kinesis):</p> <ul> <li> <p> <code>BisectBatchOnFunctionError</code> - If the function returns an error, split the batch in two and retry.</p> </li> <li> <p> <code>DestinationConfig</code> - Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p> </li> <li> <p> <code>MaximumRecordAgeInSeconds</code> - Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p> </li> <li> <p> <code>MaximumRetryAttempts</code> - Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p> </li> <li> <p> <code>ParallelizationFactor</code> - Process multiple batches from each shard concurrently.</p> </li> </ul>
    **/
    createEventSourceMapping(req: operations.CreateEventSourceMappingRequest, config?: AxiosRequestConfig): Promise<operations.CreateEventSourceMappingResponse>;
    /**
     * createFunction - <p>Creates a Lambda function. To create a function, you need a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html">deployment package</a> and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html#lambda-intro-execution-role">execution role</a>. The deployment package is a .zip file archive or container image that contains your function code. The execution role grants the function permission to use Amazon Web Services services, such as Amazon CloudWatch Logs for log streaming and X-Ray for request tracing.</p> <p>You set the package type to <code>Image</code> if the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container image</a>. For a container image, the code property must include the URI of a container image in the Amazon ECR registry. You do not need to specify the handler and runtime properties. </p> <p>You set the package type to <code>Zip</code> if the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip">.zip file archive</a>. For a .zip file archive, the code property specifies the location of the .zip file. You must also specify the handler and runtime properties.</p> <p>When you create a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute or so. During this time, you can't invoke or modify the function. The <code>State</code>, <code>StateReason</code>, and <code>StateReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a> indicate when the function is ready to invoke. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Function States</a>.</p> <p>A function has an unpublished version, and can have published versions and aliases. The unpublished version changes when you update your function's code and configuration. A published version is a snapshot of your function code and configuration that can't be changed. An alias is a named resource that maps to a version, and can be changed to map to a different version. Use the <code>Publish</code> parameter to create version <code>1</code> of your function from its initial configuration.</p> <p>The other parameters let you configure version-specific and function-level settings. You can modify version-specific settings later with <a>UpdateFunctionConfiguration</a>. Function-level settings apply to both the unpublished and published versions of the function, and include tags (<a>TagResource</a>) and per-function concurrency limits (<a>PutFunctionConcurrency</a>).</p> <p>You can use code signing if your deployment package is a .zip file archive. To enable code signing for this function, specify the ARN of a code-signing configuration. When a user attempts to deploy a code package with <a>UpdateFunctionCode</a>, Lambda checks that the code package has a valid signature from a trusted publisher. The code-signing configuration includes set set of signing profiles, which define the trusted publishers for this function.</p> <p>If another account or an Amazon Web Services service invokes your function, use <a>AddPermission</a> to grant permission by creating a resource-based IAM policy. You can grant permissions at the function level, on a version, or on an alias.</p> <p>To invoke your function directly, use <a>Invoke</a>. To invoke your function in response to events in other Amazon Web Services services, create an event source mapping (<a>CreateEventSourceMapping</a>), or configure a function trigger in the other service. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html">Invoking Functions</a>.</p>
    **/
    createFunction(req: operations.CreateFunctionRequest, config?: AxiosRequestConfig): Promise<operations.CreateFunctionResponse>;
    /**
     * deleteAlias - Deletes a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.
    **/
    deleteAlias(req: operations.DeleteAliasRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAliasResponse>;
    /**
     * deleteCodeSigningConfig - Deletes the code signing configuration. You can delete the code signing configuration only if no function is using it.
    **/
    deleteCodeSigningConfig(req: operations.DeleteCodeSigningConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCodeSigningConfigResponse>;
    /**
     * deleteEventSourceMapping - <p>Deletes an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-invocation-modes.html">event source mapping</a>. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.</p> <p>When you delete an event source mapping, it enters a <code>Deleting</code> state and might not be completely deleted for several seconds.</p>
    **/
    deleteEventSourceMapping(req: operations.DeleteEventSourceMappingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEventSourceMappingResponse>;
    /**
     * deleteFunction - <p>Deletes a Lambda function. To delete a specific function version, use the <code>Qualifier</code> parameter. Otherwise, all versions and aliases are deleted.</p> <p>To delete Lambda event source mappings that invoke a function, use <a>DeleteEventSourceMapping</a>. For Amazon Web Services services and resources that invoke your function directly, delete the trigger in the service where you originally configured it.</p>
    **/
    deleteFunction(req: operations.DeleteFunctionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFunctionResponse>;
    /**
     * deleteFunctionCodeSigningConfig - Removes the code signing configuration from the function.
    **/
    deleteFunctionCodeSigningConfig(req: operations.DeleteFunctionCodeSigningConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFunctionCodeSigningConfigResponse>;
    /**
     * deleteFunctionConcurrency - Removes a concurrent execution limit from a function.
    **/
    deleteFunctionConcurrency(req: operations.DeleteFunctionConcurrencyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFunctionConcurrencyResponse>;
    /**
     * deleteFunctionEventInvokeConfig - <p>Deletes the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
    **/
    deleteFunctionEventInvokeConfig(req: operations.DeleteFunctionEventInvokeConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFunctionEventInvokeConfigResponse>;
    /**
     * deleteLayerVersion - Deletes a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Deleted versions can no longer be viewed or added to functions. To avoid breaking functions, a copy of the version remains in Lambda until no functions refer to it.
    **/
    deleteLayerVersion(req: operations.DeleteLayerVersionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLayerVersionResponse>;
    /**
     * deleteProvisionedConcurrencyConfig - Deletes the provisioned concurrency configuration for a function.
    **/
    deleteProvisionedConcurrencyConfig(req: operations.DeleteProvisionedConcurrencyConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProvisionedConcurrencyConfigResponse>;
    /**
     * getAccountSettings - Retrieves details about your account's <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">limits</a> and usage in an Amazon Web Services Region.
    **/
    getAccountSettings(req: operations.GetAccountSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountSettingsResponse>;
    /**
     * getAlias - Returns details about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.
    **/
    getAlias(req: operations.GetAliasRequest, config?: AxiosRequestConfig): Promise<operations.GetAliasResponse>;
    /**
     * getCodeSigningConfig - Returns information about the specified code signing configuration.
    **/
    getCodeSigningConfig(req: operations.GetCodeSigningConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetCodeSigningConfigResponse>;
    /**
     * getEventSourceMapping - Returns details about an event source mapping. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.
    **/
    getEventSourceMapping(req: operations.GetEventSourceMappingRequest, config?: AxiosRequestConfig): Promise<operations.GetEventSourceMappingResponse>;
    /**
     * getFunction - Returns information about the function or function version, with a link to download the deployment package that's valid for 10 minutes. If you specify a function version, only details that are specific to that version are returned.
    **/
    getFunction(req: operations.GetFunctionRequest, config?: AxiosRequestConfig): Promise<operations.GetFunctionResponse>;
    /**
     * getFunctionCodeSigningConfig - Returns the code signing configuration for the specified function.
    **/
    getFunctionCodeSigningConfig(req: operations.GetFunctionCodeSigningConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetFunctionCodeSigningConfigResponse>;
    /**
     * getFunctionConcurrency - Returns details about the reserved concurrency configuration for a function. To set a concurrency limit for a function, use <a>PutFunctionConcurrency</a>.
    **/
    getFunctionConcurrency(req: operations.GetFunctionConcurrencyRequest, config?: AxiosRequestConfig): Promise<operations.GetFunctionConcurrencyResponse>;
    /**
     * getFunctionConfiguration - <p>Returns the version-specific settings of a Lambda function or version. The output includes only options that can vary between versions of a function. To modify these settings, use <a>UpdateFunctionConfiguration</a>.</p> <p>To get all of a function's details, including function-level settings, use <a>GetFunction</a>.</p>
    **/
    getFunctionConfiguration(req: operations.GetFunctionConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetFunctionConfigurationResponse>;
    /**
     * getFunctionEventInvokeConfig - <p>Retrieves the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
    **/
    getFunctionEventInvokeConfig(req: operations.GetFunctionEventInvokeConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetFunctionEventInvokeConfigResponse>;
    /**
     * getLayerVersion - Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>, with a link to download the layer archive that's valid for 10 minutes.
    **/
    getLayerVersion(req: operations.GetLayerVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetLayerVersionResponse>;
    /**
     * getLayerVersionByArn - Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>, with a link to download the layer archive that's valid for 10 minutes.
    **/
    getLayerVersionByArn(req: operations.GetLayerVersionByArnRequest, config?: AxiosRequestConfig): Promise<operations.GetLayerVersionByArnResponse>;
    /**
     * getLayerVersionPolicy - Returns the permission policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. For more information, see <a>AddLayerVersionPermission</a>.
    **/
    getLayerVersionPolicy(req: operations.GetLayerVersionPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetLayerVersionPolicyResponse>;
    /**
     * getPolicy - Returns the <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">resource-based IAM policy</a> for a function, version, or alias.
    **/
    getPolicy(req: operations.GetPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetPolicyResponse>;
    /**
     * getProvisionedConcurrencyConfig - Retrieves the provisioned concurrency configuration for a function's alias or version.
    **/
    getProvisionedConcurrencyConfig(req: operations.GetProvisionedConcurrencyConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetProvisionedConcurrencyConfigResponse>;
    /**
     * invoke - <p>Invokes a Lambda function. You can invoke a function synchronously (and wait for the response), or asynchronously. To invoke a function asynchronously, set <code>InvocationType</code> to <code>Event</code>.</p> <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-sync.html">synchronous invocation</a>, details about the function response, including errors, are included in the response body and headers. For either invocation type, you can find more information in the <a href="https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions.html">execution log</a> and <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-x-ray.html">trace</a>.</p> <p>When an error occurs, your function may be invoked multiple times. Retry behavior varies by error type, client, event source, and invocation type. For example, if you invoke a function asynchronously and it returns an error, Lambda executes the function up to two more times. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/retries-on-errors.html">Retry Behavior</a>.</p> <p>For <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a>, Lambda adds events to a queue before sending them to your function. If your function does not have enough capacity to keep up with the queue, events may be lost. Occasionally, your function may receive the same event multiple times, even if no error occurs. To retain events that were not processed, configure your function with a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a>.</p> <p>The status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your function from executing, such as permissions errors, <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">limit errors</a>, or issues with your function's code and configuration. For example, Lambda returns <code>TooManyRequestsException</code> if executing the function would cause you to exceed a concurrency limit at either the account level (<code>ConcurrentInvocationLimitExceeded</code>) or function level (<code>ReservedFunctionConcurrentInvocationLimitExceeded</code>).</p> <p>For functions with a long timeout, your client might be disconnected during synchronous invocation while it waits for a response. Configure your HTTP client, SDK, firewall, proxy, or operating system to allow for long connections with timeout or keep-alive settings.</p> <p>This operation requires permission for the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html">lambda:InvokeFunction</a> action.</p>
    **/
    invoke(req: operations.InvokeRequest, config?: AxiosRequestConfig): Promise<operations.InvokeResponse>;
    /**
     * invokeAsync - <important> <p>For asynchronous function invocation, use <a>Invoke</a>.</p> </important> <p>Invokes a function asynchronously.</p>
    **/
    invokeAsync(req: operations.InvokeAsyncRequest, config?: AxiosRequestConfig): Promise<operations.InvokeAsyncResponse>;
    /**
     * listAliases - Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">aliases</a> for a Lambda function.
    **/
    listAliases(req: operations.ListAliasesRequest, config?: AxiosRequestConfig): Promise<operations.ListAliasesResponse>;
    /**
     * listCodeSigningConfigs - Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuring-codesigning.html">code signing configurations</a>. A request returns up to 10,000 configurations per call. You can use the <code>MaxItems</code> parameter to return fewer configurations per call.
    **/
    listCodeSigningConfigs(req: operations.ListCodeSigningConfigsRequest, config?: AxiosRequestConfig): Promise<operations.ListCodeSigningConfigsResponse>;
    /**
     * listEventSourceMappings - Lists event source mappings. Specify an <code>EventSourceArn</code> to only show event source mappings for a single event source.
    **/
    listEventSourceMappings(req: operations.ListEventSourceMappingsRequest, config?: AxiosRequestConfig): Promise<operations.ListEventSourceMappingsResponse>;
    /**
     * listFunctionEventInvokeConfigs - <p>Retrieves a list of configurations for asynchronous invocation for a function.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
    **/
    listFunctionEventInvokeConfigs(req: operations.ListFunctionEventInvokeConfigsRequest, config?: AxiosRequestConfig): Promise<operations.ListFunctionEventInvokeConfigsResponse>;
    /**
     * listFunctions - <p>Returns a list of Lambda functions, with the version-specific configuration of each. Lambda returns up to 50 functions per call.</p> <p>Set <code>FunctionVersion</code> to <code>ALL</code> to include all published versions of each function in addition to the unpublished version. </p> <note> <p>The <code>ListFunctions</code> action returns a subset of the <a>FunctionConfiguration</a> fields. To get the additional fields (State, StateReasonCode, StateReason, LastUpdateStatus, LastUpdateStatusReason, LastUpdateStatusReasonCode) for a function or version, use <a>GetFunction</a>.</p> </note>
    **/
    listFunctions(req: operations.ListFunctionsRequest, config?: AxiosRequestConfig): Promise<operations.ListFunctionsResponse>;
    /**
     * listFunctionsByCodeSigningConfig - List the functions that use the specified code signing configuration. You can use this method prior to deleting a code signing configuration, to verify that no functions are using it.
    **/
    listFunctionsByCodeSigningConfig(req: operations.ListFunctionsByCodeSigningConfigRequest, config?: AxiosRequestConfig): Promise<operations.ListFunctionsByCodeSigningConfigResponse>;
    /**
     * listLayerVersions - Lists the versions of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. Versions that have been deleted aren't listed. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only versions that indicate that they're compatible with that runtime.
    **/
    listLayerVersions(req: operations.ListLayerVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListLayerVersionsResponse>;
    /**
     * listLayers - Lists <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layers</a> and shows information about the latest version of each. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only layers that indicate that they're compatible with that runtime.
    **/
    listLayers(req: operations.ListLayersRequest, config?: AxiosRequestConfig): Promise<operations.ListLayersResponse>;
    /**
     * listProvisionedConcurrencyConfigs - Retrieves a list of provisioned concurrency configurations for a function.
    **/
    listProvisionedConcurrencyConfigs(req: operations.ListProvisionedConcurrencyConfigsRequest, config?: AxiosRequestConfig): Promise<operations.ListProvisionedConcurrencyConfigsResponse>;
    /**
     * listTags - Returns a function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a>. You can also view tags with <a>GetFunction</a>.
    **/
    listTags(req: operations.ListTagsRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsResponse>;
    /**
     * listVersionsByFunction - Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">versions</a>, with the version-specific configuration of each. Lambda returns up to 50 versions per call.
    **/
    listVersionsByFunction(req: operations.ListVersionsByFunctionRequest, config?: AxiosRequestConfig): Promise<operations.ListVersionsByFunctionResponse>;
    /**
     * publishLayerVersion - <p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a> from a ZIP archive. Each time you call <code>PublishLayerVersion</code> with the same layer name, a new version is created.</p> <p>Add layers to your function with <a>CreateFunction</a> or <a>UpdateFunctionConfiguration</a>.</p>
    **/
    publishLayerVersion(req: operations.PublishLayerVersionRequest, config?: AxiosRequestConfig): Promise<operations.PublishLayerVersionResponse>;
    /**
     * publishVersion - <p>Creates a <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">version</a> from the current code and configuration of a function. Use versions to create a snapshot of your function code and configuration that doesn't change.</p> <p>Lambda doesn't publish a version if the function's configuration and code haven't changed since the last version. Use <a>UpdateFunctionCode</a> or <a>UpdateFunctionConfiguration</a> to update the function before publishing a version.</p> <p>Clients can invoke versions directly or with an alias. To create an alias, use <a>CreateAlias</a>.</p>
    **/
    publishVersion(req: operations.PublishVersionRequest, config?: AxiosRequestConfig): Promise<operations.PublishVersionResponse>;
    /**
     * putFunctionCodeSigningConfig - Update the code signing configuration for the function. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function.
    **/
    putFunctionCodeSigningConfig(req: operations.PutFunctionCodeSigningConfigRequest, config?: AxiosRequestConfig): Promise<operations.PutFunctionCodeSigningConfigResponse>;
    /**
     * putFunctionConcurrency - <p>Sets the maximum number of simultaneous executions for a function, and reserves capacity for that concurrency level.</p> <p>Concurrency settings apply to the function as a whole, including all published versions and the unpublished version. Reserving concurrency both ensures that your function has capacity to process the specified number of events simultaneously, and prevents it from scaling beyond that level. Use <a>GetFunction</a> to see the current setting for a function.</p> <p>Use <a>GetAccountSettings</a> to see your Regional concurrency limit. You can reserve concurrency for as many functions as you like, as long as you leave at least 100 simultaneous executions unreserved for functions that aren't configured with a per-function limit. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html">Managing Concurrency</a>.</p>
    **/
    putFunctionConcurrency(req: operations.PutFunctionConcurrencyRequest, config?: AxiosRequestConfig): Promise<operations.PutFunctionConcurrencyResponse>;
    /**
     * putFunctionEventInvokeConfig - <p>Configures options for <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous invocation</a> on a function, version, or alias. If a configuration already exists for a function, version, or alias, this operation overwrites it. If you exclude any settings, they are removed. To set one option without affecting existing settings for other options, use <a>UpdateFunctionEventInvokeConfig</a>.</p> <p>By default, Lambda retries an asynchronous invocation twice if the function returns an error. It retains events in a queue for up to six hours. When an event fails all processing attempts or stays in the asynchronous invocation queue for too long, Lambda discards it. To retain discarded events, configure a dead-letter queue with <a>UpdateFunctionConfiguration</a>.</p> <p>To send an invocation record to a queue, topic, function, or event bus, specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations">destination</a>. You can configure separate destinations for successful invocations (on-success) and events that fail all processing attempts (on-failure). You can configure destinations in addition to or instead of a dead-letter queue.</p>
    **/
    putFunctionEventInvokeConfig(req: operations.PutFunctionEventInvokeConfigRequest, config?: AxiosRequestConfig): Promise<operations.PutFunctionEventInvokeConfigResponse>;
    /**
     * putProvisionedConcurrencyConfig - Adds a provisioned concurrency configuration to a function's alias or version.
    **/
    putProvisionedConcurrencyConfig(req: operations.PutProvisionedConcurrencyConfigRequest, config?: AxiosRequestConfig): Promise<operations.PutProvisionedConcurrencyConfigResponse>;
    /**
     * removeLayerVersionPermission - Removes a statement from the permissions policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. For more information, see <a>AddLayerVersionPermission</a>.
    **/
    removeLayerVersionPermission(req: operations.RemoveLayerVersionPermissionRequest, config?: AxiosRequestConfig): Promise<operations.RemoveLayerVersionPermissionResponse>;
    /**
     * removePermission - Revokes function-use permission from an Amazon Web Services service or another account. You can get the ID of the statement from the output of <a>GetPolicy</a>.
    **/
    removePermission(req: operations.RemovePermissionRequest, config?: AxiosRequestConfig): Promise<operations.RemovePermissionResponse>;
    /**
     * tagResource - Adds <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to a function.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> from a function.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateAlias - Updates the configuration of a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.
    **/
    updateAlias(req: operations.UpdateAliasRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAliasResponse>;
    /**
     * updateCodeSigningConfig - Update the code signing configuration. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function.
    **/
    updateCodeSigningConfig(req: operations.UpdateCodeSigningConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCodeSigningConfigResponse>;
    /**
     * updateEventSourceMapping - <p>Updates an event source mapping. You can change the function that Lambda invokes, or pause invocation and resume later from the same location.</p> <p>The following error handling options are only available for stream sources (DynamoDB and Kinesis):</p> <ul> <li> <p> <code>BisectBatchOnFunctionError</code> - If the function returns an error, split the batch in two and retry.</p> </li> <li> <p> <code>DestinationConfig</code> - Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p> </li> <li> <p> <code>MaximumRecordAgeInSeconds</code> - Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p> </li> <li> <p> <code>MaximumRetryAttempts</code> - Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p> </li> <li> <p> <code>ParallelizationFactor</code> - Process multiple batches from each shard concurrently.</p> </li> </ul>
    **/
    updateEventSourceMapping(req: operations.UpdateEventSourceMappingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEventSourceMappingResponse>;
    /**
     * updateFunctionCode - <p>Updates a Lambda function's code. If code signing is enabled for the function, the code package must be signed by a trusted publisher. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-trustedcode.html">Configuring code signing</a>.</p> <p>The function's code is locked when you publish a version. You can't modify the code of a published version, only the unpublished version.</p> <note> <p>For a function defined as a container image, Lambda resolves the image tag to an image digest. In Amazon ECR, if you update the image tag to a new image, Lambda does not automatically update the function.</p> </note>
    **/
    updateFunctionCode(req: operations.UpdateFunctionCodeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFunctionCodeResponse>;
    /**
     * updateFunctionConfiguration - <p>Modify the version-specific settings of a Lambda function.</p> <p>When you update a function, Lambda provisions an instance of the function and its supporting resources. If your function connects to a VPC, this process can take a minute. During this time, you can't modify the function, but you can still invoke it. The <code>LastUpdateStatus</code>, <code>LastUpdateStatusReason</code>, and <code>LastUpdateStatusReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a> indicate when the update is complete and the function is processing events with the new configuration. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Function States</a>.</p> <p>These settings can vary between versions of a function and are locked when you publish a version. You can't modify the configuration of a published version, only the unpublished version.</p> <p>To configure function concurrency, use <a>PutFunctionConcurrency</a>. To grant invoke permissions to an account or Amazon Web Services service, use <a>AddPermission</a>.</p>
    **/
    updateFunctionConfiguration(req: operations.UpdateFunctionConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFunctionConfigurationResponse>;
    /**
     * updateFunctionEventInvokeConfig - <p>Updates the configuration for asynchronous invocation for a function, version, or alias.</p> <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
    **/
    updateFunctionEventInvokeConfig(req: operations.UpdateFunctionEventInvokeConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFunctionEventInvokeConfigResponse>;
}
export {};
