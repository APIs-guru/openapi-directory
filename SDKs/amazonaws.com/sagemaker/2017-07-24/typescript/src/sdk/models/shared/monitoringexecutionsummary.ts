import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecutionStatusEnum } from "./executionstatusenum";
import { MonitoringTypeEnum } from "./monitoringtypeenum";



// MonitoringExecutionSummary
/** 
 * Summary of information about the last monitoring job to run.
**/
export class MonitoringExecutionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=EndpointName" })
  endpointName?: string;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;

  @SpeakeasyMetadata({ data: "json, name=MonitoringExecutionStatus" })
  monitoringExecutionStatus: ExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=MonitoringJobDefinitionName" })
  monitoringJobDefinitionName?: string;

  @SpeakeasyMetadata({ data: "json, name=MonitoringScheduleName" })
  monitoringScheduleName: string;

  @SpeakeasyMetadata({ data: "json, name=MonitoringType" })
  monitoringType?: MonitoringTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ProcessingJobArn" })
  processingJobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ScheduledTime" })
  scheduledTime: Date;
}
