import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExecutionStatusEnum } from "./executionstatusenum";
import { MonitoringTypeEnum } from "./monitoringtypeenum";


// MonitoringExecutionSummary
/** 
 * Summary of information about the last monitoring job to run.
**/
export class MonitoringExecutionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=EndpointName" })
  endpointName?: string;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;

  @Metadata({ data: "json, name=MonitoringExecutionStatus" })
  monitoringExecutionStatus: ExecutionStatusEnum;

  @Metadata({ data: "json, name=MonitoringJobDefinitionName" })
  monitoringJobDefinitionName?: string;

  @Metadata({ data: "json, name=MonitoringScheduleName" })
  monitoringScheduleName: string;

  @Metadata({ data: "json, name=MonitoringType" })
  monitoringType?: MonitoringTypeEnum;

  @Metadata({ data: "json, name=ProcessingJobArn" })
  processingJobArn?: string;

  @Metadata({ data: "json, name=ScheduledTime" })
  scheduledTime: Date;
}
