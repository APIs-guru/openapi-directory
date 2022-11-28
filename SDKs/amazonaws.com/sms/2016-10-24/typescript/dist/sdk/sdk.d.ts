import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://sms.{region}.amazonaws.com", "https://sms.{region}.amazonaws.com", "http://sms.{region}.amazonaws.com.cn", "https://sms.{region}.amazonaws.com.cn"];
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
     * createApp - Creates an application. An application consists of one or more server groups. Each server group contain one or more servers.
    **/
    createApp(req: operations.CreateAppRequest, config?: AxiosRequestConfig): Promise<operations.CreateAppResponse>;
    /**
     * createReplicationJob - Creates a replication job. The replication job schedules periodic replication runs to replicate your server to AWS. Each replication run creates an Amazon Machine Image (AMI).
    **/
    createReplicationJob(req: operations.CreateReplicationJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateReplicationJobResponse>;
    /**
     * deleteApp - Deletes the specified application. Optionally deletes the launched stack associated with the application and all AWS SMS replication jobs for servers in the application.
    **/
    deleteApp(req: operations.DeleteAppRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppResponse>;
    /**
     * deleteAppLaunchConfiguration - Deletes the launch configuration for the specified application.
    **/
    deleteAppLaunchConfiguration(req: operations.DeleteAppLaunchConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppLaunchConfigurationResponse>;
    /**
     * deleteAppReplicationConfiguration - Deletes the replication configuration for the specified application.
    **/
    deleteAppReplicationConfiguration(req: operations.DeleteAppReplicationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppReplicationConfigurationResponse>;
    /**
     * deleteAppValidationConfiguration - Deletes the validation configuration for the specified application.
    **/
    deleteAppValidationConfiguration(req: operations.DeleteAppValidationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppValidationConfigurationResponse>;
    /**
     * deleteReplicationJob - <p>Deletes the specified replication job.</p> <p>After you delete a replication job, there are no further replication runs. AWS deletes the contents of the Amazon S3 bucket used to store AWS SMS artifacts. The AMIs created by the replication runs are not deleted.</p>
    **/
    deleteReplicationJob(req: operations.DeleteReplicationJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReplicationJobResponse>;
    /**
     * deleteServerCatalog - Deletes all servers from your server catalog.
    **/
    deleteServerCatalog(req: operations.DeleteServerCatalogRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServerCatalogResponse>;
    /**
     * disassociateConnector - <p>Disassociates the specified connector from AWS SMS.</p> <p>After you disassociate a connector, it is no longer available to support replication jobs.</p>
    **/
    disassociateConnector(req: operations.DisassociateConnectorRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateConnectorResponse>;
    /**
     * generateChangeSet - Generates a target change set for a currently launched stack and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
    **/
    generateChangeSet(req: operations.GenerateChangeSetRequest, config?: AxiosRequestConfig): Promise<operations.GenerateChangeSetResponse>;
    /**
     * generateTemplate - Generates an AWS CloudFormation template based on the current launch configuration and writes it to an Amazon S3 object in the customer’s Amazon S3 bucket.
    **/
    generateTemplate(req: operations.GenerateTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GenerateTemplateResponse>;
    /**
     * getApp - Retrieve information about the specified application.
    **/
    getApp(req: operations.GetAppRequest, config?: AxiosRequestConfig): Promise<operations.GetAppResponse>;
    /**
     * getAppLaunchConfiguration - Retrieves the application launch configuration associated with the specified application.
    **/
    getAppLaunchConfiguration(req: operations.GetAppLaunchConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetAppLaunchConfigurationResponse>;
    /**
     * getAppReplicationConfiguration - Retrieves the application replication configuration associated with the specified application.
    **/
    getAppReplicationConfiguration(req: operations.GetAppReplicationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetAppReplicationConfigurationResponse>;
    /**
     * getAppValidationConfiguration - Retrieves information about a configuration for validating an application.
    **/
    getAppValidationConfiguration(req: operations.GetAppValidationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetAppValidationConfigurationResponse>;
    /**
     * getAppValidationOutput - Retrieves output from validating an application.
    **/
    getAppValidationOutput(req: operations.GetAppValidationOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetAppValidationOutputResponse>;
    /**
     * getConnectors - Describes the connectors registered with the AWS SMS.
    **/
    getConnectors(req: operations.GetConnectorsRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectorsResponse>;
    /**
     * getReplicationJobs - Describes the specified replication job or all of your replication jobs.
    **/
    getReplicationJobs(req: operations.GetReplicationJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetReplicationJobsResponse>;
    /**
     * getReplicationRuns - Describes the replication runs for the specified replication job.
    **/
    getReplicationRuns(req: operations.GetReplicationRunsRequest, config?: AxiosRequestConfig): Promise<operations.GetReplicationRunsResponse>;
    /**
     * getServers - <p>Describes the servers in your server catalog.</p> <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>
    **/
    getServers(req: operations.GetServersRequest, config?: AxiosRequestConfig): Promise<operations.GetServersResponse>;
    /**
     * importAppCatalog - Allows application import from AWS Migration Hub.
    **/
    importAppCatalog(req: operations.ImportAppCatalogRequest, config?: AxiosRequestConfig): Promise<operations.ImportAppCatalogResponse>;
    /**
     * importServerCatalog - <p>Gathers a complete list of on-premises servers. Connectors must be installed and monitoring all servers to import.</p> <p>This call returns immediately, but might take additional time to retrieve all the servers.</p>
    **/
    importServerCatalog(req: operations.ImportServerCatalogRequest, config?: AxiosRequestConfig): Promise<operations.ImportServerCatalogResponse>;
    /**
     * launchApp - Launches the specified application as a stack in AWS CloudFormation.
    **/
    launchApp(req: operations.LaunchAppRequest, config?: AxiosRequestConfig): Promise<operations.LaunchAppResponse>;
    /**
     * listApps - Retrieves summaries for all applications.
    **/
    listApps(req: operations.ListAppsRequest, config?: AxiosRequestConfig): Promise<operations.ListAppsResponse>;
    /**
     * notifyAppValidationOutput - Provides information to AWS SMS about whether application validation is successful.
    **/
    notifyAppValidationOutput(req: operations.NotifyAppValidationOutputRequest, config?: AxiosRequestConfig): Promise<operations.NotifyAppValidationOutputResponse>;
    /**
     * putAppLaunchConfiguration - Creates or updates the launch configuration for the specified application.
    **/
    putAppLaunchConfiguration(req: operations.PutAppLaunchConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PutAppLaunchConfigurationResponse>;
    /**
     * putAppReplicationConfiguration - Creates or updates the replication configuration for the specified application.
    **/
    putAppReplicationConfiguration(req: operations.PutAppReplicationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PutAppReplicationConfigurationResponse>;
    /**
     * putAppValidationConfiguration - Creates or updates a validation configuration for the specified application.
    **/
    putAppValidationConfiguration(req: operations.PutAppValidationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PutAppValidationConfigurationResponse>;
    /**
     * startAppReplication - Starts replicating the specified application by creating replication jobs for each server in the application.
    **/
    startAppReplication(req: operations.StartAppReplicationRequest, config?: AxiosRequestConfig): Promise<operations.StartAppReplicationResponse>;
    /**
     * startOnDemandAppReplication - Starts an on-demand replication run for the specified application.
    **/
    startOnDemandAppReplication(req: operations.StartOnDemandAppReplicationRequest, config?: AxiosRequestConfig): Promise<operations.StartOnDemandAppReplicationResponse>;
    /**
     * startOnDemandReplicationRun - <p>Starts an on-demand replication run for the specified replication job. This replication run starts immediately. This replication run is in addition to the ones already scheduled.</p> <p>There is a limit on the number of on-demand replications runs that you can request in a 24-hour period.</p>
    **/
    startOnDemandReplicationRun(req: operations.StartOnDemandReplicationRunRequest, config?: AxiosRequestConfig): Promise<operations.StartOnDemandReplicationRunResponse>;
    /**
     * stopAppReplication - Stops replicating the specified application by deleting the replication job for each server in the application.
    **/
    stopAppReplication(req: operations.StopAppReplicationRequest, config?: AxiosRequestConfig): Promise<operations.StopAppReplicationResponse>;
    /**
     * terminateApp - Terminates the stack for the specified application.
    **/
    terminateApp(req: operations.TerminateAppRequest, config?: AxiosRequestConfig): Promise<operations.TerminateAppResponse>;
    /**
     * updateApp - Updates the specified application.
    **/
    updateApp(req: operations.UpdateAppRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAppResponse>;
    /**
     * updateReplicationJob - Updates the specified settings for the specified replication job.
    **/
    updateReplicationJob(req: operations.UpdateReplicationJobRequest, config?: AxiosRequestConfig): Promise<operations.UpdateReplicationJobResponse>;
}
export {};
