import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateEnvironmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Name" })
  name: string;
}


export class UpdateEnvironmentHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// UpdateEnvironmentRequestBodyLoggingConfiguration
/** 
 * Defines the Apache Airflow logs to send to CloudWatch Logs: <code>DagProcessingLogs</code>, <code>SchedulerLogs</code>, <code>TaskLogs</code>, <code>WebserverLogs</code>, <code>WorkerLogs</code>.
**/
export class UpdateEnvironmentRequestBodyLoggingConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=DagProcessingLogs" })
  dagProcessingLogs?: shared.ModuleLoggingConfigurationInput;

  @Metadata({ data: "json, name=SchedulerLogs" })
  schedulerLogs?: shared.ModuleLoggingConfigurationInput;

  @Metadata({ data: "json, name=TaskLogs" })
  taskLogs?: shared.ModuleLoggingConfigurationInput;

  @Metadata({ data: "json, name=WebserverLogs" })
  webserverLogs?: shared.ModuleLoggingConfigurationInput;

  @Metadata({ data: "json, name=WorkerLogs" })
  workerLogs?: shared.ModuleLoggingConfigurationInput;
}


// UpdateEnvironmentRequestBodyNetworkConfiguration
/** 
 * The VPC networking components used to secure and enable network traffic between the AWS resources for your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.
**/
export class UpdateEnvironmentRequestBodyNetworkConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];
}

export enum UpdateEnvironmentRequestBodyWebserverAccessModeEnum {
    PrivateOnly = "PRIVATE_ONLY"
,    PublicOnly = "PUBLIC_ONLY"
}


export class UpdateEnvironmentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AirflowConfigurationOptions" })
  airflowConfigurationOptions?: Map<string, string>;

  @Metadata({ data: "json, name=AirflowVersion" })
  airflowVersion?: string;

  @Metadata({ data: "json, name=DagS3Path" })
  dagS3Path?: string;

  @Metadata({ data: "json, name=EnvironmentClass" })
  environmentClass?: string;

  @Metadata({ data: "json, name=ExecutionRoleArn" })
  executionRoleArn?: string;

  @Metadata({ data: "json, name=LoggingConfiguration" })
  loggingConfiguration?: UpdateEnvironmentRequestBodyLoggingConfiguration;

  @Metadata({ data: "json, name=MaxWorkers" })
  maxWorkers?: number;

  @Metadata({ data: "json, name=MinWorkers" })
  minWorkers?: number;

  @Metadata({ data: "json, name=NetworkConfiguration" })
  networkConfiguration?: UpdateEnvironmentRequestBodyNetworkConfiguration;

  @Metadata({ data: "json, name=PluginsS3ObjectVersion" })
  pluginsS3ObjectVersion?: string;

  @Metadata({ data: "json, name=PluginsS3Path" })
  pluginsS3Path?: string;

  @Metadata({ data: "json, name=RequirementsS3ObjectVersion" })
  requirementsS3ObjectVersion?: string;

  @Metadata({ data: "json, name=RequirementsS3Path" })
  requirementsS3Path?: string;

  @Metadata({ data: "json, name=Schedulers" })
  schedulers?: number;

  @Metadata({ data: "json, name=SourceBucketArn" })
  sourceBucketArn?: string;

  @Metadata({ data: "json, name=WebserverAccessMode" })
  webserverAccessMode?: UpdateEnvironmentRequestBodyWebserverAccessModeEnum;

  @Metadata({ data: "json, name=WeeklyMaintenanceWindowStart" })
  weeklyMaintenanceWindowStart?: string;
}


export class UpdateEnvironmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateEnvironmentPathParams;

  @Metadata()
  headers: UpdateEnvironmentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateEnvironmentRequestBody;
}


export class UpdateEnvironmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateEnvironmentOutput?: shared.UpdateEnvironmentOutput;

  @Metadata()
  validationException?: any;
}
