import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitoringExecutionSummary } from "./monitoringexecutionsummary";
import { MonitoringScheduleConfig } from "./monitoringscheduleconfig";
import { ScheduleStatusEnum } from "./schedulestatusenum";
import { MonitoringTypeEnum } from "./monitoringtypeenum";



export class DescribeMonitoringScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=EndpointName" })
  endpointName?: string;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;

  @SpeakeasyMetadata({ data: "json, name=LastMonitoringExecutionSummary" })
  lastMonitoringExecutionSummary?: MonitoringExecutionSummary;

  @SpeakeasyMetadata({ data: "json, name=MonitoringScheduleArn" })
  monitoringScheduleArn: string;

  @SpeakeasyMetadata({ data: "json, name=MonitoringScheduleConfig" })
  monitoringScheduleConfig: MonitoringScheduleConfig;

  @SpeakeasyMetadata({ data: "json, name=MonitoringScheduleName" })
  monitoringScheduleName: string;

  @SpeakeasyMetadata({ data: "json, name=MonitoringScheduleStatus" })
  monitoringScheduleStatus: ScheduleStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=MonitoringType" })
  monitoringType?: MonitoringTypeEnum;
}
