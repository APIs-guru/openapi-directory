import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateEnvironmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Name" })
  name: string;
}


export class CreateEnvironmentHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateEnvironmentRequestBodyLoggingConfiguration
/** 
 * Defines the Apache Airflow logs to send to CloudWatch Logs: <code>DagProcessingLogs</code>, <code>SchedulerLogs</code>, <code>TaskLogs</code>, <code>WebserverLogs</code>, <code>WorkerLogs</code>.
**/
export class CreateEnvironmentRequestBodyLoggingConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DagProcessingLogs" })
  dagProcessingLogs?: shared.ModuleLoggingConfigurationInput;

  @SpeakeasyMetadata({ data: "json, name=SchedulerLogs" })
  schedulerLogs?: shared.ModuleLoggingConfigurationInput;

  @SpeakeasyMetadata({ data: "json, name=TaskLogs" })
  taskLogs?: shared.ModuleLoggingConfigurationInput;

  @SpeakeasyMetadata({ data: "json, name=WebserverLogs" })
  webserverLogs?: shared.ModuleLoggingConfigurationInput;

  @SpeakeasyMetadata({ data: "json, name=WorkerLogs" })
  workerLogs?: shared.ModuleLoggingConfigurationInput;
}


// CreateEnvironmentRequestBodyNetworkConfiguration
/** 
 * The VPC networking components used to secure and enable network traffic between the AWS resources for your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.
**/
export class CreateEnvironmentRequestBodyNetworkConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=SubnetIds" })
  subnetIds?: string[];
}

export enum CreateEnvironmentRequestBodyWebserverAccessModeEnum {
    PrivateOnly = "PRIVATE_ONLY",
    PublicOnly = "PUBLIC_ONLY"
}


export class CreateEnvironmentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AirflowConfigurationOptions" })
  airflowConfigurationOptions?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=AirflowVersion" })
  airflowVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=DagS3Path" })
  dagS3Path: string;

  @SpeakeasyMetadata({ data: "json, name=EnvironmentClass" })
  environmentClass?: string;

  @SpeakeasyMetadata({ data: "json, name=ExecutionRoleArn" })
  executionRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=KmsKey" })
  kmsKey?: string;

  @SpeakeasyMetadata({ data: "json, name=LoggingConfiguration" })
  loggingConfiguration?: CreateEnvironmentRequestBodyLoggingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=MaxWorkers" })
  maxWorkers?: number;

  @SpeakeasyMetadata({ data: "json, name=MinWorkers" })
  minWorkers?: number;

  @SpeakeasyMetadata({ data: "json, name=NetworkConfiguration" })
  networkConfiguration: CreateEnvironmentRequestBodyNetworkConfiguration;

  @SpeakeasyMetadata({ data: "json, name=PluginsS3ObjectVersion" })
  pluginsS3ObjectVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=PluginsS3Path" })
  pluginsS3Path?: string;

  @SpeakeasyMetadata({ data: "json, name=RequirementsS3ObjectVersion" })
  requirementsS3ObjectVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=RequirementsS3Path" })
  requirementsS3Path?: string;

  @SpeakeasyMetadata({ data: "json, name=Schedulers" })
  schedulers?: number;

  @SpeakeasyMetadata({ data: "json, name=SourceBucketArn" })
  sourceBucketArn: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=WebserverAccessMode" })
  webserverAccessMode?: CreateEnvironmentRequestBodyWebserverAccessModeEnum;

  @SpeakeasyMetadata({ data: "json, name=WeeklyMaintenanceWindowStart" })
  weeklyMaintenanceWindowStart?: string;
}


export class CreateEnvironmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateEnvironmentPathParams;

  @SpeakeasyMetadata()
  headers: CreateEnvironmentHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateEnvironmentRequestBody;
}


export class CreateEnvironmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createEnvironmentOutput?: shared.CreateEnvironmentOutput;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationException?: any;
}
