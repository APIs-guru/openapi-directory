import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LastUpdate } from "./lastupdate";
import { LoggingConfiguration } from "./loggingconfiguration";
import { NetworkConfiguration } from "./networkconfiguration";
import { EnvironmentStatusEnum } from "./environmentstatusenum";
import { WebserverAccessModeEnum } from "./webserveraccessmodeenum";



// Environment
/** 
 * The Amazon Managed Workflows for Apache Airflow (MWAA) environment.
**/
export class Environment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AirflowConfigurationOptions" })
  airflowConfigurationOptions?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=AirflowVersion" })
  airflowVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=DagS3Path" })
  dagS3Path?: string;

  @SpeakeasyMetadata({ data: "json, name=EnvironmentClass" })
  environmentClass?: string;

  @SpeakeasyMetadata({ data: "json, name=ExecutionRoleArn" })
  executionRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=KmsKey" })
  kmsKey?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdate" })
  lastUpdate?: LastUpdate;

  @SpeakeasyMetadata({ data: "json, name=LoggingConfiguration" })
  loggingConfiguration?: LoggingConfiguration;

  @SpeakeasyMetadata({ data: "json, name=MaxWorkers" })
  maxWorkers?: number;

  @SpeakeasyMetadata({ data: "json, name=MinWorkers" })
  minWorkers?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=NetworkConfiguration" })
  networkConfiguration?: NetworkConfiguration;

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

  @SpeakeasyMetadata({ data: "json, name=ServiceRoleArn" })
  serviceRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceBucketArn" })
  sourceBucketArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: EnvironmentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=WebserverAccessMode" })
  webserverAccessMode?: WebserverAccessModeEnum;

  @SpeakeasyMetadata({ data: "json, name=WebserverUrl" })
  webserverUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=WeeklyMaintenanceWindowStart" })
  weeklyMaintenanceWindowStart?: string;
}
