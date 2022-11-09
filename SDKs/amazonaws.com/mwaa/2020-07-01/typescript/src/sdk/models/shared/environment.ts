import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=AirflowConfigurationOptions" })
  airflowConfigurationOptions?: Map<string, string>;

  @Metadata({ data: "json, name=AirflowVersion" })
  airflowVersion?: string;

  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=DagS3Path" })
  dagS3Path?: string;

  @Metadata({ data: "json, name=EnvironmentClass" })
  environmentClass?: string;

  @Metadata({ data: "json, name=ExecutionRoleArn" })
  executionRoleArn?: string;

  @Metadata({ data: "json, name=KmsKey" })
  kmsKey?: string;

  @Metadata({ data: "json, name=LastUpdate" })
  lastUpdate?: LastUpdate;

  @Metadata({ data: "json, name=LoggingConfiguration" })
  loggingConfiguration?: LoggingConfiguration;

  @Metadata({ data: "json, name=MaxWorkers" })
  maxWorkers?: number;

  @Metadata({ data: "json, name=MinWorkers" })
  minWorkers?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=NetworkConfiguration" })
  networkConfiguration?: NetworkConfiguration;

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

  @Metadata({ data: "json, name=ServiceRoleArn" })
  serviceRoleArn?: string;

  @Metadata({ data: "json, name=SourceBucketArn" })
  sourceBucketArn?: string;

  @Metadata({ data: "json, name=Status" })
  status?: EnvironmentStatusEnum;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=WebserverAccessMode" })
  webserverAccessMode?: WebserverAccessModeEnum;

  @Metadata({ data: "json, name=WebserverUrl" })
  webserverUrl?: string;

  @Metadata({ data: "json, name=WeeklyMaintenanceWindowStart" })
  weeklyMaintenanceWindowStart?: string;
}
