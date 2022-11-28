import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://mgn.{region}.amazonaws.com", "https://mgn.{region}.amazonaws.com", "http://mgn.{region}.amazonaws.com.cn", "https://mgn.{region}.amazonaws.com.cn"];
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
     * changeServerLifeCycleState - Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)
    **/
    changeServerLifeCycleState(req: operations.ChangeServerLifeCycleStateRequest, config?: AxiosRequestConfig): Promise<operations.ChangeServerLifeCycleStateResponse>;
    /**
     * createReplicationConfigurationTemplate - Creates a new ReplicationConfigurationTemplate.
    **/
    createReplicationConfigurationTemplate(req: operations.CreateReplicationConfigurationTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateReplicationConfigurationTemplateResponse>;
    /**
     * deleteJob - Deletes a single Job by ID.
    **/
    deleteJob(req: operations.DeleteJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJobResponse>;
    /**
     * deleteReplicationConfigurationTemplate - Deletes a single Replication Configuration Template by ID
    **/
    deleteReplicationConfigurationTemplate(req: operations.DeleteReplicationConfigurationTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReplicationConfigurationTemplateResponse>;
    /**
     * deleteSourceServer - Deletes a single source server by ID.
    **/
    deleteSourceServer(req: operations.DeleteSourceServerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSourceServerResponse>;
    /**
     * describeJobLogItems - Retrieves detailed Job log with paging.
    **/
    describeJobLogItems(req: operations.DescribeJobLogItemsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeJobLogItemsResponse>;
    /**
     * describeJobs - Returns a list of Jobs. Use the JobsID and fromDate and toData filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are normaly created by the StartTest, StartCutover, and TerminateTargetInstances APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.
    **/
    describeJobs(req: operations.DescribeJobsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeJobsResponse>;
    /**
     * describeReplicationConfigurationTemplates - Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.
    **/
    describeReplicationConfigurationTemplates(req: operations.DescribeReplicationConfigurationTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeReplicationConfigurationTemplatesResponse>;
    /**
     * describeSourceServers - Retrieves all SourceServers or multiple SourceServers by ID.
    **/
    describeSourceServers(req: operations.DescribeSourceServersRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSourceServersResponse>;
    /**
     * disconnectFromService - Disconnects specific Source Servers from Application Migration Service. Data replication is stopped immediately. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. If the agent on the source server has not been prevented from communciating with the Application Migration Service service, then it will receive a command to uninstall itself (within approximately 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be set to DISCONNECTED; The totalStorageBytes property for each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDurationwill be nullified.
    **/
    disconnectFromService(req: operations.DisconnectFromServiceRequest, config?: AxiosRequestConfig): Promise<operations.DisconnectFromServiceResponse>;
    /**
     * finalizeCutover - Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDurationwill be nullified.
    **/
    finalizeCutover(req: operations.FinalizeCutoverRequest, config?: AxiosRequestConfig): Promise<operations.FinalizeCutoverResponse>;
    /**
     * getLaunchConfiguration - Lists all LaunchConfigurations available, filtered by Source Server IDs.
    **/
    getLaunchConfiguration(req: operations.GetLaunchConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetLaunchConfigurationResponse>;
    /**
     * getReplicationConfiguration - Lists all ReplicationConfigurations, filtered by Source Server ID.
    **/
    getReplicationConfiguration(req: operations.GetReplicationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetReplicationConfigurationResponse>;
    /**
     * initializeService - Initialize Application Migration Service.
    **/
    initializeService(req: operations.InitializeServiceRequest, config?: AxiosRequestConfig): Promise<operations.InitializeServiceResponse>;
    /**
     * listTagsForResource - List all tags for your Application Migration Service resources.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * markAsArchived - Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle.state which equals DISCONNECTED or CUTOVER.
    **/
    markAsArchived(req: operations.MarkAsArchivedRequest, config?: AxiosRequestConfig): Promise<operations.MarkAsArchivedResponse>;
    /**
     * retryDataReplication - Causes the data replication initiation sequence to begin immediately upon next Handshake for specified SourceServer IDs, regardless of when the previous initiation started. This command will not work if the SourceServer is not stalled or is in a DISCONNECTED or STOPPED state.
    **/
    retryDataReplication(req: operations.RetryDataReplicationRequest, config?: AxiosRequestConfig): Promise<operations.RetryDataReplicationResponse>;
    /**
     * startCutover - Launches a Cutover Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartCutover and changes the SourceServer.lifeCycle.state property to CUTTING_OVER.
    **/
    startCutover(req: operations.StartCutoverRequest, config?: AxiosRequestConfig): Promise<operations.StartCutoverResponse>;
    /**
     * startTest - Lauches a Test Instance for specific Source Servers. This command starts a LAUNCH job whose initiatedBy property is StartTest and changes the SourceServer.lifeCycle.state property to TESTING.
    **/
    startTest(req: operations.StartTestRequest, config?: AxiosRequestConfig): Promise<operations.StartTestResponse>;
    /**
     * tagResource - Adds or overwrites only the specified tags for the specified Application Migration Service resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * terminateTargetInstances - Starts a job that terminates specific launched EC2 Test and Cutover instances. This command will not work for any Source Server with a lifecycle.state of TESTING, CUTTING_OVER, or CUTOVER.
    **/
    terminateTargetInstances(req: operations.TerminateTargetInstancesRequest, config?: AxiosRequestConfig): Promise<operations.TerminateTargetInstancesResponse>;
    /**
     * untagResource - Deletes the specified set of tags from the specified set of Application Migration Service resources.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateLaunchConfiguration - Updates multiple LaunchConfigurations by Source Server ID.
    **/
    updateLaunchConfiguration(req: operations.UpdateLaunchConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLaunchConfigurationResponse>;
    /**
     * updateReplicationConfiguration - Allows you to update multiple ReplicationConfigurations by Source Server ID.
    **/
    updateReplicationConfiguration(req: operations.UpdateReplicationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateReplicationConfigurationResponse>;
    /**
     * updateReplicationConfigurationTemplate - Updates multiple ReplicationConfigurationTemplates by ID.
    **/
    updateReplicationConfigurationTemplate(req: operations.UpdateReplicationConfigurationTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateReplicationConfigurationTemplateResponse>;
}
export {};
