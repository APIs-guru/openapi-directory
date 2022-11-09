import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateEnvironmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Name" })
  name: string;
}


export class CreateEnvironmentHeaders extends SpeakeasyBase {
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


// CreateEnvironmentRequestBodyLoggingConfiguration
/** 
 * Defines the Apache Airflow logs to send to CloudWatch Logs: <code>DagProcessingLogs</code>, <code>SchedulerLogs</code>, <code>TaskLogs</code>, <code>WebserverLogs</code>, <code>WorkerLogs</code>.
**/
export class CreateEnvironmentRequestBodyLoggingConfiguration extends SpeakeasyBase {
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


// CreateEnvironmentRequestBodyNetworkConfiguration
/** 
 * The VPC networking components used to secure and enable network traffic between the AWS resources for your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.
**/
export class CreateEnvironmentRequestBodyNetworkConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];
}

export enum CreateEnvironmentRequestBodyWebserverAccessModeEnum {
    PrivateOnly = "PRIVATE_ONLY"
,    PublicOnly = "PUBLIC_ONLY"
}


export class CreateEnvironmentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=AirflowConfigurationOptions" })
  airflowConfigurationOptions?: Map<string, string>;

  @Metadata({ data: "json, name=AirflowVersion" })
  airflowVersion?: string;

  @Metadata({ data: "json, name=DagS3Path" })
  dagS3Path: string;

  @Metadata({ data: "json, name=EnvironmentClass" })
  environmentClass?: string;

  @Metadata({ data: "json, name=ExecutionRoleArn" })
  executionRoleArn: string;

  @Metadata({ data: "json, name=KmsKey" })
  kmsKey?: string;

  @Metadata({ data: "json, name=LoggingConfiguration" })
  loggingConfiguration?: CreateEnvironmentRequestBodyLoggingConfiguration;

  @Metadata({ data: "json, name=MaxWorkers" })
  maxWorkers?: number;

  @Metadata({ data: "json, name=MinWorkers" })
  minWorkers?: number;

  @Metadata({ data: "json, name=NetworkConfiguration" })
  networkConfiguration: CreateEnvironmentRequestBodyNetworkConfiguration;

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
  sourceBucketArn: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=WebserverAccessMode" })
  webserverAccessMode?: CreateEnvironmentRequestBodyWebserverAccessModeEnum;

  @Metadata({ data: "json, name=WeeklyMaintenanceWindowStart" })
  weeklyMaintenanceWindowStart?: string;
}


export class CreateEnvironmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateEnvironmentPathParams;

  @Metadata()
  headers: CreateEnvironmentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateEnvironmentRequestBody;
}


export class CreateEnvironmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createEnvironmentOutput?: shared.CreateEnvironmentOutput;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
