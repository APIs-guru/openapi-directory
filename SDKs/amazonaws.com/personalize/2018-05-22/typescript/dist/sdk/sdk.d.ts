import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://personalize.{region}.amazonaws.com", "https://personalize.{region}.amazonaws.com", "http://personalize.{region}.amazonaws.com.cn", "https://personalize.{region}.amazonaws.com.cn"];
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
     * createBatchInferenceJob - Creates a batch inference job. The operation can handle up to 50 million records and the input file must be in JSON format. For more information, see <a>recommendations-batch</a>.
    **/
    createBatchInferenceJob(req: operations.CreateBatchInferenceJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateBatchInferenceJobResponse>;
    /**
     * createCampaign - <p>Creates a campaign by deploying a solution version. When a client calls the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> and <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetPersonalizedRanking.html">GetPersonalizedRanking</a> APIs, a campaign is specified in the request.</p> <p> <b>Minimum Provisioned TPS and Auto-Scaling</b> </p> <p>A transaction is a single <code>GetRecommendations</code> or <code>GetPersonalizedRanking</code> call. Transactions per second (TPS) is the throughput and unit of billing for Amazon Personalize. The minimum provisioned TPS (<code>minProvisionedTPS</code>) specifies the baseline throughput provisioned by Amazon Personalize, and thus, the minimum billing charge. </p> <p> If your TPS increases beyond <code>minProvisionedTPS</code>, Amazon Personalize auto-scales the provisioned capacity up and down, but never below <code>minProvisionedTPS</code>. There's a short time delay while the capacity is increased that might cause loss of transactions.</p> <p>The actual TPS used is calculated as the average requests/second within a 5-minute window. You pay for maximum of either the minimum provisioned TPS or the actual TPS. We recommend starting with a low <code>minProvisionedTPS</code>, track your usage using Amazon CloudWatch metrics, and then increase the <code>minProvisionedTPS</code> as necessary.</p> <p> <b>Status</b> </p> <p>A campaign can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the campaign status, call <a>DescribeCampaign</a>.</p> <note> <p>Wait until the <code>status</code> of the campaign is <code>ACTIVE</code> before asking the campaign for recommendations.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a>ListCampaigns</a> </p> </li> <li> <p> <a>DescribeCampaign</a> </p> </li> <li> <p> <a>UpdateCampaign</a> </p> </li> <li> <p> <a>DeleteCampaign</a> </p> </li> </ul>
    **/
    createCampaign(req: operations.CreateCampaignRequest, config?: AxiosRequestConfig): Promise<operations.CreateCampaignResponse>;
    /**
     * createDataset - <p>Creates an empty dataset and adds it to the specified dataset group. Use <a>CreateDatasetImportJob</a> to import your training data to a dataset.</p> <p>There are three types of datasets:</p> <ul> <li> <p>Interactions</p> </li> <li> <p>Items</p> </li> <li> <p>Users</p> </li> </ul> <p>Each dataset type has an associated schema with required field types. Only the <code>Interactions</code> dataset is required in order to train a model (also referred to as creating a solution).</p> <p>A dataset can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the dataset, call <a>DescribeDataset</a>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a>CreateDatasetGroup</a> </p> </li> <li> <p> <a>ListDatasets</a> </p> </li> <li> <p> <a>DescribeDataset</a> </p> </li> <li> <p> <a>DeleteDataset</a> </p> </li> </ul>
    **/
    createDataset(req: operations.CreateDatasetRequest, config?: AxiosRequestConfig): Promise<operations.CreateDatasetResponse>;
    /**
     * createDatasetExportJob - <p> Creates a job that exports data from your dataset to an Amazon S3 bucket. To allow Amazon Personalize to export the training data, you must specify an service-linked IAM role that gives Amazon Personalize <code>PutObject</code> permissions for your Amazon S3 bucket. For information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/export-data.html">Exporting a dataset</a> in the Amazon Personalize developer guide. </p> <p> <b>Status</b> </p> <p>A dataset export job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> <p> To get the status of the export job, call <a>DescribeDatasetExportJob</a>, and specify the Amazon Resource Name (ARN) of the dataset export job. The dataset export is complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed. </p>
    **/
    createDatasetExportJob(req: operations.CreateDatasetExportJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateDatasetExportJobResponse>;
    /**
     * createDatasetGroup - <p>Creates an empty dataset group. A dataset group contains related datasets that supply data for training a model. A dataset group can contain at most three datasets, one for each type of dataset:</p> <ul> <li> <p>Interactions</p> </li> <li> <p>Items</p> </li> <li> <p>Users</p> </li> </ul> <p>To train a model (create a solution), a dataset group that contains an <code>Interactions</code> dataset is required. Call <a>CreateDataset</a> to add a dataset to the group.</p> <p>A dataset group can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING</p> </li> </ul> <p>To get the status of the dataset group, call <a>DescribeDatasetGroup</a>. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the creation failed.</p> <note> <p>You must wait until the <code>status</code> of the dataset group is <code>ACTIVE</code> before adding a dataset to the group.</p> </note> <p>You can specify an Key Management Service (KMS) key to encrypt the datasets in the group. If you specify a KMS key, you must also include an Identity and Access Management (IAM) role that has permission to access the key.</p> <p class="title"> <b>APIs that require a dataset group ARN in the request</b> </p> <ul> <li> <p> <a>CreateDataset</a> </p> </li> <li> <p> <a>CreateEventTracker</a> </p> </li> <li> <p> <a>CreateSolution</a> </p> </li> </ul> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a>ListDatasetGroups</a> </p> </li> <li> <p> <a>DescribeDatasetGroup</a> </p> </li> <li> <p> <a>DeleteDatasetGroup</a> </p> </li> </ul>
    **/
    createDatasetGroup(req: operations.CreateDatasetGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateDatasetGroupResponse>;
    /**
     * createDatasetImportJob - <p>Creates a job that imports training data from your data source (an Amazon S3 bucket) to an Amazon Personalize dataset. To allow Amazon Personalize to import the training data, you must specify an IAM service role that has permission to read from the data source, as Amazon Personalize makes a copy of your data and processes it internally. For information on granting access to your Amazon S3 bucket, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/granting-personalize-s3-access.html">Giving Amazon Personalize Access to Amazon S3 Resources</a>. </p> <important> <p>The dataset import job replaces any existing data in the dataset that you imported in bulk.</p> </important> <p> <b>Status</b> </p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul> <p>To get the status of the import job, call <a>DescribeDatasetImportJob</a>, providing the Amazon Resource Name (ARN) of the dataset import job. The dataset import is complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed.</p> <note> <p>Importing takes time. You must wait until the status shows as ACTIVE before training a model using the dataset.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a>ListDatasetImportJobs</a> </p> </li> <li> <p> <a>DescribeDatasetImportJob</a> </p> </li> </ul>
    **/
    createDatasetImportJob(req: operations.CreateDatasetImportJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateDatasetImportJobResponse>;
    /**
     * createEventTracker - <p>Creates an event tracker that you use when adding event data to a specified dataset group using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> API.</p> <note> <p>Only one event tracker can be associated with a dataset group. You will get an error if you call <code>CreateEventTracker</code> using the same dataset group as an existing event tracker.</p> </note> <p>When you create an event tracker, the response includes a tracking ID, which you pass as a parameter when you use the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> operation. Amazon Personalize then appends the event data to the Interactions dataset of the dataset group you specify in your event tracker. </p> <p>The event tracker can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the event tracker, call <a>DescribeEventTracker</a>.</p> <note> <p>The event tracker must be in the ACTIVE state before using the tracking ID.</p> </note> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a>ListEventTrackers</a> </p> </li> <li> <p> <a>DescribeEventTracker</a> </p> </li> <li> <p> <a>DeleteEventTracker</a> </p> </li> </ul>
    **/
    createEventTracker(req: operations.CreateEventTrackerRequest, config?: AxiosRequestConfig): Promise<operations.CreateEventTrackerResponse>;
    /**
     * createFilter - Creates a recommendation filter. For more information, see <a>filter</a>.
    **/
    createFilter(req: operations.CreateFilterRequest, config?: AxiosRequestConfig): Promise<operations.CreateFilterResponse>;
    /**
     * createSchema - <p>Creates an Amazon Personalize schema from the specified schema string. The schema you create must be in Avro JSON format.</p> <p>Amazon Personalize recognizes three schema variants. Each schema is associated with a dataset type and has a set of required field and keywords. You specify a schema when you call <a>CreateDataset</a>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a>ListSchemas</a> </p> </li> <li> <p> <a>DescribeSchema</a> </p> </li> <li> <p> <a>DeleteSchema</a> </p> </li> </ul>
    **/
    createSchema(req: operations.CreateSchemaRequest, config?: AxiosRequestConfig): Promise<operations.CreateSchemaResponse>;
    /**
     * createSolution - <p>Creates the configuration for training a model. A trained model is known as a solution. After the configuration is created, you train the model (create a solution) by calling the <a>CreateSolutionVersion</a> operation. Every time you call <code>CreateSolutionVersion</code>, a new version of the solution is created.</p> <p>After creating a solution version, you check its accuracy by calling <a>GetSolutionMetrics</a>. When you are satisfied with the version, you deploy it using <a>CreateCampaign</a>. The campaign provides recommendations to a client through the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p> <p>To train a model, Amazon Personalize requires training data and a recipe. The training data comes from the dataset group that you provide in the request. A recipe specifies the training algorithm and a feature transformation. You can specify one of the predefined recipes provided by Amazon Personalize. Alternatively, you can specify <code>performAutoML</code> and Amazon Personalize will analyze your data and select the optimum USER_PERSONALIZATION recipe for you.</p> <note> <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code> for solution hyperparameter optimization at this time.</p> </note> <p> <b>Status</b> </p> <p>A solution can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>To get the status of the solution, call <a>DescribeSolution</a>. Wait until the status shows as ACTIVE before calling <code>CreateSolutionVersion</code>.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a>ListSolutions</a> </p> </li> <li> <p> <a>CreateSolutionVersion</a> </p> </li> <li> <p> <a>DescribeSolution</a> </p> </li> <li> <p> <a>DeleteSolution</a> </p> </li> </ul> <ul> <li> <p> <a>ListSolutionVersions</a> </p> </li> <li> <p> <a>DescribeSolutionVersion</a> </p> </li> </ul>
    **/
    createSolution(req: operations.CreateSolutionRequest, config?: AxiosRequestConfig): Promise<operations.CreateSolutionResponse>;
    /**
     * createSolutionVersion - <p>Trains or retrains an active solution. A solution is created using the <a>CreateSolution</a> operation and must be in the ACTIVE state before calling <code>CreateSolutionVersion</code>. A new version of the solution is created every time you call this operation.</p> <p> <b>Status</b> </p> <p>A solution version can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING</p> </li> <li> <p>CREATE IN_PROGRESS</p> </li> <li> <p>ACTIVE</p> </li> <li> <p>CREATE FAILED</p> </li> <li> <p>CREATE STOPPING</p> </li> <li> <p>CREATE STOPPED</p> </li> </ul> <p>To get the status of the version, call <a>DescribeSolutionVersion</a>. Wait until the status shows as ACTIVE before calling <code>CreateCampaign</code>.</p> <p>If the status shows as CREATE FAILED, the response includes a <code>failureReason</code> key, which describes why the job failed.</p> <p class="title"> <b>Related APIs</b> </p> <ul> <li> <p> <a>ListSolutionVersions</a> </p> </li> <li> <p> <a>DescribeSolutionVersion</a> </p> </li> </ul> <ul> <li> <p> <a>ListSolutions</a> </p> </li> <li> <p> <a>CreateSolution</a> </p> </li> <li> <p> <a>DescribeSolution</a> </p> </li> <li> <p> <a>DeleteSolution</a> </p> </li> </ul>
    **/
    createSolutionVersion(req: operations.CreateSolutionVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateSolutionVersionResponse>;
    /**
     * deleteCampaign - Removes a campaign by deleting the solution deployment. The solution that the campaign is based on is not deleted and can be redeployed when needed. A deleted campaign can no longer be specified in a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> request. For more information on campaigns, see <a>CreateCampaign</a>.
    **/
    deleteCampaign(req: operations.DeleteCampaignRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCampaignResponse>;
    /**
     * deleteDataset - Deletes a dataset. You can't delete a dataset if an associated <code>DatasetImportJob</code> or <code>SolutionVersion</code> is in the CREATE PENDING or IN PROGRESS state. For more information on datasets, see <a>CreateDataset</a>.
    **/
    deleteDataset(req: operations.DeleteDatasetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDatasetResponse>;
    /**
     * deleteDatasetGroup - <p>Deletes a dataset group. Before you delete a dataset group, you must delete the following:</p> <ul> <li> <p>All associated event trackers.</p> </li> <li> <p>All associated solutions.</p> </li> <li> <p>All datasets in the dataset group.</p> </li> </ul>
    **/
    deleteDatasetGroup(req: operations.DeleteDatasetGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDatasetGroupResponse>;
    /**
     * deleteEventTracker - Deletes the event tracker. Does not delete the event-interactions dataset from the associated dataset group. For more information on event trackers, see <a>CreateEventTracker</a>.
    **/
    deleteEventTracker(req: operations.DeleteEventTrackerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEventTrackerResponse>;
    /**
     * deleteFilter - Deletes a filter.
    **/
    deleteFilter(req: operations.DeleteFilterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFilterResponse>;
    /**
     * deleteSchema - Deletes a schema. Before deleting a schema, you must delete all datasets referencing the schema. For more information on schemas, see <a>CreateSchema</a>.
    **/
    deleteSchema(req: operations.DeleteSchemaRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSchemaResponse>;
    /**
     * deleteSolution - Deletes all versions of a solution and the <code>Solution</code> object itself. Before deleting a solution, you must delete all campaigns based on the solution. To determine what campaigns are using the solution, call <a>ListCampaigns</a> and supply the Amazon Resource Name (ARN) of the solution. You can't delete a solution if an associated <code>SolutionVersion</code> is in the CREATE PENDING or IN PROGRESS state. For more information on solutions, see <a>CreateSolution</a>.
    **/
    deleteSolution(req: operations.DeleteSolutionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSolutionResponse>;
    /**
     * describeAlgorithm - Describes the given algorithm.
    **/
    describeAlgorithm(req: operations.DescribeAlgorithmRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAlgorithmResponse>;
    /**
     * describeBatchInferenceJob - Gets the properties of a batch inference job including name, Amazon Resource Name (ARN), status, input and output configurations, and the ARN of the solution version used to generate the recommendations.
    **/
    describeBatchInferenceJob(req: operations.DescribeBatchInferenceJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeBatchInferenceJobResponse>;
    /**
     * describeCampaign - <p>Describes the given campaign, including its status.</p> <p>A campaign can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul> <p>When the <code>status</code> is <code>CREATE FAILED</code>, the response includes the <code>failureReason</code> key, which describes why.</p> <p>For more information on campaigns, see <a>CreateCampaign</a>.</p>
    **/
    describeCampaign(req: operations.DescribeCampaignRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCampaignResponse>;
    /**
     * describeDataset - Describes the given dataset. For more information on datasets, see <a>CreateDataset</a>.
    **/
    describeDataset(req: operations.DescribeDatasetRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDatasetResponse>;
    /**
     * describeDatasetExportJob - Describes the dataset export job created by <a>CreateDatasetExportJob</a>, including the export job status.
    **/
    describeDatasetExportJob(req: operations.DescribeDatasetExportJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDatasetExportJobResponse>;
    /**
     * describeDatasetGroup - Describes the given dataset group. For more information on dataset groups, see <a>CreateDatasetGroup</a>.
    **/
    describeDatasetGroup(req: operations.DescribeDatasetGroupRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDatasetGroupResponse>;
    /**
     * describeDatasetImportJob - Describes the dataset import job created by <a>CreateDatasetImportJob</a>, including the import job status.
    **/
    describeDatasetImportJob(req: operations.DescribeDatasetImportJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDatasetImportJobResponse>;
    /**
     * describeEventTracker - Describes an event tracker. The response includes the <code>trackingId</code> and <code>status</code> of the event tracker. For more information on event trackers, see <a>CreateEventTracker</a>.
    **/
    describeEventTracker(req: operations.DescribeEventTrackerRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEventTrackerResponse>;
    /**
     * describeFeatureTransformation - Describes the given feature transformation.
    **/
    describeFeatureTransformation(req: operations.DescribeFeatureTransformationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFeatureTransformationResponse>;
    /**
     * describeFilter - Describes a filter's properties.
    **/
    describeFilter(req: operations.DescribeFilterRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFilterResponse>;
    /**
     * describeRecipe - <p>Describes a recipe.</p> <p>A recipe contains three items:</p> <ul> <li> <p>An algorithm that trains a model.</p> </li> <li> <p>Hyperparameters that govern the training.</p> </li> <li> <p>Feature transformation information for modifying the input data before training.</p> </li> </ul> <p>Amazon Personalize provides a set of predefined recipes. You specify a recipe when you create a solution with the <a>CreateSolution</a> API. <code>CreateSolution</code> trains a model by using the algorithm in the specified recipe and a training dataset. The solution, when deployed as a campaign, can provide recommendations using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p>
    **/
    describeRecipe(req: operations.DescribeRecipeRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRecipeResponse>;
    /**
     * describeSchema - Describes a schema. For more information on schemas, see <a>CreateSchema</a>.
    **/
    describeSchema(req: operations.DescribeSchemaRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSchemaResponse>;
    /**
     * describeSolution - Describes a solution. For more information on solutions, see <a>CreateSolution</a>.
    **/
    describeSolution(req: operations.DescribeSolutionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSolutionResponse>;
    /**
     * describeSolutionVersion - Describes a specific version of a solution. For more information on solutions, see <a>CreateSolution</a>.
    **/
    describeSolutionVersion(req: operations.DescribeSolutionVersionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSolutionVersionResponse>;
    /**
     * getSolutionMetrics - Gets the metrics for the specified solution version.
    **/
    getSolutionMetrics(req: operations.GetSolutionMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetSolutionMetricsResponse>;
    /**
     * listBatchInferenceJobs - Gets a list of the batch inference jobs that have been performed off of a solution version.
    **/
    listBatchInferenceJobs(req: operations.ListBatchInferenceJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListBatchInferenceJobsResponse>;
    /**
     * listCampaigns - Returns a list of campaigns that use the given solution. When a solution is not specified, all the campaigns associated with the account are listed. The response provides the properties for each campaign, including the Amazon Resource Name (ARN). For more information on campaigns, see <a>CreateCampaign</a>.
    **/
    listCampaigns(req: operations.ListCampaignsRequest, config?: AxiosRequestConfig): Promise<operations.ListCampaignsResponse>;
    /**
     * listDatasetExportJobs - Returns a list of dataset export jobs that use the given dataset. When a dataset is not specified, all the dataset export jobs associated with the account are listed. The response provides the properties for each dataset export job, including the Amazon Resource Name (ARN). For more information on dataset export jobs, see <a>CreateDatasetExportJob</a>. For more information on datasets, see <a>CreateDataset</a>.
    **/
    listDatasetExportJobs(req: operations.ListDatasetExportJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListDatasetExportJobsResponse>;
    /**
     * listDatasetGroups - Returns a list of dataset groups. The response provides the properties for each dataset group, including the Amazon Resource Name (ARN). For more information on dataset groups, see <a>CreateDatasetGroup</a>.
    **/
    listDatasetGroups(req: operations.ListDatasetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListDatasetGroupsResponse>;
    /**
     * listDatasetImportJobs - Returns a list of dataset import jobs that use the given dataset. When a dataset is not specified, all the dataset import jobs associated with the account are listed. The response provides the properties for each dataset import job, including the Amazon Resource Name (ARN). For more information on dataset import jobs, see <a>CreateDatasetImportJob</a>. For more information on datasets, see <a>CreateDataset</a>.
    **/
    listDatasetImportJobs(req: operations.ListDatasetImportJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListDatasetImportJobsResponse>;
    /**
     * listDatasets - Returns the list of datasets contained in the given dataset group. The response provides the properties for each dataset, including the Amazon Resource Name (ARN). For more information on datasets, see <a>CreateDataset</a>.
    **/
    listDatasets(req: operations.ListDatasetsRequest, config?: AxiosRequestConfig): Promise<operations.ListDatasetsResponse>;
    /**
     * listEventTrackers - Returns the list of event trackers associated with the account. The response provides the properties for each event tracker, including the Amazon Resource Name (ARN) and tracking ID. For more information on event trackers, see <a>CreateEventTracker</a>.
    **/
    listEventTrackers(req: operations.ListEventTrackersRequest, config?: AxiosRequestConfig): Promise<operations.ListEventTrackersResponse>;
    /**
     * listFilters - Lists all filters that belong to a given dataset group.
    **/
    listFilters(req: operations.ListFiltersRequest, config?: AxiosRequestConfig): Promise<operations.ListFiltersResponse>;
    /**
     * listRecipes - Returns a list of available recipes. The response provides the properties for each recipe, including the recipe's Amazon Resource Name (ARN).
    **/
    listRecipes(req: operations.ListRecipesRequest, config?: AxiosRequestConfig): Promise<operations.ListRecipesResponse>;
    /**
     * listSchemas - Returns the list of schemas associated with the account. The response provides the properties for each schema, including the Amazon Resource Name (ARN). For more information on schemas, see <a>CreateSchema</a>.
    **/
    listSchemas(req: operations.ListSchemasRequest, config?: AxiosRequestConfig): Promise<operations.ListSchemasResponse>;
    /**
     * listSolutionVersions - Returns a list of solution versions for the given solution. When a solution is not specified, all the solution versions associated with the account are listed. The response provides the properties for each solution version, including the Amazon Resource Name (ARN). For more information on solutions, see <a>CreateSolution</a>.
    **/
    listSolutionVersions(req: operations.ListSolutionVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListSolutionVersionsResponse>;
    /**
     * listSolutions - Returns a list of solutions that use the given dataset group. When a dataset group is not specified, all the solutions associated with the account are listed. The response provides the properties for each solution, including the Amazon Resource Name (ARN). For more information on solutions, see <a>CreateSolution</a>.
    **/
    listSolutions(req: operations.ListSolutionsRequest, config?: AxiosRequestConfig): Promise<operations.ListSolutionsResponse>;
    /**
     * stopSolutionVersionCreation - <p>Stops creating a solution version that is in a state of CREATE_PENDING or CREATE IN_PROGRESS. </p> <p>Depending on the current state of the solution version, the solution version state changes as follows:</p> <ul> <li> <p>CREATE_PENDING &gt; CREATE_STOPPED</p> <p>or</p> </li> <li> <p>CREATE_IN_PROGRESS &gt; CREATE_STOPPING &gt; CREATE_STOPPED</p> </li> </ul> <p>You are billed for all of the training completed up until you stop the solution version creation. You cannot resume creating a solution version once it has been stopped.</p>
    **/
    stopSolutionVersionCreation(req: operations.StopSolutionVersionCreationRequest, config?: AxiosRequestConfig): Promise<operations.StopSolutionVersionCreationResponse>;
    /**
     * updateCampaign - <p>Updates a campaign by either deploying a new solution or changing the value of the campaign's <code>minProvisionedTPS</code> parameter.</p> <p>To update a campaign, the campaign status must be ACTIVE or CREATE FAILED. Check the campaign status using the <a>DescribeCampaign</a> API.</p> <note> <p>You must wait until the <code>status</code> of the updated campaign is <code>ACTIVE</code> before asking the campaign for recommendations.</p> </note> <p>For more information on campaigns, see <a>CreateCampaign</a>.</p>
    **/
    updateCampaign(req: operations.UpdateCampaignRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCampaignResponse>;
}
export {};
