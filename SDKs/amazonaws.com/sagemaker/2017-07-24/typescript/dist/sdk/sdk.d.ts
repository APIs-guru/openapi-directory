import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://api.sagemaker.{region}.amazonaws.com", "https://api.sagemaker.{region}.amazonaws.com", "http://api.sagemaker.{region}.amazonaws.com.cn", "https://api.sagemaker.{region}.amazonaws.com.cn"];
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
     * addAssociation - Creates an <i>association</i> between the source and the destination. A source can be associated with multiple destinations, and a destination can be associated with multiple sources. An association is a lineage tracking entity. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker ML Lineage Tracking</a>.
    **/
    addAssociation(req: operations.AddAssociationRequest, config?: AxiosRequestConfig): Promise<operations.AddAssociationResponse>;
    /**
     * addTags - <p>Adds or overwrites one or more tags for the specified Amazon SageMaker resource. You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints.</p> <p>Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">Amazon Web Services Tagging Strategies</a>.</p> <note> <p>Tags that you add to a hyperparameter tuning job by calling this API are also added to any training jobs that the hyperparameter tuning job launches after you call this API, but not to training jobs that the hyperparameter tuning job launched before you called this API. To make sure that the tags associated with a hyperparameter tuning job are also added to all training jobs that the hyperparameter tuning job launches, add the tags when you first create the tuning job by specifying them in the <code>Tags</code> parameter of <a>CreateHyperParameterTuningJob</a> </p> </note> <note> <p>Tags that you add to a SageMaker Studio Domain or User Profile by calling this API are also added to any Apps that the Domain or User Profile launches after you call this API, but not to Apps that the Domain or User Profile launched before you called this API. To make sure that the tags associated with a Domain or User Profile are also added to all Apps that the Domain or User Profile launches, add the tags when you first create the Domain or User Profile by specifying them in the <code>Tags</code> parameter of <a>CreateDomain</a> or <a>CreateUserProfile</a>.</p> </note>
    **/
    addTags(req: operations.AddTagsRequest, config?: AxiosRequestConfig): Promise<operations.AddTagsResponse>;
    /**
     * associateTrialComponent - Associates a trial component with a trial. A trial component can be associated with multiple trials. To disassociate a trial component from a trial, call the <a>DisassociateTrialComponent</a> API.
    **/
    associateTrialComponent(req: operations.AssociateTrialComponentRequest, config?: AxiosRequestConfig): Promise<operations.AssociateTrialComponentResponse>;
    /**
     * createAction - Creates an <i>action</i>. An action is a lineage tracking entity that represents an action or activity. For example, a model deployment or an HPO job. Generally, an action involves at least one input or output artifact. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker ML Lineage Tracking</a>.
    **/
    createAction(req: operations.CreateActionRequest, config?: AxiosRequestConfig): Promise<operations.CreateActionResponse>;
    /**
     * createAlgorithm - Create a machine learning algorithm that you can use in Amazon SageMaker and list in the Amazon Web Services Marketplace.
    **/
    createAlgorithm(req: operations.CreateAlgorithmRequest, config?: AxiosRequestConfig): Promise<operations.CreateAlgorithmResponse>;
    /**
     * createApp - Creates a running app for the specified UserProfile. Supported apps are <code>JupyterServer</code> and <code>KernelGateway</code>. This operation is automatically invoked by Amazon SageMaker Studio upon access to the associated Domain, and when new kernel configurations are selected by the user. A user may have multiple Apps active simultaneously.
    **/
    createApp(req: operations.CreateAppRequest, config?: AxiosRequestConfig): Promise<operations.CreateAppResponse>;
    /**
     * createAppImageConfig - Creates a configuration for running a SageMaker image as a KernelGateway app. The configuration specifies the Amazon Elastic File System (EFS) storage volume on the image, and a list of the kernels in the image.
    **/
    createAppImageConfig(req: operations.CreateAppImageConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateAppImageConfigResponse>;
    /**
     * createArtifact - Creates an <i>artifact</i>. An artifact is a lineage tracking entity that represents a URI addressable object or data. Some examples are the S3 URI of a dataset and the ECR registry path of an image. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker ML Lineage Tracking</a>.
    **/
    createArtifact(req: operations.CreateArtifactRequest, config?: AxiosRequestConfig): Promise<operations.CreateArtifactResponse>;
    /**
     * createAutoMlJob - <p>Creates an Autopilot job.</p> <p>Find the best-performing model after you run an Autopilot job by calling .</p> <p>For information about how to use Autopilot, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-automate-model-development.html">Automate Model Development with Amazon SageMaker Autopilot</a>.</p>
    **/
    createAutoMlJob(req: operations.CreateAutoMlJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateAutoMlJobResponse>;
    /**
     * createCodeRepository - <p>Creates a Git repository as a resource in your Amazon SageMaker account. You can associate the repository with notebook instances so that you can use Git source control for the notebooks you create. The Git repository is a resource in your Amazon SageMaker account, so it can be associated with more than one notebook instance, and it persists independently from the lifecycle of any notebook instances it is associated with.</p> <p>The repository can be hosted either in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">Amazon Web Services CodeCommit</a> or in any other Git repository.</p>
    **/
    createCodeRepository(req: operations.CreateCodeRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.CreateCodeRepositoryResponse>;
    /**
     * createCompilationJob - <p>Starts a model compilation job. After the model has been compiled, Amazon SageMaker saves the resulting model artifacts to an Amazon Simple Storage Service (Amazon S3) bucket that you specify. </p> <p>If you choose to host your model using Amazon SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts with Amazon Web Services IoT Greengrass. In that case, deploy them as an ML resource.</p> <p>In the request body, you provide the following:</p> <ul> <li> <p>A name for the compilation job</p> </li> <li> <p> Information about the input model artifacts </p> </li> <li> <p>The output location for the compiled model and the device (target) that the model runs on </p> </li> <li> <p>The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker assumes to perform the model compilation job. </p> </li> </ul> <p>You can also provide a <code>Tag</code> to track the model compilation job's resource use and costs. The response body contains the <code>CompilationJobArn</code> for the compiled job.</p> <p>To stop a model compilation job, use <a>StopCompilationJob</a>. To get information about a particular model compilation job, use <a>DescribeCompilationJob</a>. To get information about multiple model compilation jobs, use <a>ListCompilationJobs</a>.</p>
    **/
    createCompilationJob(req: operations.CreateCompilationJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateCompilationJobResponse>;
    /**
     * createContext - Creates a <i>context</i>. A context is a lineage tracking entity that represents a logical grouping of other tracking or experiment entities. Some examples are an endpoint and a model package. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker ML Lineage Tracking</a>.
    **/
    createContext(req: operations.CreateContextRequest, config?: AxiosRequestConfig): Promise<operations.CreateContextResponse>;
    /**
     * createDataQualityJobDefinition - Creates a definition for a job that monitors data quality and drift. For information about model monitor, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model Monitor</a>.
    **/
    createDataQualityJobDefinition(req: operations.CreateDataQualityJobDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.CreateDataQualityJobDefinitionResponse>;
    /**
     * createDeviceFleet - Creates a device fleet.
    **/
    createDeviceFleet(req: operations.CreateDeviceFleetRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeviceFleetResponse>;
    /**
     * createDomain - <p>Creates a <code>Domain</code> used by Amazon SageMaker Studio. A domain consists of an associated Amazon Elastic File System (EFS) volume, a list of authorized users, and a variety of security, application, policy, and Amazon Virtual Private Cloud (VPC) configurations. An Amazon Web Services account is limited to one domain per region. Users within a domain can share notebook files and other artifacts with each other.</p> <p> <b>EFS storage</b> </p> <p>When a domain is created, an EFS volume is created for use by all of the users within the domain. Each user receives a private home directory within the EFS volume for notebooks, Git repositories, and data files.</p> <p>SageMaker uses the Amazon Web Services Key Management Service (Amazon Web Services KMS) to encrypt the EFS volume attached to the domain with an Amazon Web Services managed key by default. For more control, you can specify a customer managed key. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/encryption-at-rest.html">Protect Data at Rest Using Encryption</a>.</p> <p> <b>VPC configuration</b> </p> <p>All SageMaker Studio traffic between the domain and the EFS volume is through the specified VPC and subnets. For other Studio traffic, you can specify the <code>AppNetworkAccessType</code> parameter. <code>AppNetworkAccessType</code> corresponds to the network access type that you choose when you onboard to Studio. The following options are available:</p> <ul> <li> <p> <code>PublicInternetOnly</code> - Non-EFS traffic goes through a VPC managed by Amazon SageMaker, which allows internet access. This is the default value.</p> </li> <li> <p> <code>VpcOnly</code> - All Studio traffic is through the specified VPC and subnets. Internet access is disabled by default. To allow internet access, you must specify a NAT gateway.</p> <p>When internet access is disabled, you won't be able to run a Studio notebook or to train or host models unless your VPC has an interface endpoint to the SageMaker API and runtime or a NAT gateway and your security groups allow outbound connections.</p> </li> </ul> <important> <p>NFS traffic over TCP on port 2049 needs to be allowed in both inbound and outbound rules in order to launch a SageMaker Studio app successfully.</p> </important> <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-notebooks-and-internet-access.html">Connect SageMaker Studio Notebooks to Resources in a VPC</a>.</p>
    **/
    createDomain(req: operations.CreateDomainRequest, config?: AxiosRequestConfig): Promise<operations.CreateDomainResponse>;
    /**
     * createEdgePackagingJob - Starts a SageMaker Edge Manager model packaging job. Edge Manager will use the model artifacts from the Amazon Simple Storage Service bucket that you specify. After the model has been packaged, Amazon SageMaker saves the resulting artifacts to an S3 bucket that you specify.
    **/
    createEdgePackagingJob(req: operations.CreateEdgePackagingJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateEdgePackagingJobResponse>;
    /**
     * createEndpoint - <p>Creates an endpoint using the endpoint configuration specified in the request. Amazon SageMaker uses the endpoint to provision resources and deploy models. You create the endpoint configuration with the <a>CreateEndpointConfig</a> API. </p> <p> Use this API to deploy models using Amazon SageMaker hosting services. </p> <p>For an example that calls this method when deploying a model to Amazon SageMaker hosting services, see the <a href="https://github.com/aws/amazon-sagemaker-examples/blob/master/sagemaker-fundamentals/create-endpoint/create_endpoint.ipynb">Create Endpoint example notebook.</a> </p> <note> <p> You must not delete an <code>EndpointConfig</code> that is in use by an endpoint that is live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code> operations are being performed on the endpoint. To update an endpoint, you must create a new <code>EndpointConfig</code>.</p> </note> <p>The endpoint name must be unique within an Amazon Web Services Region in your Amazon Web Services account. </p> <p>When it receives the request, Amazon SageMaker creates the endpoint, launches the resources (ML compute instances), and deploys the model(s) on them. </p> <note> <p>When you call <a>CreateEndpoint</a>, a load call is made to DynamoDB to verify that your endpoint configuration exists. When you read data from a DynamoDB table supporting <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html"> <code>Eventually Consistent Reads</code> </a>, the response might not reflect the results of a recently completed write operation. The response might include some stale data. If the dependent entities are not yet in DynamoDB, this causes a validation error. If you repeat your read request after a short time, the response should return the latest data. So retry logic is recommended to handle these possible issues. We also recommend that customers call <a>DescribeEndpointConfig</a> before calling <a>CreateEndpoint</a> to minimize the potential impact of a DynamoDB eventually consistent read.</p> </note> <p>When Amazon SageMaker receives the request, it sets the endpoint status to <code>Creating</code>. After it creates the endpoint, it sets the status to <code>InService</code>. Amazon SageMaker can then process incoming requests for inferences. To check the status of an endpoint, use the <a>DescribeEndpoint</a> API.</p> <p>If any of the models hosted at this endpoint get model data from an Amazon S3 location, Amazon SageMaker uses Amazon Web Services Security Token Service to download model artifacts from the S3 path you provided. Amazon Web Services STS is activated in your IAM user account by default. If you previously deactivated Amazon Web Services STS for a region, you need to reactivate Amazon Web Services STS for that region. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and Deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p> <note> <p> To add the IAM role policies for using this API operation, go to the <a href="https://console.aws.amazon.com/iam/">IAM console</a>, and choose Roles in the left navigation pane. Search the IAM role that you want to grant access to use the <a>CreateEndpoint</a> and <a>CreateEndpointConfig</a> API operations, add the following policies to the role. </p> <ul> <li> <p>Option 1: For a full Amazon SageMaker access, search and attach the <code>AmazonSageMakerFullAccess</code> policy.</p> </li> <li> <p>Option 2: For granting a limited access to an IAM role, paste the following Action elements manually into the JSON file of the IAM role: </p> <p> <code>"Action": ["sagemaker:CreateEndpoint", "sagemaker:CreateEndpointConfig"]</code> </p> <p> <code>"Resource": [</code> </p> <p> <code>"arn:aws:sagemaker:region:account-id:endpoint/endpointName"</code> </p> <p> <code>"arn:aws:sagemaker:region:account-id:endpoint-config/endpointConfigName"</code> </p> <p> <code>]</code> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/api-permissions-reference.html">Amazon SageMaker API Permissions: Actions, Permissions, and Resources Reference</a>.</p> </li> </ul> </note>
    **/
    createEndpoint(req: operations.CreateEndpointRequest, config?: AxiosRequestConfig): Promise<operations.CreateEndpointResponse>;
    /**
     * createEndpointConfig - <p>Creates an endpoint configuration that Amazon SageMaker hosting services uses to deploy models. In the configuration, you identify one or more models, created using the <code>CreateModel</code> API, to deploy and the resources that you want Amazon SageMaker to provision. Then you call the <a>CreateEndpoint</a> API.</p> <note> <p> Use this API if you want to use Amazon SageMaker hosting services to deploy models into production. </p> </note> <p>In the request, you define a <code>ProductionVariant</code>, for each model that you want to deploy. Each <code>ProductionVariant</code> parameter also describes the resources that you want Amazon SageMaker to provision. This includes the number and type of ML compute instances to deploy. </p> <p>If you are hosting multiple models, you also assign a <code>VariantWeight</code> to specify how much traffic you want to allocate to each model. For example, suppose that you want to host two models, A and B, and you assign traffic weight 2 for model A and 1 for model B. Amazon SageMaker distributes two-thirds of the traffic to Model A, and one-third to model B. </p> <note> <p>When you call <a>CreateEndpoint</a>, a load call is made to DynamoDB to verify that your endpoint configuration exists. When you read data from a DynamoDB table supporting <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html"> <code>Eventually Consistent Reads</code> </a>, the response might not reflect the results of a recently completed write operation. The response might include some stale data. If the dependent entities are not yet in DynamoDB, this causes a validation error. If you repeat your read request after a short time, the response should return the latest data. So retry logic is recommended to handle these possible issues. We also recommend that customers call <a>DescribeEndpointConfig</a> before calling <a>CreateEndpoint</a> to minimize the potential impact of a DynamoDB eventually consistent read.</p> </note>
    **/
    createEndpointConfig(req: operations.CreateEndpointConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateEndpointConfigResponse>;
    /**
     * createExperiment - <p>Creates an SageMaker <i>experiment</i>. An experiment is a collection of <i>trials</i> that are observed, compared and evaluated as a group. A trial is a set of steps, called <i>trial components</i>, that produce a machine learning model.</p> <p>The goal of an experiment is to determine the components that produce the best model. Multiple trials are performed, each one isolating and measuring the impact of a change to one or more inputs, while keeping the remaining inputs constant.</p> <p>When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the Amazon Web Services SDK for Python (Boto), you must use the logging APIs provided by the SDK.</p> <p>You can add tags to experiments, trials, trial components and then use the <a>Search</a> API to search for the tags.</p> <p>To add a description to an experiment, specify the optional <code>Description</code> parameter. To add a description later, or to change the description, call the <a>UpdateExperiment</a> API.</p> <p>To get a list of all your experiments, call the <a>ListExperiments</a> API. To view an experiment's properties, call the <a>DescribeExperiment</a> API. To get a list of all the trials associated with an experiment, call the <a>ListTrials</a> API. To create a trial call the <a>CreateTrial</a> API.</p>
    **/
    createExperiment(req: operations.CreateExperimentRequest, config?: AxiosRequestConfig): Promise<operations.CreateExperimentResponse>;
    /**
     * createFeatureGroup - <p>Create a new <code>FeatureGroup</code>. A <code>FeatureGroup</code> is a group of <code>Features</code> defined in the <code>FeatureStore</code> to describe a <code>Record</code>. </p> <p>The <code>FeatureGroup</code> defines the schema and features contained in the FeatureGroup. A <code>FeatureGroup</code> definition is composed of a list of <code>Features</code>, a <code>RecordIdentifierFeatureName</code>, an <code>EventTimeFeatureName</code> and configurations for its <code>OnlineStore</code> and <code>OfflineStore</code>. Check <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">Amazon Web Services service quotas</a> to see the <code>FeatureGroup</code>s quota for your Amazon Web Services account.</p> <important> <p>You must include at least one of <code>OnlineStoreConfig</code> and <code>OfflineStoreConfig</code> to create a <code>FeatureGroup</code>.</p> </important>
    **/
    createFeatureGroup(req: operations.CreateFeatureGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateFeatureGroupResponse>;
    /**
     * createFlowDefinition - Creates a flow definition.
    **/
    createFlowDefinition(req: operations.CreateFlowDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.CreateFlowDefinitionResponse>;
    /**
     * createHumanTaskUi - Defines the settings you will use for the human review workflow user interface. Reviewers will see a three-panel interface with an instruction area, the item to review, and an input area.
    **/
    createHumanTaskUi(req: operations.CreateHumanTaskUiRequest, config?: AxiosRequestConfig): Promise<operations.CreateHumanTaskUiResponse>;
    /**
     * createHyperParameterTuningJob - Starts a hyperparameter tuning job. A hyperparameter tuning job finds the best version of a model by running many training jobs on your dataset using the algorithm you choose and values for hyperparameters within ranges that you specify. It then chooses the hyperparameter values that result in a model that performs the best, as measured by an objective metric that you choose.
    **/
    createHyperParameterTuningJob(req: operations.CreateHyperParameterTuningJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateHyperParameterTuningJobResponse>;
    /**
     * createImage - Creates a custom SageMaker image. A SageMaker image is a set of image versions. Each image version represents a container image stored in Amazon Container Registry (ECR). For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html">Bring your own SageMaker image</a>.
    **/
    createImage(req: operations.CreateImageRequest, config?: AxiosRequestConfig): Promise<operations.CreateImageResponse>;
    /**
     * createImageVersion - Creates a version of the SageMaker image specified by <code>ImageName</code>. The version represents the Amazon Container Registry (ECR) container image specified by <code>BaseImage</code>.
    **/
    createImageVersion(req: operations.CreateImageVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateImageVersionResponse>;
    /**
     * createLabelingJob - <p>Creates a job that uses workers to label the data objects in your input dataset. You can use the labeled data to train machine learning models. </p> <p>You can select your workforce from one of three providers:</p> <ul> <li> <p>A private workforce that you create. It can include employees, contractors, and outside experts. Use a private workforce when want the data to stay within your organization or when a specific set of skills is required.</p> </li> <li> <p>One or more vendors that you select from the Amazon Web Services Marketplace. Vendors provide expertise in specific areas. </p> </li> <li> <p>The Amazon Mechanical Turk workforce. This is the largest workforce, but it should only be used for public data or data that has been stripped of any personally identifiable information.</p> </li> </ul> <p>You can also use <i>automated data labeling</i> to reduce the number of data objects that need to be labeled by a human. Automated data labeling uses <i>active learning</i> to determine if a data object can be labeled by machine or if it needs to be sent to a human worker. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-automated-labeling.html">Using Automated Data Labeling</a>.</p> <p>The data objects to be labeled are contained in an Amazon S3 bucket. You create a <i>manifest file</i> that describes the location of each object. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data.html">Using Input and Output Data</a>.</p> <p>The output can be used as the manifest file for another labeling job or as training data for your machine learning models.</p> <p>You can use this operation to create a static labeling job or a streaming labeling job. A static labeling job stops if all data objects in the input manifest file identified in <code>ManifestS3Uri</code> have been labeled. A streaming labeling job runs perpetually until it is manually stopped, or remains idle for 10 days. You can send new data objects to an active (<code>InProgress</code>) streaming labeling job in real time. To learn how to create a static labeling job, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-create-labeling-job-api.html">Create a Labeling Job (API) </a> in the Amazon SageMaker Developer Guide. To learn how to create a streaming labeling job, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-streaming-create-job.html">Create a Streaming Labeling Job</a>.</p>
    **/
    createLabelingJob(req: operations.CreateLabelingJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateLabelingJobResponse>;
    /**
     * createModel - <p>Creates a model in Amazon SageMaker. In the request, you name the model and describe a primary container. For the primary container, you specify the Docker image that contains inference code, artifacts (from prior training), and a custom environment map that the inference code uses when you deploy the model for predictions.</p> <p>Use this API to create a model if you want to use Amazon SageMaker hosting services or run a batch transform job.</p> <p>To host your model, you create an endpoint configuration with the <code>CreateEndpointConfig</code> API, and then create an endpoint with the <code>CreateEndpoint</code> API. Amazon SageMaker then deploys all of the containers that you defined for the model in the hosting environment. </p> <p>For an example that calls this method when deploying a model to Amazon SageMaker hosting services, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ex1-deploy-model.html#ex1-deploy-model-boto">Deploy the Model to Amazon SageMaker Hosting Services (Amazon Web Services SDK for Python (Boto 3)).</a> </p> <p>To run a batch transform using your model, you start a job with the <code>CreateTransformJob</code> API. Amazon SageMaker uses your model and your dataset to get inferences which are then saved to a specified S3 location.</p> <p>In the <code>CreateModel</code> request, you must define a container with the <code>PrimaryContainer</code> parameter.</p> <p>In the request, you also provide an IAM role that Amazon SageMaker can assume to access model artifacts and docker image for deployment on ML compute hosting instances or for batch transform jobs. In addition, you also use the IAM role to manage permissions the inference code needs. For example, if the inference code access any other Amazon Web Services resources, you grant necessary permissions via this role.</p>
    **/
    createModel(req: operations.CreateModelRequest, config?: AxiosRequestConfig): Promise<operations.CreateModelResponse>;
    /**
     * createModelBiasJobDefinition - Creates the definition for a model bias job.
    **/
    createModelBiasJobDefinition(req: operations.CreateModelBiasJobDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.CreateModelBiasJobDefinitionResponse>;
    /**
     * createModelExplainabilityJobDefinition - Creates the definition for a model explainability job.
    **/
    createModelExplainabilityJobDefinition(req: operations.CreateModelExplainabilityJobDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.CreateModelExplainabilityJobDefinitionResponse>;
    /**
     * createModelPackage - <p>Creates a model package that you can use to create Amazon SageMaker models or list on Amazon Web Services Marketplace, or a versioned model that is part of a model group. Buyers can subscribe to model packages listed on Amazon Web Services Marketplace to create models in Amazon SageMaker.</p> <p>To create a model package by specifying a Docker container that contains your inference code and the Amazon S3 location of your model artifacts, provide values for <code>InferenceSpecification</code>. To create a model from an algorithm resource that you created or subscribed to in Amazon Web Services Marketplace, provide a value for <code>SourceAlgorithmSpecification</code>.</p> <note> <p>There are two types of model packages:</p> <ul> <li> <p>Versioned - a model that is part of a model group in the model registry.</p> </li> <li> <p>Unversioned - a model package that is not part of a model group.</p> </li> </ul> </note>
    **/
    createModelPackage(req: operations.CreateModelPackageRequest, config?: AxiosRequestConfig): Promise<operations.CreateModelPackageResponse>;
    /**
     * createModelPackageGroup - Creates a model group. A model group contains a group of model versions.
    **/
    createModelPackageGroup(req: operations.CreateModelPackageGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateModelPackageGroupResponse>;
    /**
     * createModelQualityJobDefinition - Creates a definition for a job that monitors model quality and drift. For information about model monitor, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model Monitor</a>.
    **/
    createModelQualityJobDefinition(req: operations.CreateModelQualityJobDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.CreateModelQualityJobDefinitionResponse>;
    /**
     * createMonitoringSchedule - Creates a schedule that regularly starts Amazon SageMaker Processing Jobs to monitor the data captured for an Amazon SageMaker Endoint.
    **/
    createMonitoringSchedule(req: operations.CreateMonitoringScheduleRequest, config?: AxiosRequestConfig): Promise<operations.CreateMonitoringScheduleResponse>;
    /**
     * createNotebookInstance - <p>Creates an Amazon SageMaker notebook instance. A notebook instance is a machine learning (ML) compute instance running on a Jupyter notebook. </p> <p>In a <code>CreateNotebookInstance</code> request, specify the type of ML compute instance that you want to run. Amazon SageMaker launches the instance, installs common libraries that you can use to explore datasets for model training, and attaches an ML storage volume to the notebook instance. </p> <p>Amazon SageMaker also provides a set of example notebooks. Each notebook demonstrates how to use Amazon SageMaker with a specific algorithm or with a machine learning framework. </p> <p>After receiving the request, Amazon SageMaker does the following:</p> <ol> <li> <p>Creates a network interface in the Amazon SageMaker VPC.</p> </li> <li> <p>(Option) If you specified <code>SubnetId</code>, Amazon SageMaker creates a network interface in your own VPC, which is inferred from the subnet ID that you provide in the input. When creating this network interface, Amazon SageMaker attaches the security group that you specified in the request to the network interface that it creates in your VPC.</p> </li> <li> <p>Launches an EC2 instance of the type specified in the request in the Amazon SageMaker VPC. If you specified <code>SubnetId</code> of your VPC, Amazon SageMaker specifies both network interfaces when launching this instance. This enables inbound traffic from your own VPC to the notebook instance, assuming that the security groups allow it.</p> </li> </ol> <p>After creating the notebook instance, Amazon SageMaker returns its Amazon Resource Name (ARN). You can't change the name of a notebook instance after you create it.</p> <p>After Amazon SageMaker creates the notebook instance, you can connect to the Jupyter server and work in Jupyter notebooks. For example, you can write code to explore a dataset that you can use for model training, train a model, host models by creating Amazon SageMaker endpoints, and validate hosted models. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>
    **/
    createNotebookInstance(req: operations.CreateNotebookInstanceRequest, config?: AxiosRequestConfig): Promise<operations.CreateNotebookInstanceResponse>;
    /**
     * createNotebookInstanceLifecycleConfig - <p>Creates a lifecycle configuration that you can associate with a notebook instance. A <i>lifecycle configuration</i> is a collection of shell scripts that run when you create or start a notebook instance.</p> <p>Each lifecycle configuration script has a limit of 16384 characters.</p> <p>The value of the <code>$PATH</code> environment variable that is available to both scripts is <code>/sbin:bin:/usr/sbin:/usr/bin</code>.</p> <p>View CloudWatch Logs for notebook instance lifecycle configurations in log group <code>/aws/sagemaker/NotebookInstances</code> in log stream <code>[notebook-instance-name]/[LifecycleConfigHook]</code>.</p> <p>Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs for longer than 5 minutes, it fails and the notebook instance is not created or started.</p> <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional) Customize a Notebook Instance</a>.</p>
    **/
    createNotebookInstanceLifecycleConfig(req: operations.CreateNotebookInstanceLifecycleConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateNotebookInstanceLifecycleConfigResponse>;
    /**
     * createPipeline - Creates a pipeline using a JSON pipeline definition.
    **/
    createPipeline(req: operations.CreatePipelineRequest, config?: AxiosRequestConfig): Promise<operations.CreatePipelineResponse>;
    /**
     * createPresignedDomainUrl - <p>Creates a URL for a specified UserProfile in a Domain. When accessed in a web browser, the user will be automatically signed in to Amazon SageMaker Studio, and granted access to all of the Apps and files associated with the Domain's Amazon Elastic File System (EFS) volume. This operation can only be called when the authentication mode equals IAM. </p> <p>The IAM role or user used to call this API defines the permissions to access the app. Once the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request and WebSocket frame that attempts to connect to the app.</p> <p>You can restrict access to this API and to the URL that it returns to a list of IP addresses, Amazon VPCs or Amazon VPC Endpoints that you specify. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-interface-endpoint.html">Connect to SageMaker Studio Through an Interface VPC Endpoint</a> .</p> <note> <p>The URL that you get from a call to <code>CreatePresignedDomainUrl</code> has a default timeout of 5 minutes. You can configure this value using <code>ExpiresInSeconds</code>. If you try to use the URL after the timeout limit expires, you are directed to the Amazon Web Services console sign-in page.</p> </note>
    **/
    createPresignedDomainUrl(req: operations.CreatePresignedDomainUrlRequest, config?: AxiosRequestConfig): Promise<operations.CreatePresignedDomainUrlResponse>;
    /**
     * createPresignedNotebookInstanceUrl - <p>Returns a URL that you can use to connect to the Jupyter server from a notebook instance. In the Amazon SageMaker console, when you choose <code>Open</code> next to a notebook instance, Amazon SageMaker opens a new tab showing the Jupyter server home page from the notebook instance. The console uses this API to get the URL and show the page.</p> <p> The IAM role or user used to call this API defines the permissions to access the notebook instance. Once the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request and WebSocket frame that attempts to connect to the notebook instance.</p> <p>You can restrict access to this API and to the URL that it returns to a list of IP addresses that you specify. Use the <code>NotIpAddress</code> condition operator and the <code>aws:SourceIP</code> condition context key to specify the list of IP addresses that you want to have access to the notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/security_iam_id-based-policy-examples.html#nbi-ip-filter">Limit Access to a Notebook Instance by IP Address</a>.</p> <note> <p>The URL that you get from a call to <a>CreatePresignedNotebookInstanceUrl</a> is valid only for 5 minutes. If you try to use the URL after the 5-minute limit expires, you are directed to the Amazon Web Services console sign-in page.</p> </note>
    **/
    createPresignedNotebookInstanceUrl(req: operations.CreatePresignedNotebookInstanceUrlRequest, config?: AxiosRequestConfig): Promise<operations.CreatePresignedNotebookInstanceUrlResponse>;
    /**
     * createProcessingJob - Creates a processing job.
    **/
    createProcessingJob(req: operations.CreateProcessingJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateProcessingJobResponse>;
    /**
     * createProject - Creates a machine learning (ML) project that can contain one or more templates that set up an ML pipeline from training to deploying an approved model.
    **/
    createProject(req: operations.CreateProjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectResponse>;
    /**
     * createStudioLifecycleConfig - Creates a new Studio Lifecycle Configuration.
    **/
    createStudioLifecycleConfig(req: operations.CreateStudioLifecycleConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateStudioLifecycleConfigResponse>;
    /**
     * createTrainingJob - <p>Starts a model training job. After training completes, Amazon SageMaker saves the resulting model artifacts to an Amazon S3 location that you specify. </p> <p>If you choose to host your model using Amazon SageMaker hosting services, you can use the resulting model artifacts as part of the model. You can also use the artifacts in a machine learning service other than Amazon SageMaker, provided that you know how to use them for inference. </p> <p>In the request body, you provide the following: </p> <ul> <li> <p> <code>AlgorithmSpecification</code> - Identifies the training algorithm to use. </p> </li> <li> <p> <code>HyperParameters</code> - Specify these algorithm-specific parameters to enable the estimation of model parameters during training. Hyperparameters can be tuned to optimize this learning process. For a list of hyperparameters for each training algorithm provided by Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. </p> </li> <li> <p> <code>InputDataConfig</code> - Describes the training dataset and the Amazon S3, EFS, or FSx location where it is stored.</p> </li> <li> <p> <code>OutputDataConfig</code> - Identifies the Amazon S3 bucket where you want Amazon SageMaker to save the results of model training. </p> </li> <li> <p> <code>ResourceConfig</code> - Identifies the resources, ML compute instances, and ML storage volumes to deploy for model training. In distributed training, you specify more than one instance. </p> </li> <li> <p> <code>EnableManagedSpotTraining</code> - Optimize the cost of training machine learning models by up to 80% by using Amazon EC2 Spot instances. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-managed-spot-training.html">Managed Spot Training</a>. </p> </li> <li> <p> <code>RoleArn</code> - The Amazon Resource Name (ARN) that Amazon SageMaker assumes to perform tasks on your behalf during model training. You must grant this role the necessary permissions so that Amazon SageMaker can successfully complete model training. </p> </li> <li> <p> <code>StoppingCondition</code> - To help cap training costs, use <code>MaxRuntimeInSeconds</code> to set a time limit for training. Use <code>MaxWaitTimeInSeconds</code> to specify how long a managed spot training job has to complete. </p> </li> <li> <p> <code>Environment</code> - The environment variables to set in the Docker container.</p> </li> <li> <p> <code>RetryStrategy</code> - The number of times to retry the job when the job fails due to an <code>InternalServerError</code>.</p> </li> </ul> <p> For more information about Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>
    **/
    createTrainingJob(req: operations.CreateTrainingJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateTrainingJobResponse>;
    /**
     * createTransformJob - <p>Starts a transform job. A transform job uses a trained model to get inferences on a dataset and saves these results to an Amazon S3 location that you specify.</p> <p>To perform batch transformations, you create a transform job and use the data that you have readily available.</p> <p>In the request body, you provide the following:</p> <ul> <li> <p> <code>TransformJobName</code> - Identifies the transform job. The name must be unique within an Amazon Web Services Region in an Amazon Web Services account.</p> </li> <li> <p> <code>ModelName</code> - Identifies the model to use. <code>ModelName</code> must be the name of an existing Amazon SageMaker model in the same Amazon Web Services Region and Amazon Web Services account. For information on creating a model, see <a>CreateModel</a>.</p> </li> <li> <p> <code>TransformInput</code> - Describes the dataset to be transformed and the Amazon S3 location where it is stored.</p> </li> <li> <p> <code>TransformOutput</code> - Identifies the Amazon S3 location where you want Amazon SageMaker to save the results from the transform job.</p> </li> <li> <p> <code>TransformResources</code> - Identifies the ML compute instances for the transform job.</p> </li> </ul> <p>For more information about how batch transformation works, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html">Batch Transform</a>.</p>
    **/
    createTransformJob(req: operations.CreateTransformJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateTransformJobResponse>;
    /**
     * createTrial - <p>Creates an SageMaker <i>trial</i>. A trial is a set of steps called <i>trial components</i> that produce a machine learning model. A trial is part of a single SageMaker <i>experiment</i>.</p> <p>When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the Amazon Web Services SDK for Python (Boto), you must use the logging APIs provided by the SDK.</p> <p>You can add tags to a trial and then use the <a>Search</a> API to search for the tags.</p> <p>To get a list of all your trials, call the <a>ListTrials</a> API. To view a trial's properties, call the <a>DescribeTrial</a> API. To create a trial component, call the <a>CreateTrialComponent</a> API.</p>
    **/
    createTrial(req: operations.CreateTrialRequest, config?: AxiosRequestConfig): Promise<operations.CreateTrialResponse>;
    /**
     * createTrialComponent - <p>Creates a <i>trial component</i>, which is a stage of a machine learning <i>trial</i>. A trial is composed of one or more trial components. A trial component can be used in multiple trials.</p> <p>Trial components include pre-processing jobs, training jobs, and batch transform jobs.</p> <p>When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the Amazon Web Services SDK for Python (Boto), you must use the logging APIs provided by the SDK.</p> <p>You can add tags to a trial component and then use the <a>Search</a> API to search for the tags.</p>
    **/
    createTrialComponent(req: operations.CreateTrialComponentRequest, config?: AxiosRequestConfig): Promise<operations.CreateTrialComponentResponse>;
    /**
     * createUserProfile - Creates a user profile. A user profile represents a single user within a domain, and is the main way to reference a "person" for the purposes of sharing, reporting, and other user-oriented features. This entity is created when a user onboards to Amazon SageMaker Studio. If an administrator invites a person by email or imports them from SSO, a user profile is automatically created. A user profile is the primary holder of settings for an individual user and has a reference to the user's private Amazon Elastic File System (EFS) home directory.
    **/
    createUserProfile(req: operations.CreateUserProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserProfileResponse>;
    /**
     * createWorkforce - <p>Use this operation to create a workforce. This operation will return an error if a workforce already exists in the Amazon Web Services Region that you specify. You can only create one workforce in each Amazon Web Services Region per Amazon Web Services account.</p> <p>If you want to create a new workforce in an Amazon Web Services Region where a workforce already exists, use the API operation to delete the existing workforce and then use <code>CreateWorkforce</code> to create a new workforce.</p> <p>To create a private workforce using Amazon Cognito, you must specify a Cognito user pool in <code>CognitoConfig</code>. You can also create an Amazon Cognito workforce using the Amazon SageMaker console. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html"> Create a Private Workforce (Amazon Cognito)</a>.</p> <p>To create a private workforce using your own OIDC Identity Provider (IdP), specify your IdP configuration in <code>OidcConfig</code>. Your OIDC IdP must support <i>groups</i> because groups are used by Ground Truth and Amazon A2I to create work teams. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private-oidc.html"> Create a Private Workforce (OIDC IdP)</a>.</p>
    **/
    createWorkforce(req: operations.CreateWorkforceRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkforceResponse>;
    /**
     * createWorkteam - <p>Creates a new work team for labeling your data. A work team is defined by one or more Amazon Cognito user pools. You must first create the user pools before you can create a work team.</p> <p>You cannot create more than 25 work teams in an account and region.</p>
    **/
    createWorkteam(req: operations.CreateWorkteamRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkteamResponse>;
    /**
     * deleteAction - Deletes an action.
    **/
    deleteAction(req: operations.DeleteActionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteActionResponse>;
    /**
     * deleteAlgorithm - Removes the specified algorithm from your account.
    **/
    deleteAlgorithm(req: operations.DeleteAlgorithmRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAlgorithmResponse>;
    /**
     * deleteApp - Used to stop and delete an app.
    **/
    deleteApp(req: operations.DeleteAppRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppResponse>;
    /**
     * deleteAppImageConfig - Deletes an AppImageConfig.
    **/
    deleteAppImageConfig(req: operations.DeleteAppImageConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppImageConfigResponse>;
    /**
     * deleteArtifact - Deletes an artifact. Either <code>ArtifactArn</code> or <code>Source</code> must be specified.
    **/
    deleteArtifact(req: operations.DeleteArtifactRequest, config?: AxiosRequestConfig): Promise<operations.DeleteArtifactResponse>;
    /**
     * deleteAssociation - Deletes an association.
    **/
    deleteAssociation(req: operations.DeleteAssociationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAssociationResponse>;
    /**
     * deleteCodeRepository - Deletes the specified Git repository from your account.
    **/
    deleteCodeRepository(req: operations.DeleteCodeRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCodeRepositoryResponse>;
    /**
     * deleteContext - Deletes an context.
    **/
    deleteContext(req: operations.DeleteContextRequest, config?: AxiosRequestConfig): Promise<operations.DeleteContextResponse>;
    /**
     * deleteDataQualityJobDefinition - Deletes a data quality monitoring job definition.
    **/
    deleteDataQualityJobDefinition(req: operations.DeleteDataQualityJobDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDataQualityJobDefinitionResponse>;
    /**
     * deleteDeviceFleet - Deletes a fleet.
    **/
    deleteDeviceFleet(req: operations.DeleteDeviceFleetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeviceFleetResponse>;
    /**
     * deleteDomain - Used to delete a domain. If you onboarded with IAM mode, you will need to delete your domain to onboard again using SSO. Use with caution. All of the members of the domain will lose access to their EFS volume, including data, notebooks, and other artifacts.
    **/
    deleteDomain(req: operations.DeleteDomainRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDomainResponse>;
    /**
     * deleteEndpoint - <p>Deletes an endpoint. Amazon SageMaker frees up all of the resources that were deployed when the endpoint was created. </p> <p>Amazon SageMaker retires any custom KMS key grants associated with the endpoint, meaning you don't need to use the <a href="http://docs.aws.amazon.com/kms/latest/APIReference/API_RevokeGrant.html">RevokeGrant</a> API call.</p>
    **/
    deleteEndpoint(req: operations.DeleteEndpointRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEndpointResponse>;
    /**
     * deleteEndpointConfig - <p>Deletes an endpoint configuration. The <code>DeleteEndpointConfig</code> API deletes only the specified configuration. It does not delete endpoints created using the configuration. </p> <p>You must not delete an <code>EndpointConfig</code> in use by an endpoint that is live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code> operations are being performed on the endpoint. If you delete the <code>EndpointConfig</code> of an endpoint that is active or being created or updated you may lose visibility into the instance type the endpoint is using. The endpoint must be deleted in order to stop incurring charges.</p>
    **/
    deleteEndpointConfig(req: operations.DeleteEndpointConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEndpointConfigResponse>;
    /**
     * deleteExperiment - Deletes an SageMaker experiment. All trials associated with the experiment must be deleted first. Use the <a>ListTrials</a> API to get a list of the trials associated with the experiment.
    **/
    deleteExperiment(req: operations.DeleteExperimentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteExperimentResponse>;
    /**
     * deleteFeatureGroup - <p>Delete the <code>FeatureGroup</code> and any data that was written to the <code>OnlineStore</code> of the <code>FeatureGroup</code>. Data cannot be accessed from the <code>OnlineStore</code> immediately after <code>DeleteFeatureGroup</code> is called. </p> <p>Data written into the <code>OfflineStore</code> will not be deleted. The Amazon Web Services Glue database and tables that are automatically created for your <code>OfflineStore</code> are not deleted. </p>
    **/
    deleteFeatureGroup(req: operations.DeleteFeatureGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFeatureGroupResponse>;
    /**
     * deleteFlowDefinition - Deletes the specified flow definition.
    **/
    deleteFlowDefinition(req: operations.DeleteFlowDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFlowDefinitionResponse>;
    /**
     * deleteHumanTaskUi - <p>Use this operation to delete a human task user interface (worker task template).</p> <p> To see a list of human task user interfaces (work task templates) in your account, use . When you delete a worker task template, it no longer appears when you call <code>ListHumanTaskUis</code>.</p>
    **/
    deleteHumanTaskUi(req: operations.DeleteHumanTaskUiRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHumanTaskUiResponse>;
    /**
     * deleteImage - Deletes a SageMaker image and all versions of the image. The container images aren't deleted.
    **/
    deleteImage(req: operations.DeleteImageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImageResponse>;
    /**
     * deleteImageVersion - Deletes a version of a SageMaker image. The container image the version represents isn't deleted.
    **/
    deleteImageVersion(req: operations.DeleteImageVersionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImageVersionResponse>;
    /**
     * deleteModel - Deletes a model. The <code>DeleteModel</code> API deletes only the model entry that was created in Amazon SageMaker when you called the <code>CreateModel</code> API. It does not delete model artifacts, inference code, or the IAM role that you specified when creating the model.
    **/
    deleteModel(req: operations.DeleteModelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteModelResponse>;
    /**
     * deleteModelBiasJobDefinition - Deletes an Amazon SageMaker model bias job definition.
    **/
    deleteModelBiasJobDefinition(req: operations.DeleteModelBiasJobDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteModelBiasJobDefinitionResponse>;
    /**
     * deleteModelExplainabilityJobDefinition - Deletes an Amazon SageMaker model explainability job definition.
    **/
    deleteModelExplainabilityJobDefinition(req: operations.DeleteModelExplainabilityJobDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteModelExplainabilityJobDefinitionResponse>;
    /**
     * deleteModelPackage - <p>Deletes a model package.</p> <p>A model package is used to create Amazon SageMaker models or list on Amazon Web Services Marketplace. Buyers can subscribe to model packages listed on Amazon Web Services Marketplace to create models in Amazon SageMaker.</p>
    **/
    deleteModelPackage(req: operations.DeleteModelPackageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteModelPackageResponse>;
    /**
     * deleteModelPackageGroup - Deletes the specified model group.
    **/
    deleteModelPackageGroup(req: operations.DeleteModelPackageGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteModelPackageGroupResponse>;
    /**
     * deleteModelPackageGroupPolicy - Deletes a model group resource policy.
    **/
    deleteModelPackageGroupPolicy(req: operations.DeleteModelPackageGroupPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteModelPackageGroupPolicyResponse>;
    /**
     * deleteModelQualityJobDefinition - Deletes the secified model quality monitoring job definition.
    **/
    deleteModelQualityJobDefinition(req: operations.DeleteModelQualityJobDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteModelQualityJobDefinitionResponse>;
    /**
     * deleteMonitoringSchedule - Deletes a monitoring schedule. Also stops the schedule had not already been stopped. This does not delete the job execution history of the monitoring schedule.
    **/
    deleteMonitoringSchedule(req: operations.DeleteMonitoringScheduleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMonitoringScheduleResponse>;
    /**
     * deleteNotebookInstance - <p> Deletes an Amazon SageMaker notebook instance. Before you can delete a notebook instance, you must call the <code>StopNotebookInstance</code> API. </p> <important> <p>When you delete a notebook instance, you lose all of your data. Amazon SageMaker removes the ML compute instance, and deletes the ML storage volume and the network interface associated with the notebook instance. </p> </important>
    **/
    deleteNotebookInstance(req: operations.DeleteNotebookInstanceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNotebookInstanceResponse>;
    /**
     * deleteNotebookInstanceLifecycleConfig - Deletes a notebook instance lifecycle configuration.
    **/
    deleteNotebookInstanceLifecycleConfig(req: operations.DeleteNotebookInstanceLifecycleConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNotebookInstanceLifecycleConfigResponse>;
    /**
     * deletePipeline - Deletes a pipeline if there are no running instances of the pipeline. To delete a pipeline, you must stop all running instances of the pipeline using the <code>StopPipelineExecution</code> API. When you delete a pipeline, all instances of the pipeline are deleted.
    **/
    deletePipeline(req: operations.DeletePipelineRequest, config?: AxiosRequestConfig): Promise<operations.DeletePipelineResponse>;
    /**
     * deleteProject - Delete the specified project.
    **/
    deleteProject(req: operations.DeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectResponse>;
    /**
     * deleteStudioLifecycleConfig - Deletes the Studio Lifecycle Configuration. In order to delete the Lifecycle Configuration, there must be no running apps using the Lifecycle Configuration. You must also remove the Lifecycle Configuration from UserSettings in all Domains and UserProfiles.
    **/
    deleteStudioLifecycleConfig(req: operations.DeleteStudioLifecycleConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStudioLifecycleConfigResponse>;
    /**
     * deleteTags - <p>Deletes the specified tags from an Amazon SageMaker resource.</p> <p>To list a resource's tags, use the <code>ListTags</code> API. </p> <note> <p>When you call this API to delete tags from a hyperparameter tuning job, the deleted tags are not removed from training jobs that the hyperparameter tuning job launched before you called this API.</p> </note> <note> <p>When you call this API to delete tags from a SageMaker Studio Domain or User Profile, the deleted tags are not removed from Apps that the SageMaker Studio Domain or User Profile launched before you called this API.</p> </note>
    **/
    deleteTags(req: operations.DeleteTagsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTagsResponse>;
    /**
     * deleteTrial - Deletes the specified trial. All trial components that make up the trial must be deleted first. Use the <a>DescribeTrialComponent</a> API to get the list of trial components.
    **/
    deleteTrial(req: operations.DeleteTrialRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTrialResponse>;
    /**
     * deleteTrialComponent - Deletes the specified trial component. A trial component must be disassociated from all trials before the trial component can be deleted. To disassociate a trial component from a trial, call the <a>DisassociateTrialComponent</a> API.
    **/
    deleteTrialComponent(req: operations.DeleteTrialComponentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTrialComponentResponse>;
    /**
     * deleteUserProfile - Deletes a user profile. When a user profile is deleted, the user loses access to their EFS volume, including data, notebooks, and other artifacts.
    **/
    deleteUserProfile(req: operations.DeleteUserProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserProfileResponse>;
    /**
     * deleteWorkforce - <p>Use this operation to delete a workforce.</p> <p>If you want to create a new workforce in an Amazon Web Services Region where a workforce already exists, use this operation to delete the existing workforce and then use to create a new workforce.</p> <important> <p>If a private workforce contains one or more work teams, you must use the operation to delete all work teams before you delete the workforce. If you try to delete a workforce that contains one or more work teams, you will recieve a <code>ResourceInUse</code> error.</p> </important>
    **/
    deleteWorkforce(req: operations.DeleteWorkforceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkforceResponse>;
    /**
     * deleteWorkteam - Deletes an existing work team. This operation can't be undone.
    **/
    deleteWorkteam(req: operations.DeleteWorkteamRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkteamResponse>;
    /**
     * deregisterDevices - Deregisters the specified devices. After you deregister a device, you will need to re-register the devices.
    **/
    deregisterDevices(req: operations.DeregisterDevicesRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterDevicesResponse>;
    /**
     * describeAction - Describes an action.
    **/
    describeAction(req: operations.DescribeActionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeActionResponse>;
    /**
     * describeAlgorithm - Returns a description of the specified algorithm that is in your account.
    **/
    describeAlgorithm(req: operations.DescribeAlgorithmRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAlgorithmResponse>;
    /**
     * describeApp - Describes the app.
    **/
    describeApp(req: operations.DescribeAppRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAppResponse>;
    /**
     * describeAppImageConfig - Describes an AppImageConfig.
    **/
    describeAppImageConfig(req: operations.DescribeAppImageConfigRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAppImageConfigResponse>;
    /**
     * describeArtifact - Describes an artifact.
    **/
    describeArtifact(req: operations.DescribeArtifactRequest, config?: AxiosRequestConfig): Promise<operations.DescribeArtifactResponse>;
    /**
     * describeAutoMlJob - Returns information about an Amazon SageMaker AutoML job.
    **/
    describeAutoMlJob(req: operations.DescribeAutoMlJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAutoMlJobResponse>;
    /**
     * describeCodeRepository - Gets details about the specified Git repository.
    **/
    describeCodeRepository(req: operations.DescribeCodeRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCodeRepositoryResponse>;
    /**
     * describeCompilationJob - <p>Returns information about a model compilation job.</p> <p>To create a model compilation job, use <a>CreateCompilationJob</a>. To get information about multiple model compilation jobs, use <a>ListCompilationJobs</a>.</p>
    **/
    describeCompilationJob(req: operations.DescribeCompilationJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCompilationJobResponse>;
    /**
     * describeContext - Describes a context.
    **/
    describeContext(req: operations.DescribeContextRequest, config?: AxiosRequestConfig): Promise<operations.DescribeContextResponse>;
    /**
     * describeDataQualityJobDefinition - Gets the details of a data quality monitoring job definition.
    **/
    describeDataQualityJobDefinition(req: operations.DescribeDataQualityJobDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDataQualityJobDefinitionResponse>;
    /**
     * describeDevice - Describes the device.
    **/
    describeDevice(req: operations.DescribeDeviceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDeviceResponse>;
    /**
     * describeDeviceFleet - A description of the fleet the device belongs to.
    **/
    describeDeviceFleet(req: operations.DescribeDeviceFleetRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDeviceFleetResponse>;
    /**
     * describeDomain - The description of the domain.
    **/
    describeDomain(req: operations.DescribeDomainRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDomainResponse>;
    /**
     * describeEdgePackagingJob - A description of edge packaging jobs.
    **/
    describeEdgePackagingJob(req: operations.DescribeEdgePackagingJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEdgePackagingJobResponse>;
    /**
     * describeEndpoint - Returns the description of an endpoint.
    **/
    describeEndpoint(req: operations.DescribeEndpointRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEndpointResponse>;
    /**
     * describeEndpointConfig - Returns the description of an endpoint configuration created using the <code>CreateEndpointConfig</code> API.
    **/
    describeEndpointConfig(req: operations.DescribeEndpointConfigRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEndpointConfigResponse>;
    /**
     * describeExperiment - Provides a list of an experiment's properties.
    **/
    describeExperiment(req: operations.DescribeExperimentRequest, config?: AxiosRequestConfig): Promise<operations.DescribeExperimentResponse>;
    /**
     * describeFeatureGroup - Use this operation to describe a <code>FeatureGroup</code>. The response includes information on the creation time, <code>FeatureGroup</code> name, the unique identifier for each <code>FeatureGroup</code>, and more.
    **/
    describeFeatureGroup(req: operations.DescribeFeatureGroupRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFeatureGroupResponse>;
    /**
     * describeFlowDefinition - Returns information about the specified flow definition.
    **/
    describeFlowDefinition(req: operations.DescribeFlowDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFlowDefinitionResponse>;
    /**
     * describeHumanTaskUi - Returns information about the requested human task user interface (worker task template).
    **/
    describeHumanTaskUi(req: operations.DescribeHumanTaskUiRequest, config?: AxiosRequestConfig): Promise<operations.DescribeHumanTaskUiResponse>;
    /**
     * describeHyperParameterTuningJob - Gets a description of a hyperparameter tuning job.
    **/
    describeHyperParameterTuningJob(req: operations.DescribeHyperParameterTuningJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeHyperParameterTuningJobResponse>;
    /**
     * describeImage - Describes a SageMaker image.
    **/
    describeImage(req: operations.DescribeImageRequest, config?: AxiosRequestConfig): Promise<operations.DescribeImageResponse>;
    /**
     * describeImageVersion - Describes a version of a SageMaker image.
    **/
    describeImageVersion(req: operations.DescribeImageVersionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeImageVersionResponse>;
    /**
     * describeLabelingJob - Gets information about a labeling job.
    **/
    describeLabelingJob(req: operations.DescribeLabelingJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLabelingJobResponse>;
    /**
     * describeModel - Describes a model that you created using the <code>CreateModel</code> API.
    **/
    describeModel(req: operations.DescribeModelRequest, config?: AxiosRequestConfig): Promise<operations.DescribeModelResponse>;
    /**
     * describeModelBiasJobDefinition - Returns a description of a model bias job definition.
    **/
    describeModelBiasJobDefinition(req: operations.DescribeModelBiasJobDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeModelBiasJobDefinitionResponse>;
    /**
     * describeModelExplainabilityJobDefinition - Returns a description of a model explainability job definition.
    **/
    describeModelExplainabilityJobDefinition(req: operations.DescribeModelExplainabilityJobDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeModelExplainabilityJobDefinitionResponse>;
    /**
     * describeModelPackage - <p>Returns a description of the specified model package, which is used to create Amazon SageMaker models or list them on Amazon Web Services Marketplace.</p> <p>To create models in Amazon SageMaker, buyers can subscribe to model packages listed on Amazon Web Services Marketplace.</p>
    **/
    describeModelPackage(req: operations.DescribeModelPackageRequest, config?: AxiosRequestConfig): Promise<operations.DescribeModelPackageResponse>;
    /**
     * describeModelPackageGroup - Gets a description for the specified model group.
    **/
    describeModelPackageGroup(req: operations.DescribeModelPackageGroupRequest, config?: AxiosRequestConfig): Promise<operations.DescribeModelPackageGroupResponse>;
    /**
     * describeModelQualityJobDefinition - Returns a description of a model quality job definition.
    **/
    describeModelQualityJobDefinition(req: operations.DescribeModelQualityJobDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeModelQualityJobDefinitionResponse>;
    /**
     * describeMonitoringSchedule - Describes the schedule for a monitoring job.
    **/
    describeMonitoringSchedule(req: operations.DescribeMonitoringScheduleRequest, config?: AxiosRequestConfig): Promise<operations.DescribeMonitoringScheduleResponse>;
    /**
     * describeNotebookInstance - Returns information about a notebook instance.
    **/
    describeNotebookInstance(req: operations.DescribeNotebookInstanceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeNotebookInstanceResponse>;
    /**
     * describeNotebookInstanceLifecycleConfig - <p>Returns a description of a notebook instance lifecycle configuration.</p> <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional) Customize a Notebook Instance</a>.</p>
    **/
    describeNotebookInstanceLifecycleConfig(req: operations.DescribeNotebookInstanceLifecycleConfigRequest, config?: AxiosRequestConfig): Promise<operations.DescribeNotebookInstanceLifecycleConfigResponse>;
    /**
     * describePipeline - Describes the details of a pipeline.
    **/
    describePipeline(req: operations.DescribePipelineRequest, config?: AxiosRequestConfig): Promise<operations.DescribePipelineResponse>;
    /**
     * describePipelineDefinitionForExecution - Describes the details of an execution's pipeline definition.
    **/
    describePipelineDefinitionForExecution(req: operations.DescribePipelineDefinitionForExecutionRequest, config?: AxiosRequestConfig): Promise<operations.DescribePipelineDefinitionForExecutionResponse>;
    /**
     * describePipelineExecution - Describes the details of a pipeline execution.
    **/
    describePipelineExecution(req: operations.DescribePipelineExecutionRequest, config?: AxiosRequestConfig): Promise<operations.DescribePipelineExecutionResponse>;
    /**
     * describeProcessingJob - Returns a description of a processing job.
    **/
    describeProcessingJob(req: operations.DescribeProcessingJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeProcessingJobResponse>;
    /**
     * describeProject - Describes the details of a project.
    **/
    describeProject(req: operations.DescribeProjectRequest, config?: AxiosRequestConfig): Promise<operations.DescribeProjectResponse>;
    /**
     * describeStudioLifecycleConfig - Describes the Studio Lifecycle Configuration.
    **/
    describeStudioLifecycleConfig(req: operations.DescribeStudioLifecycleConfigRequest, config?: AxiosRequestConfig): Promise<operations.DescribeStudioLifecycleConfigResponse>;
    /**
     * describeSubscribedWorkteam - Gets information about a work team provided by a vendor. It returns details about the subscription with a vendor in the Amazon Web Services Marketplace.
    **/
    describeSubscribedWorkteam(req: operations.DescribeSubscribedWorkteamRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSubscribedWorkteamResponse>;
    /**
     * describeTrainingJob - <p>Returns information about a training job. </p> <p>Some of the attributes below only appear if the training job successfully starts. If the training job fails, <code>TrainingJobStatus</code> is <code>Failed</code> and, depending on the <code>FailureReason</code>, attributes like <code>TrainingStartTime</code>, <code>TrainingTimeInSeconds</code>, <code>TrainingEndTime</code>, and <code>BillableTimeInSeconds</code> may not be present in the response.</p>
    **/
    describeTrainingJob(req: operations.DescribeTrainingJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTrainingJobResponse>;
    /**
     * describeTransformJob - Returns information about a transform job.
    **/
    describeTransformJob(req: operations.DescribeTransformJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTransformJobResponse>;
    /**
     * describeTrial - Provides a list of a trial's properties.
    **/
    describeTrial(req: operations.DescribeTrialRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTrialResponse>;
    /**
     * describeTrialComponent - Provides a list of a trials component's properties.
    **/
    describeTrialComponent(req: operations.DescribeTrialComponentRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTrialComponentResponse>;
    /**
     * describeUserProfile - Describes a user profile. For more information, see <code>CreateUserProfile</code>.
    **/
    describeUserProfile(req: operations.DescribeUserProfileRequest, config?: AxiosRequestConfig): Promise<operations.DescribeUserProfileResponse>;
    /**
     * describeWorkforce - <p>Lists private workforce information, including workforce name, Amazon Resource Name (ARN), and, if applicable, allowed IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Allowable IP address ranges are the IP addresses that workers can use to access tasks. </p> <important> <p>This operation applies only to private workforces.</p> </important>
    **/
    describeWorkforce(req: operations.DescribeWorkforceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorkforceResponse>;
    /**
     * describeWorkteam - Gets information about a specific work team. You can see information such as the create date, the last updated date, membership information, and the work team's Amazon Resource Name (ARN).
    **/
    describeWorkteam(req: operations.DescribeWorkteamRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorkteamResponse>;
    /**
     * disableSagemakerServicecatalogPortfolio - Disables using Service Catalog in SageMaker. Service Catalog is used to create SageMaker projects.
    **/
    disableSagemakerServicecatalogPortfolio(req: operations.DisableSagemakerServicecatalogPortfolioRequest, config?: AxiosRequestConfig): Promise<operations.DisableSagemakerServicecatalogPortfolioResponse>;
    /**
     * disassociateTrialComponent - <p>Disassociates a trial component from a trial. This doesn't effect other trials the component is associated with. Before you can delete a component, you must disassociate the component from all trials it is associated with. To associate a trial component with a trial, call the <a>AssociateTrialComponent</a> API.</p> <p>To get a list of the trials a component is associated with, use the <a>Search</a> API. Specify <code>ExperimentTrialComponent</code> for the <code>Resource</code> parameter. The list appears in the response under <code>Results.TrialComponent.Parents</code>.</p>
    **/
    disassociateTrialComponent(req: operations.DisassociateTrialComponentRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateTrialComponentResponse>;
    /**
     * enableSagemakerServicecatalogPortfolio - Enables using Service Catalog in SageMaker. Service Catalog is used to create SageMaker projects.
    **/
    enableSagemakerServicecatalogPortfolio(req: operations.EnableSagemakerServicecatalogPortfolioRequest, config?: AxiosRequestConfig): Promise<operations.EnableSagemakerServicecatalogPortfolioResponse>;
    /**
     * getDeviceFleetReport - Describes a fleet.
    **/
    getDeviceFleetReport(req: operations.GetDeviceFleetReportRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceFleetReportResponse>;
    /**
     * getModelPackageGroupPolicy - Gets a resource policy that manages access for a model group. For information about resource policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html">Identity-based policies and resource-based policies</a> in the <i>Amazon Web Services Identity and Access Management User Guide.</i>.
    **/
    getModelPackageGroupPolicy(req: operations.GetModelPackageGroupPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetModelPackageGroupPolicyResponse>;
    /**
     * getSagemakerServicecatalogPortfolioStatus - Gets the status of Service Catalog in SageMaker. Service Catalog is used to create SageMaker projects.
    **/
    getSagemakerServicecatalogPortfolioStatus(req: operations.GetSagemakerServicecatalogPortfolioStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetSagemakerServicecatalogPortfolioStatusResponse>;
    /**
     * getSearchSuggestions - An auto-complete API for the search functionality in the Amazon SageMaker console. It returns suggestions of possible matches for the property name to use in <code>Search</code> queries. Provides suggestions for <code>HyperParameters</code>, <code>Tags</code>, and <code>Metrics</code>.
    **/
    getSearchSuggestions(req: operations.GetSearchSuggestionsRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchSuggestionsResponse>;
    /**
     * listActions - Lists the actions in your account and their properties.
    **/
    listActions(req: operations.ListActionsRequest, config?: AxiosRequestConfig): Promise<operations.ListActionsResponse>;
    /**
     * listAlgorithms - Lists the machine learning algorithms that have been created.
    **/
    listAlgorithms(req: operations.ListAlgorithmsRequest, config?: AxiosRequestConfig): Promise<operations.ListAlgorithmsResponse>;
    /**
     * listAppImageConfigs - Lists the AppImageConfigs in your account and their properties. The list can be filtered by creation time or modified time, and whether the AppImageConfig name contains a specified string.
    **/
    listAppImageConfigs(req: operations.ListAppImageConfigsRequest, config?: AxiosRequestConfig): Promise<operations.ListAppImageConfigsResponse>;
    /**
     * listApps - Lists apps.
    **/
    listApps(req: operations.ListAppsRequest, config?: AxiosRequestConfig): Promise<operations.ListAppsResponse>;
    /**
     * listArtifacts - Lists the artifacts in your account and their properties.
    **/
    listArtifacts(req: operations.ListArtifactsRequest, config?: AxiosRequestConfig): Promise<operations.ListArtifactsResponse>;
    /**
     * listAssociations - Lists the associations in your account and their properties.
    **/
    listAssociations(req: operations.ListAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.ListAssociationsResponse>;
    /**
     * listAutoMlJobs - Request a list of jobs.
    **/
    listAutoMlJobs(req: operations.ListAutoMlJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListAutoMlJobsResponse>;
    /**
     * listCandidatesForAutoMlJob - List the candidates created for the job.
    **/
    listCandidatesForAutoMlJob(req: operations.ListCandidatesForAutoMlJobRequest, config?: AxiosRequestConfig): Promise<operations.ListCandidatesForAutoMlJobResponse>;
    /**
     * listCodeRepositories - Gets a list of the Git repositories in your account.
    **/
    listCodeRepositories(req: operations.ListCodeRepositoriesRequest, config?: AxiosRequestConfig): Promise<operations.ListCodeRepositoriesResponse>;
    /**
     * listCompilationJobs - <p>Lists model compilation jobs that satisfy various filters.</p> <p>To create a model compilation job, use <a>CreateCompilationJob</a>. To get information about a particular model compilation job you have created, use <a>DescribeCompilationJob</a>.</p>
    **/
    listCompilationJobs(req: operations.ListCompilationJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListCompilationJobsResponse>;
    /**
     * listContexts - Lists the contexts in your account and their properties.
    **/
    listContexts(req: operations.ListContextsRequest, config?: AxiosRequestConfig): Promise<operations.ListContextsResponse>;
    /**
     * listDataQualityJobDefinitions - Lists the data quality job definitions in your account.
    **/
    listDataQualityJobDefinitions(req: operations.ListDataQualityJobDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.ListDataQualityJobDefinitionsResponse>;
    /**
     * listDeviceFleets - Returns a list of devices in the fleet.
    **/
    listDeviceFleets(req: operations.ListDeviceFleetsRequest, config?: AxiosRequestConfig): Promise<operations.ListDeviceFleetsResponse>;
    /**
     * listDevices - A list of devices.
    **/
    listDevices(req: operations.ListDevicesRequest, config?: AxiosRequestConfig): Promise<operations.ListDevicesResponse>;
    /**
     * listDomains - Lists the domains.
    **/
    listDomains(req: operations.ListDomainsRequest, config?: AxiosRequestConfig): Promise<operations.ListDomainsResponse>;
    /**
     * listEdgePackagingJobs - Returns a list of edge packaging jobs.
    **/
    listEdgePackagingJobs(req: operations.ListEdgePackagingJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListEdgePackagingJobsResponse>;
    /**
     * listEndpointConfigs - Lists endpoint configurations.
    **/
    listEndpointConfigs(req: operations.ListEndpointConfigsRequest, config?: AxiosRequestConfig): Promise<operations.ListEndpointConfigsResponse>;
    /**
     * listEndpoints - Lists endpoints.
    **/
    listEndpoints(req: operations.ListEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.ListEndpointsResponse>;
    /**
     * listExperiments - Lists all the experiments in your account. The list can be filtered to show only experiments that were created in a specific time range. The list can be sorted by experiment name or creation time.
    **/
    listExperiments(req: operations.ListExperimentsRequest, config?: AxiosRequestConfig): Promise<operations.ListExperimentsResponse>;
    /**
     * listFeatureGroups - List <code>FeatureGroup</code>s based on given filter and order.
    **/
    listFeatureGroups(req: operations.ListFeatureGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListFeatureGroupsResponse>;
    /**
     * listFlowDefinitions - Returns information about the flow definitions in your account.
    **/
    listFlowDefinitions(req: operations.ListFlowDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.ListFlowDefinitionsResponse>;
    /**
     * listHumanTaskUis - Returns information about the human task user interfaces in your account.
    **/
    listHumanTaskUis(req: operations.ListHumanTaskUisRequest, config?: AxiosRequestConfig): Promise<operations.ListHumanTaskUisResponse>;
    /**
     * listHyperParameterTuningJobs - Gets a list of <a>HyperParameterTuningJobSummary</a> objects that describe the hyperparameter tuning jobs launched in your account.
    **/
    listHyperParameterTuningJobs(req: operations.ListHyperParameterTuningJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListHyperParameterTuningJobsResponse>;
    /**
     * listImageVersions - Lists the versions of a specified image and their properties. The list can be filtered by creation time or modified time.
    **/
    listImageVersions(req: operations.ListImageVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListImageVersionsResponse>;
    /**
     * listImages - Lists the images in your account and their properties. The list can be filtered by creation time or modified time, and whether the image name contains a specified string.
    **/
    listImages(req: operations.ListImagesRequest, config?: AxiosRequestConfig): Promise<operations.ListImagesResponse>;
    /**
     * listLabelingJobs - Gets a list of labeling jobs.
    **/
    listLabelingJobs(req: operations.ListLabelingJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListLabelingJobsResponse>;
    /**
     * listLabelingJobsForWorkteam - Gets a list of labeling jobs assigned to a specified work team.
    **/
    listLabelingJobsForWorkteam(req: operations.ListLabelingJobsForWorkteamRequest, config?: AxiosRequestConfig): Promise<operations.ListLabelingJobsForWorkteamResponse>;
    /**
     * listModelBiasJobDefinitions - Lists model bias jobs definitions that satisfy various filters.
    **/
    listModelBiasJobDefinitions(req: operations.ListModelBiasJobDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.ListModelBiasJobDefinitionsResponse>;
    /**
     * listModelExplainabilityJobDefinitions - Lists model explainability job definitions that satisfy various filters.
    **/
    listModelExplainabilityJobDefinitions(req: operations.ListModelExplainabilityJobDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.ListModelExplainabilityJobDefinitionsResponse>;
    /**
     * listModelPackageGroups - Gets a list of the model groups in your Amazon Web Services account.
    **/
    listModelPackageGroups(req: operations.ListModelPackageGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListModelPackageGroupsResponse>;
    /**
     * listModelPackages - Lists the model packages that have been created.
    **/
    listModelPackages(req: operations.ListModelPackagesRequest, config?: AxiosRequestConfig): Promise<operations.ListModelPackagesResponse>;
    /**
     * listModelQualityJobDefinitions - Gets a list of model quality monitoring job definitions in your account.
    **/
    listModelQualityJobDefinitions(req: operations.ListModelQualityJobDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.ListModelQualityJobDefinitionsResponse>;
    /**
     * listModels - Lists models created with the <code>CreateModel</code> API.
    **/
    listModels(req: operations.ListModelsRequest, config?: AxiosRequestConfig): Promise<operations.ListModelsResponse>;
    /**
     * listMonitoringExecutions - Returns list of all monitoring job executions.
    **/
    listMonitoringExecutions(req: operations.ListMonitoringExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.ListMonitoringExecutionsResponse>;
    /**
     * listMonitoringSchedules - Returns list of all monitoring schedules.
    **/
    listMonitoringSchedules(req: operations.ListMonitoringSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.ListMonitoringSchedulesResponse>;
    /**
     * listNotebookInstanceLifecycleConfigs - Lists notebook instance lifestyle configurations created with the <a>CreateNotebookInstanceLifecycleConfig</a> API.
    **/
    listNotebookInstanceLifecycleConfigs(req: operations.ListNotebookInstanceLifecycleConfigsRequest, config?: AxiosRequestConfig): Promise<operations.ListNotebookInstanceLifecycleConfigsResponse>;
    /**
     * listNotebookInstances - Returns a list of the Amazon SageMaker notebook instances in the requester's account in an Amazon Web Services Region.
    **/
    listNotebookInstances(req: operations.ListNotebookInstancesRequest, config?: AxiosRequestConfig): Promise<operations.ListNotebookInstancesResponse>;
    /**
     * listPipelineExecutionSteps - Gets a list of <code>PipeLineExecutionStep</code> objects.
    **/
    listPipelineExecutionSteps(req: operations.ListPipelineExecutionStepsRequest, config?: AxiosRequestConfig): Promise<operations.ListPipelineExecutionStepsResponse>;
    /**
     * listPipelineExecutions - Gets a list of the pipeline executions.
    **/
    listPipelineExecutions(req: operations.ListPipelineExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.ListPipelineExecutionsResponse>;
    /**
     * listPipelineParametersForExecution - Gets a list of parameters for a pipeline execution.
    **/
    listPipelineParametersForExecution(req: operations.ListPipelineParametersForExecutionRequest, config?: AxiosRequestConfig): Promise<operations.ListPipelineParametersForExecutionResponse>;
    /**
     * listPipelines - Gets a list of pipelines.
    **/
    listPipelines(req: operations.ListPipelinesRequest, config?: AxiosRequestConfig): Promise<operations.ListPipelinesResponse>;
    /**
     * listProcessingJobs - Lists processing jobs that satisfy various filters.
    **/
    listProcessingJobs(req: operations.ListProcessingJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListProcessingJobsResponse>;
    /**
     * listProjects - Gets a list of the projects in an Amazon Web Services account.
    **/
    listProjects(req: operations.ListProjectsRequest, config?: AxiosRequestConfig): Promise<operations.ListProjectsResponse>;
    /**
     * listStudioLifecycleConfigs - Lists the Studio Lifecycle Configurations in your Amazon Web Services Account.
    **/
    listStudioLifecycleConfigs(req: operations.ListStudioLifecycleConfigsRequest, config?: AxiosRequestConfig): Promise<operations.ListStudioLifecycleConfigsResponse>;
    /**
     * listSubscribedWorkteams - Gets a list of the work teams that you are subscribed to in the Amazon Web Services Marketplace. The list may be empty if no work team satisfies the filter specified in the <code>NameContains</code> parameter.
    **/
    listSubscribedWorkteams(req: operations.ListSubscribedWorkteamsRequest, config?: AxiosRequestConfig): Promise<operations.ListSubscribedWorkteamsResponse>;
    /**
     * listTags - Returns the tags for the specified Amazon SageMaker resource.
    **/
    listTags(req: operations.ListTagsRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsResponse>;
    /**
     * listTrainingJobs - <p>Lists training jobs.</p> <note> <p>When <code>StatusEquals</code> and <code>MaxResults</code> are set at the same time, the <code>MaxResults</code> number of training jobs are first retrieved ignoring the <code>StatusEquals</code> parameter and then they are filtered by the <code>StatusEquals</code> parameter, which is returned as a response.</p> <p>For example, if <code>ListTrainingJobs</code> is invoked with the following parameters:</p> <p> <code>{ ... MaxResults: 100, StatusEquals: InProgress ... }</code> </p> <p>First, 100 trainings jobs with any status, including those other than <code>InProgress</code>, are selected (sorted according to the creation time, from the most current to the oldest). Next, those with a status of <code>InProgress</code> are returned.</p> <p>You can quickly test the API using the following Amazon Web Services CLI code.</p> <p> <code>aws sagemaker list-training-jobs --max-results 100 --status-equals InProgress</code> </p> </note>
    **/
    listTrainingJobs(req: operations.ListTrainingJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListTrainingJobsResponse>;
    /**
     * listTrainingJobsForHyperParameterTuningJob - Gets a list of <a>TrainingJobSummary</a> objects that describe the training jobs that a hyperparameter tuning job launched.
    **/
    listTrainingJobsForHyperParameterTuningJob(req: operations.ListTrainingJobsForHyperParameterTuningJobRequest, config?: AxiosRequestConfig): Promise<operations.ListTrainingJobsForHyperParameterTuningJobResponse>;
    /**
     * listTransformJobs - Lists transform jobs.
    **/
    listTransformJobs(req: operations.ListTransformJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListTransformJobsResponse>;
    /**
     * listTrialComponents - <p>Lists the trial components in your account. You can sort the list by trial component name or creation time. You can filter the list to show only components that were created in a specific time range. You can also filter on one of the following:</p> <ul> <li> <p> <code>ExperimentName</code> </p> </li> <li> <p> <code>SourceArn</code> </p> </li> <li> <p> <code>TrialName</code> </p> </li> </ul>
    **/
    listTrialComponents(req: operations.ListTrialComponentsRequest, config?: AxiosRequestConfig): Promise<operations.ListTrialComponentsResponse>;
    /**
     * listTrials - Lists the trials in your account. Specify an experiment name to limit the list to the trials that are part of that experiment. Specify a trial component name to limit the list to the trials that associated with that trial component. The list can be filtered to show only trials that were created in a specific time range. The list can be sorted by trial name or creation time.
    **/
    listTrials(req: operations.ListTrialsRequest, config?: AxiosRequestConfig): Promise<operations.ListTrialsResponse>;
    /**
     * listUserProfiles - Lists user profiles.
    **/
    listUserProfiles(req: operations.ListUserProfilesRequest, config?: AxiosRequestConfig): Promise<operations.ListUserProfilesResponse>;
    /**
     * listWorkforces - Use this operation to list all private and vendor workforces in an Amazon Web Services Region. Note that you can only have one private workforce per Amazon Web Services Region.
    **/
    listWorkforces(req: operations.ListWorkforcesRequest, config?: AxiosRequestConfig): Promise<operations.ListWorkforcesResponse>;
    /**
     * listWorkteams - Gets a list of private work teams that you have defined in a region. The list may be empty if no work team satisfies the filter specified in the <code>NameContains</code> parameter.
    **/
    listWorkteams(req: operations.ListWorkteamsRequest, config?: AxiosRequestConfig): Promise<operations.ListWorkteamsResponse>;
    /**
     * putModelPackageGroupPolicy - Adds a resouce policy to control access to a model group. For information about resoure policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html">Identity-based policies and resource-based policies</a> in the <i>Amazon Web Services Identity and Access Management User Guide.</i>.
    **/
    putModelPackageGroupPolicy(req: operations.PutModelPackageGroupPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutModelPackageGroupPolicyResponse>;
    /**
     * registerDevices - Register devices.
    **/
    registerDevices(req: operations.RegisterDevicesRequest, config?: AxiosRequestConfig): Promise<operations.RegisterDevicesResponse>;
    /**
     * renderUiTemplate - Renders the UI template so that you can preview the worker's experience.
    **/
    renderUiTemplate(req: operations.RenderUiTemplateRequest, config?: AxiosRequestConfig): Promise<operations.RenderUiTemplateResponse>;
    /**
     * retryPipelineExecution - Retry the execution of the pipeline.
    **/
    retryPipelineExecution(req: operations.RetryPipelineExecutionRequest, config?: AxiosRequestConfig): Promise<operations.RetryPipelineExecutionResponse>;
    /**
     * search - <p>Finds Amazon SageMaker resources that match a search query. Matching resources are returned as a list of <code>SearchRecord</code> objects in the response. You can sort the search results by any resource property in a ascending or descending order.</p> <p>You can query against the following value types: numeric, text, Boolean, and timestamp.</p>
    **/
    search(req: operations.SearchRequest, config?: AxiosRequestConfig): Promise<operations.SearchResponse>;
    /**
     * sendPipelineExecutionStepFailure - Notifies the pipeline that the execution of a callback step failed, along with a message describing why. When a callback step is run, the pipeline generates a callback token and includes the token in a message sent to Amazon Simple Queue Service (Amazon SQS).
    **/
    sendPipelineExecutionStepFailure(req: operations.SendPipelineExecutionStepFailureRequest, config?: AxiosRequestConfig): Promise<operations.SendPipelineExecutionStepFailureResponse>;
    /**
     * sendPipelineExecutionStepSuccess - Notifies the pipeline that the execution of a callback step succeeded and provides a list of the step's output parameters. When a callback step is run, the pipeline generates a callback token and includes the token in a message sent to Amazon Simple Queue Service (Amazon SQS).
    **/
    sendPipelineExecutionStepSuccess(req: operations.SendPipelineExecutionStepSuccessRequest, config?: AxiosRequestConfig): Promise<operations.SendPipelineExecutionStepSuccessResponse>;
    /**
     * startMonitoringSchedule - <p>Starts a previously stopped monitoring schedule.</p> <note> <p>By default, when you successfully create a new schedule, the status of a monitoring schedule is <code>scheduled</code>.</p> </note>
    **/
    startMonitoringSchedule(req: operations.StartMonitoringScheduleRequest, config?: AxiosRequestConfig): Promise<operations.StartMonitoringScheduleResponse>;
    /**
     * startNotebookInstance - Launches an ML compute instance with the latest version of the libraries and attaches your ML storage volume. After configuring the notebook instance, Amazon SageMaker sets the notebook instance status to <code>InService</code>. A notebook instance's status must be <code>InService</code> before you can connect to your Jupyter notebook.
    **/
    startNotebookInstance(req: operations.StartNotebookInstanceRequest, config?: AxiosRequestConfig): Promise<operations.StartNotebookInstanceResponse>;
    /**
     * startPipelineExecution - Starts a pipeline execution.
    **/
    startPipelineExecution(req: operations.StartPipelineExecutionRequest, config?: AxiosRequestConfig): Promise<operations.StartPipelineExecutionResponse>;
    /**
     * stopAutoMlJob - A method for forcing the termination of a running job.
    **/
    stopAutoMlJob(req: operations.StopAutoMlJobRequest, config?: AxiosRequestConfig): Promise<operations.StopAutoMlJobResponse>;
    /**
     * stopCompilationJob - <p>Stops a model compilation job.</p> <p> To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal. This gracefully shuts the job down. If the job hasn't stopped, it sends the SIGKILL signal.</p> <p>When it receives a <code>StopCompilationJob</code> request, Amazon SageMaker changes the <a>CompilationJobSummary$CompilationJobStatus</a> of the job to <code>Stopping</code>. After Amazon SageMaker stops the job, it sets the <a>CompilationJobSummary$CompilationJobStatus</a> to <code>Stopped</code>. </p>
    **/
    stopCompilationJob(req: operations.StopCompilationJobRequest, config?: AxiosRequestConfig): Promise<operations.StopCompilationJobResponse>;
    /**
     * stopEdgePackagingJob - Request to stop an edge packaging job.
    **/
    stopEdgePackagingJob(req: operations.StopEdgePackagingJobRequest, config?: AxiosRequestConfig): Promise<operations.StopEdgePackagingJobResponse>;
    /**
     * stopHyperParameterTuningJob - <p>Stops a running hyperparameter tuning job and all running training jobs that the tuning job launched.</p> <p>All model artifacts output from the training jobs are stored in Amazon Simple Storage Service (Amazon S3). All data that the training jobs write to Amazon CloudWatch Logs are still available in CloudWatch. After the tuning job moves to the <code>Stopped</code> state, it releases all reserved resources for the tuning job.</p>
    **/
    stopHyperParameterTuningJob(req: operations.StopHyperParameterTuningJobRequest, config?: AxiosRequestConfig): Promise<operations.StopHyperParameterTuningJobResponse>;
    /**
     * stopLabelingJob - Stops a running labeling job. A job that is stopped cannot be restarted. Any results obtained before the job is stopped are placed in the Amazon S3 output bucket.
    **/
    stopLabelingJob(req: operations.StopLabelingJobRequest, config?: AxiosRequestConfig): Promise<operations.StopLabelingJobResponse>;
    /**
     * stopMonitoringSchedule - Stops a previously started monitoring schedule.
    **/
    stopMonitoringSchedule(req: operations.StopMonitoringScheduleRequest, config?: AxiosRequestConfig): Promise<operations.StopMonitoringScheduleResponse>;
    /**
     * stopNotebookInstance - <p>Terminates the ML compute instance. Before terminating the instance, Amazon SageMaker disconnects the ML storage volume from it. Amazon SageMaker preserves the ML storage volume. Amazon SageMaker stops charging you for the ML compute instance when you call <code>StopNotebookInstance</code>.</p> <p>To access data on the ML storage volume for a notebook instance that has been terminated, call the <code>StartNotebookInstance</code> API. <code>StartNotebookInstance</code> launches another ML compute instance, configures it, and attaches the preserved ML storage volume so you can continue your work. </p>
    **/
    stopNotebookInstance(req: operations.StopNotebookInstanceRequest, config?: AxiosRequestConfig): Promise<operations.StopNotebookInstanceResponse>;
    /**
     * stopPipelineExecution - <p>Stops a pipeline execution.</p> <p> <b>Callback Step</b> </p> <p>A pipeline execution won't stop while a callback step is running. When you call <code>StopPipelineExecution</code> on a pipeline execution with a running callback step, SageMaker Pipelines sends an additional Amazon SQS message to the specified SQS queue. The body of the SQS message contains a "Status" field which is set to "Stopping".</p> <p>You should add logic to your Amazon SQS message consumer to take any needed action (for example, resource cleanup) upon receipt of the message followed by a call to <code>SendPipelineExecutionStepSuccess</code> or <code>SendPipelineExecutionStepFailure</code>.</p> <p>Only when SageMaker Pipelines receives one of these calls will it stop the pipeline execution.</p> <p> <b>Lambda Step</b> </p> <p>A pipeline execution can't be stopped while a lambda step is running because the Lambda function invoked by the lambda step can't be stopped. If you attempt to stop the execution while the Lambda function is running, the pipeline waits for the Lambda function to finish or until the timeout is hit, whichever occurs first, and then stops. If the Lambda function finishes, the pipeline execution status is <code>Stopped</code>. If the timeout is hit the pipeline execution status is <code>Failed</code>.</p>
    **/
    stopPipelineExecution(req: operations.StopPipelineExecutionRequest, config?: AxiosRequestConfig): Promise<operations.StopPipelineExecutionResponse>;
    /**
     * stopProcessingJob - Stops a processing job.
    **/
    stopProcessingJob(req: operations.StopProcessingJobRequest, config?: AxiosRequestConfig): Promise<operations.StopProcessingJobResponse>;
    /**
     * stopTrainingJob - <p>Stops a training job. To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms might use this 120-second window to save the model artifacts, so the results of the training is not lost. </p> <p>When it receives a <code>StopTrainingJob</code> request, Amazon SageMaker changes the status of the job to <code>Stopping</code>. After Amazon SageMaker stops the job, it sets the status to <code>Stopped</code>.</p>
    **/
    stopTrainingJob(req: operations.StopTrainingJobRequest, config?: AxiosRequestConfig): Promise<operations.StopTrainingJobResponse>;
    /**
     * stopTransformJob - <p>Stops a transform job.</p> <p>When Amazon SageMaker receives a <code>StopTransformJob</code> request, the status of the job changes to <code>Stopping</code>. After Amazon SageMaker stops the job, the status is set to <code>Stopped</code>. When you stop a transform job before it is completed, Amazon SageMaker doesn't store the job's output in Amazon S3.</p>
    **/
    stopTransformJob(req: operations.StopTransformJobRequest, config?: AxiosRequestConfig): Promise<operations.StopTransformJobResponse>;
    /**
     * updateAction - Updates an action.
    **/
    updateAction(req: operations.UpdateActionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateActionResponse>;
    /**
     * updateAppImageConfig - Updates the properties of an AppImageConfig.
    **/
    updateAppImageConfig(req: operations.UpdateAppImageConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAppImageConfigResponse>;
    /**
     * updateArtifact - Updates an artifact.
    **/
    updateArtifact(req: operations.UpdateArtifactRequest, config?: AxiosRequestConfig): Promise<operations.UpdateArtifactResponse>;
    /**
     * updateCodeRepository - Updates the specified Git repository with the specified values.
    **/
    updateCodeRepository(req: operations.UpdateCodeRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCodeRepositoryResponse>;
    /**
     * updateContext - Updates a context.
    **/
    updateContext(req: operations.UpdateContextRequest, config?: AxiosRequestConfig): Promise<operations.UpdateContextResponse>;
    /**
     * updateDeviceFleet - Updates a fleet of devices.
    **/
    updateDeviceFleet(req: operations.UpdateDeviceFleetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceFleetResponse>;
    /**
     * updateDevices - Updates one or more devices in a fleet.
    **/
    updateDevices(req: operations.UpdateDevicesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDevicesResponse>;
    /**
     * updateDomain - Updates the default settings for new user profiles in the domain.
    **/
    updateDomain(req: operations.UpdateDomainRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDomainResponse>;
    /**
     * updateEndpoint - <p>Deploys the new <code>EndpointConfig</code> specified in the request, switches to using newly created endpoint, and then deletes resources provisioned for the endpoint using the previous <code>EndpointConfig</code> (there is no availability loss). </p> <p>When Amazon SageMaker receives the request, it sets the endpoint status to <code>Updating</code>. After updating the endpoint, it sets the status to <code>InService</code>. To check the status of an endpoint, use the <a>DescribeEndpoint</a> API. </p> <note> <p>You must not delete an <code>EndpointConfig</code> in use by an endpoint that is live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code> operations are being performed on the endpoint. To update an endpoint, you must create a new <code>EndpointConfig</code>.</p> <p>If you delete the <code>EndpointConfig</code> of an endpoint that is active or being created or updated you may lose visibility into the instance type the endpoint is using. The endpoint must be deleted in order to stop incurring charges.</p> </note>
    **/
    updateEndpoint(req: operations.UpdateEndpointRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEndpointResponse>;
    /**
     * updateEndpointWeightsAndCapacities - Updates variant weight of one or more variants associated with an existing endpoint, or capacity of one variant associated with an existing endpoint. When it receives the request, Amazon SageMaker sets the endpoint status to <code>Updating</code>. After updating the endpoint, it sets the status to <code>InService</code>. To check the status of an endpoint, use the <a>DescribeEndpoint</a> API.
    **/
    updateEndpointWeightsAndCapacities(req: operations.UpdateEndpointWeightsAndCapacitiesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEndpointWeightsAndCapacitiesResponse>;
    /**
     * updateExperiment - Adds, updates, or removes the description of an experiment. Updates the display name of an experiment.
    **/
    updateExperiment(req: operations.UpdateExperimentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateExperimentResponse>;
    /**
     * updateImage - Updates the properties of a SageMaker image. To change the image's tags, use the <a>AddTags</a> and <a>DeleteTags</a> APIs.
    **/
    updateImage(req: operations.UpdateImageRequest, config?: AxiosRequestConfig): Promise<operations.UpdateImageResponse>;
    /**
     * updateModelPackage - Updates a versioned model.
    **/
    updateModelPackage(req: operations.UpdateModelPackageRequest, config?: AxiosRequestConfig): Promise<operations.UpdateModelPackageResponse>;
    /**
     * updateMonitoringSchedule - Updates a previously created schedule.
    **/
    updateMonitoringSchedule(req: operations.UpdateMonitoringScheduleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMonitoringScheduleResponse>;
    /**
     * updateNotebookInstance - Updates a notebook instance. NotebookInstance updates include upgrading or downgrading the ML compute instance used for your notebook instance to accommodate changes in your workload requirements.
    **/
    updateNotebookInstance(req: operations.UpdateNotebookInstanceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNotebookInstanceResponse>;
    /**
     * updateNotebookInstanceLifecycleConfig - Updates a notebook instance lifecycle configuration created with the <a>CreateNotebookInstanceLifecycleConfig</a> API.
    **/
    updateNotebookInstanceLifecycleConfig(req: operations.UpdateNotebookInstanceLifecycleConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNotebookInstanceLifecycleConfigResponse>;
    /**
     * updatePipeline - Updates a pipeline.
    **/
    updatePipeline(req: operations.UpdatePipelineRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePipelineResponse>;
    /**
     * updatePipelineExecution - Updates a pipeline execution.
    **/
    updatePipelineExecution(req: operations.UpdatePipelineExecutionRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePipelineExecutionResponse>;
    /**
     * updateTrainingJob - Update a model training job to request a new Debugger profiling configuration.
    **/
    updateTrainingJob(req: operations.UpdateTrainingJobRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTrainingJobResponse>;
    /**
     * updateTrial - Updates the display name of a trial.
    **/
    updateTrial(req: operations.UpdateTrialRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTrialResponse>;
    /**
     * updateTrialComponent - Updates one or more properties of a trial component.
    **/
    updateTrialComponent(req: operations.UpdateTrialComponentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTrialComponentResponse>;
    /**
     * updateUserProfile - Updates a user profile.
    **/
    updateUserProfile(req: operations.UpdateUserProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserProfileResponse>;
    /**
     * updateWorkforce - <p>Use this operation to update your workforce. You can use this operation to require that workers use specific IP addresses to work on tasks and to update your OpenID Connect (OIDC) Identity Provider (IdP) workforce configuration.</p> <p> Use <code>SourceIpConfig</code> to restrict worker access to tasks to a specific range of IP addresses. You specify allowed IP addresses by creating a list of up to ten <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>. By default, a workforce isn't restricted to specific IP addresses. If you specify a range of IP addresses, workers who attempt to access tasks using any IP address outside the specified range are denied and get a <code>Not Found</code> error message on the worker portal.</p> <p>Use <code>OidcConfig</code> to update the configuration of a workforce created using your own OIDC IdP. </p> <important> <p>You can only update your OIDC IdP configuration when there are no work teams associated with your workforce. You can delete work teams using the operation.</p> </important> <p>After restricting access to a range of IP addresses or updating your OIDC IdP configuration with this operation, you can view details about your update workforce using the operation.</p> <important> <p>This operation only applies to private workforces.</p> </important>
    **/
    updateWorkforce(req: operations.UpdateWorkforceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkforceResponse>;
    /**
     * updateWorkteam - Updates an existing work team with new member definitions or description.
    **/
    updateWorkteam(req: operations.UpdateWorkteamRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkteamResponse>;
}
export {};
