import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScheduleStatusEnum } from "./schedulestatusenum";
import { MonitoringTypeEnum } from "./monitoringtypeenum";



// MonitoringScheduleSummary
/** 
 * Summarizes the monitoring schedule.
**/
export class MonitoringScheduleSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=EndpointName" })
  endpointName?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime: Date;

  @SpeakeasyMetadata({ data: "json, name=MonitoringJobDefinitionName" })
  monitoringJobDefinitionName?: string;

  @SpeakeasyMetadata({ data: "json, name=MonitoringScheduleArn" })
  monitoringScheduleArn: string;

  @SpeakeasyMetadata({ data: "json, name=MonitoringScheduleName" })
  monitoringScheduleName: string;

  @SpeakeasyMetadata({ data: "json, name=MonitoringScheduleStatus" })
  monitoringScheduleStatus: ScheduleStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=MonitoringType" })
  monitoringType?: MonitoringTypeEnum;
}
