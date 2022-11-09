import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MonitoringExecutionSummary } from "./monitoringexecutionsummary";
import { MonitoringScheduleConfig } from "./monitoringscheduleconfig";
import { ScheduleStatusEnum } from "./schedulestatusenum";
import { MonitoringTypeEnum } from "./monitoringtypeenum";


export class DescribeMonitoringScheduleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=EndpointName" })
  endpointName?: string;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;

  @Metadata({ data: "json, name=LastMonitoringExecutionSummary" })
  lastMonitoringExecutionSummary?: MonitoringExecutionSummary;

  @Metadata({ data: "json, name=MonitoringScheduleArn" })
  monitoringScheduleArn: string;

  @Metadata({ data: "json, name=MonitoringScheduleConfig" })
  monitoringScheduleConfig: MonitoringScheduleConfig;

  @Metadata({ data: "json, name=MonitoringScheduleName" })
  monitoringScheduleName: string;

  @Metadata({ data: "json, name=MonitoringScheduleStatus" })
  monitoringScheduleStatus: ScheduleStatusEnum;

  @Metadata({ data: "json, name=MonitoringType" })
  monitoringType?: MonitoringTypeEnum;
}
