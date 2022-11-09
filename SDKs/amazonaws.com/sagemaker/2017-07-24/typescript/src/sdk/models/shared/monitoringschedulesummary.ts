import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScheduleStatusEnum } from "./schedulestatusenum";
import { MonitoringTypeEnum } from "./monitoringtypeenum";


// MonitoringScheduleSummary
/** 
 * Summarizes the monitoring schedule.
**/
export class MonitoringScheduleSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=EndpointName" })
  endpointName?: string;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;

  @Metadata({ data: "json, name=MonitoringJobDefinitionName" })
  monitoringJobDefinitionName?: string;

  @Metadata({ data: "json, name=MonitoringScheduleArn" })
  monitoringScheduleArn: string;

  @Metadata({ data: "json, name=MonitoringScheduleName" })
  monitoringScheduleName: string;

  @Metadata({ data: "json, name=MonitoringScheduleStatus" })
  monitoringScheduleStatus: ScheduleStatusEnum;

  @Metadata({ data: "json, name=MonitoringType" })
  monitoringType?: MonitoringTypeEnum;
}
