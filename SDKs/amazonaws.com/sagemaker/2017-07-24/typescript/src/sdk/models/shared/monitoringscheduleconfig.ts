import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitoringJobDefinition } from "./monitoringjobdefinition";
import { MonitoringTypeEnum } from "./monitoringtypeenum";
import { ScheduleConfig } from "./scheduleconfig";



// MonitoringScheduleConfig
/** 
 * Configures the monitoring schedule and defines the monitoring job.
**/
export class MonitoringScheduleConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MonitoringJobDefinition" })
  monitoringJobDefinition?: MonitoringJobDefinition;

  @SpeakeasyMetadata({ data: "json, name=MonitoringJobDefinitionName" })
  monitoringJobDefinitionName?: string;

  @SpeakeasyMetadata({ data: "json, name=MonitoringType" })
  monitoringType?: MonitoringTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ScheduleConfig" })
  scheduleConfig?: ScheduleConfig;
}
