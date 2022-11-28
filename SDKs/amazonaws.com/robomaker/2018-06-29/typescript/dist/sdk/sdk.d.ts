import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://robomaker.{region}.amazonaws.com", "https://robomaker.{region}.amazonaws.com", "http://robomaker.{region}.amazonaws.com.cn", "https://robomaker.{region}.amazonaws.com.cn"];
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
     * batchDeleteWorlds - Deletes one or more worlds in a batch operation.
    **/
    batchDeleteWorlds(req: operations.BatchDeleteWorldsRequest, config?: AxiosRequestConfig): Promise<operations.BatchDeleteWorldsResponse>;
    /**
     * batchDescribeSimulationJob - Describes one or more simulation jobs.
    **/
    batchDescribeSimulationJob(req: operations.BatchDescribeSimulationJobRequest, config?: AxiosRequestConfig): Promise<operations.BatchDescribeSimulationJobResponse>;
    /**
     * cancelDeploymentJob - Cancels the specified deployment job.
    **/
    cancelDeploymentJob(req: operations.CancelDeploymentJobRequest, config?: AxiosRequestConfig): Promise<operations.CancelDeploymentJobResponse>;
    /**
     * cancelSimulationJob - Cancels the specified simulation job.
    **/
    cancelSimulationJob(req: operations.CancelSimulationJobRequest, config?: AxiosRequestConfig): Promise<operations.CancelSimulationJobResponse>;
    /**
     * cancelSimulationJobBatch - Cancels a simulation job batch. When you cancel a simulation job batch, you are also cancelling all of the active simulation jobs created as part of the batch.
    **/
    cancelSimulationJobBatch(req: operations.CancelSimulationJobBatchRequest, config?: AxiosRequestConfig): Promise<operations.CancelSimulationJobBatchResponse>;
    /**
     * cancelWorldExportJob - Cancels the specified export job.
    **/
    cancelWorldExportJob(req: operations.CancelWorldExportJobRequest, config?: AxiosRequestConfig): Promise<operations.CancelWorldExportJobResponse>;
    /**
     * cancelWorldGenerationJob - Cancels the specified world generator job.
    **/
    cancelWorldGenerationJob(req: operations.CancelWorldGenerationJobRequest, config?: AxiosRequestConfig): Promise<operations.CancelWorldGenerationJobResponse>;
    /**
     * createDeploymentJob - <p>Deploys a specific version of a robot application to robots in a fleet.</p> <p>The robot application must have a numbered <code>applicationVersion</code> for consistency reasons. To create a new version, use <code>CreateRobotApplicationVersion</code> or see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/create-robot-application-version.html">Creating a Robot Application Version</a>. </p> <note> <p>After 90 days, deployment jobs expire and will be deleted. They will no longer be accessible. </p> </note>
    **/
    createDeploymentJob(req: operations.CreateDeploymentJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeploymentJobResponse>;
    /**
     * createFleet - Creates a fleet, a logical group of robots running the same robot application.
    **/
    createFleet(req: operations.CreateFleetRequest, config?: AxiosRequestConfig): Promise<operations.CreateFleetResponse>;
    /**
     * createRobot - Creates a robot.
    **/
    createRobot(req: operations.CreateRobotRequest, config?: AxiosRequestConfig): Promise<operations.CreateRobotResponse>;
    /**
     * createRobotApplication - Creates a robot application.
    **/
    createRobotApplication(req: operations.CreateRobotApplicationRequest, config?: AxiosRequestConfig): Promise<operations.CreateRobotApplicationResponse>;
    /**
     * createRobotApplicationVersion - Creates a version of a robot application.
    **/
    createRobotApplicationVersion(req: operations.CreateRobotApplicationVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateRobotApplicationVersionResponse>;
    /**
     * createSimulationApplication - Creates a simulation application.
    **/
    createSimulationApplication(req: operations.CreateSimulationApplicationRequest, config?: AxiosRequestConfig): Promise<operations.CreateSimulationApplicationResponse>;
    /**
     * createSimulationApplicationVersion - Creates a simulation application with a specific revision id.
    **/
    createSimulationApplicationVersion(req: operations.CreateSimulationApplicationVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateSimulationApplicationVersionResponse>;
    /**
     * createSimulationJob - <p>Creates a simulation job.</p> <note> <p>After 90 days, simulation jobs expire and will be deleted. They will no longer be accessible. </p> </note>
    **/
    createSimulationJob(req: operations.CreateSimulationJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateSimulationJobResponse>;
    /**
     * createWorldExportJob - Creates a world export job.
    **/
    createWorldExportJob(req: operations.CreateWorldExportJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorldExportJobResponse>;
    /**
     * createWorldGenerationJob - Creates worlds using the specified template.
    **/
    createWorldGenerationJob(req: operations.CreateWorldGenerationJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorldGenerationJobResponse>;
    /**
     * createWorldTemplate - Creates a world template.
    **/
    createWorldTemplate(req: operations.CreateWorldTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorldTemplateResponse>;
    /**
     * deleteFleet - Deletes a fleet.
    **/
    deleteFleet(req: operations.DeleteFleetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFleetResponse>;
    /**
     * deleteRobot - Deletes a robot.
    **/
    deleteRobot(req: operations.DeleteRobotRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRobotResponse>;
    /**
     * deleteRobotApplication - Deletes a robot application.
    **/
    deleteRobotApplication(req: operations.DeleteRobotApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRobotApplicationResponse>;
    /**
     * deleteSimulationApplication - Deletes a simulation application.
    **/
    deleteSimulationApplication(req: operations.DeleteSimulationApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSimulationApplicationResponse>;
    /**
     * deleteWorldTemplate - Deletes a world template.
    **/
    deleteWorldTemplate(req: operations.DeleteWorldTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorldTemplateResponse>;
    /**
     * deregisterRobot - Deregisters a robot.
    **/
    deregisterRobot(req: operations.DeregisterRobotRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterRobotResponse>;
    /**
     * describeDeploymentJob - Describes a deployment job.
    **/
    describeDeploymentJob(req: operations.DescribeDeploymentJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDeploymentJobResponse>;
    /**
     * describeFleet - Describes a fleet.
    **/
    describeFleet(req: operations.DescribeFleetRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFleetResponse>;
    /**
     * describeRobot - Describes a robot.
    **/
    describeRobot(req: operations.DescribeRobotRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRobotResponse>;
    /**
     * describeRobotApplication - Describes a robot application.
    **/
    describeRobotApplication(req: operations.DescribeRobotApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRobotApplicationResponse>;
    /**
     * describeSimulationApplication - Describes a simulation application.
    **/
    describeSimulationApplication(req: operations.DescribeSimulationApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSimulationApplicationResponse>;
    /**
     * describeSimulationJob - Describes a simulation job.
    **/
    describeSimulationJob(req: operations.DescribeSimulationJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSimulationJobResponse>;
    /**
     * describeSimulationJobBatch - Describes a simulation job batch.
    **/
    describeSimulationJobBatch(req: operations.DescribeSimulationJobBatchRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSimulationJobBatchResponse>;
    /**
     * describeWorld - Describes a world.
    **/
    describeWorld(req: operations.DescribeWorldRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorldResponse>;
    /**
     * describeWorldExportJob - Describes a world export job.
    **/
    describeWorldExportJob(req: operations.DescribeWorldExportJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorldExportJobResponse>;
    /**
     * describeWorldGenerationJob - Describes a world generation job.
    **/
    describeWorldGenerationJob(req: operations.DescribeWorldGenerationJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorldGenerationJobResponse>;
    /**
     * describeWorldTemplate - Describes a world template.
    **/
    describeWorldTemplate(req: operations.DescribeWorldTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorldTemplateResponse>;
    /**
     * getWorldTemplateBody - Gets the world template body.
    **/
    getWorldTemplateBody(req: operations.GetWorldTemplateBodyRequest, config?: AxiosRequestConfig): Promise<operations.GetWorldTemplateBodyResponse>;
    /**
     * listDeploymentJobs - Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve specific deployment jobs.
    **/
    listDeploymentJobs(req: operations.ListDeploymentJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListDeploymentJobsResponse>;
    /**
     * listFleets - Returns a list of fleets. You can optionally provide filters to retrieve specific fleets.
    **/
    listFleets(req: operations.ListFleetsRequest, config?: AxiosRequestConfig): Promise<operations.ListFleetsResponse>;
    /**
     * listRobotApplications - Returns a list of robot application. You can optionally provide filters to retrieve specific robot applications.
    **/
    listRobotApplications(req: operations.ListRobotApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.ListRobotApplicationsResponse>;
    /**
     * listRobots - Returns a list of robots. You can optionally provide filters to retrieve specific robots.
    **/
    listRobots(req: operations.ListRobotsRequest, config?: AxiosRequestConfig): Promise<operations.ListRobotsResponse>;
    /**
     * listSimulationApplications - Returns a list of simulation applications. You can optionally provide filters to retrieve specific simulation applications.
    **/
    listSimulationApplications(req: operations.ListSimulationApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.ListSimulationApplicationsResponse>;
    /**
     * listSimulationJobBatches - Returns a list simulation job batches. You can optionally provide filters to retrieve specific simulation batch jobs.
    **/
    listSimulationJobBatches(req: operations.ListSimulationJobBatchesRequest, config?: AxiosRequestConfig): Promise<operations.ListSimulationJobBatchesResponse>;
    /**
     * listSimulationJobs - Returns a list of simulation jobs. You can optionally provide filters to retrieve specific simulation jobs.
    **/
    listSimulationJobs(req: operations.ListSimulationJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListSimulationJobsResponse>;
    /**
     * listTagsForResource - Lists all tags on a AWS RoboMaker resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * listWorldExportJobs - Lists world export jobs.
    **/
    listWorldExportJobs(req: operations.ListWorldExportJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListWorldExportJobsResponse>;
    /**
     * listWorldGenerationJobs - Lists world generator jobs.
    **/
    listWorldGenerationJobs(req: operations.ListWorldGenerationJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListWorldGenerationJobsResponse>;
    /**
     * listWorldTemplates - Lists world templates.
    **/
    listWorldTemplates(req: operations.ListWorldTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListWorldTemplatesResponse>;
    /**
     * listWorlds - Lists worlds.
    **/
    listWorlds(req: operations.ListWorldsRequest, config?: AxiosRequestConfig): Promise<operations.ListWorldsResponse>;
    /**
     * registerRobot - Registers a robot with a fleet.
    **/
    registerRobot(req: operations.RegisterRobotRequest, config?: AxiosRequestConfig): Promise<operations.RegisterRobotResponse>;
    /**
     * restartSimulationJob - Restarts a running simulation job.
    **/
    restartSimulationJob(req: operations.RestartSimulationJobRequest, config?: AxiosRequestConfig): Promise<operations.RestartSimulationJobResponse>;
    /**
     * startSimulationJobBatch - Starts a new simulation job batch. The batch is defined using one or more <code>SimulationJobRequest</code> objects.
    **/
    startSimulationJobBatch(req: operations.StartSimulationJobBatchRequest, config?: AxiosRequestConfig): Promise<operations.StartSimulationJobBatchResponse>;
    /**
     * syncDeploymentJob - Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were added after a deployment.
    **/
    syncDeploymentJob(req: operations.SyncDeploymentJobRequest, config?: AxiosRequestConfig): Promise<operations.SyncDeploymentJobResponse>;
    /**
     * tagResource - <p>Adds or edits tags for a AWS RoboMaker resource.</p> <p>Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty strings. </p> <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - <p>Removes the specified tags from the specified AWS RoboMaker resource.</p> <p>To remove a tag, specify the tag key. To change the tag value of an existing tag key, use <a href="https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html"> <code>TagResource</code> </a>. </p>
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateRobotApplication - Updates a robot application.
    **/
    updateRobotApplication(req: operations.UpdateRobotApplicationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRobotApplicationResponse>;
    /**
     * updateSimulationApplication - Updates a simulation application.
    **/
    updateSimulationApplication(req: operations.UpdateSimulationApplicationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSimulationApplicationResponse>;
    /**
     * updateWorldTemplate - Updates a world template.
    **/
    updateWorldTemplate(req: operations.UpdateWorldTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorldTemplateResponse>;
}
export {};
