import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MonitoringJobDefinition } from "./monitoringjobdefinition";
import { MonitoringTypeEnum } from "./monitoringtypeenum";
import { ScheduleConfig } from "./scheduleconfig";


// MonitoringScheduleConfig
/** 
 * Configures the monitoring schedule and defines the monitoring job.
**/
export class MonitoringScheduleConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=MonitoringJobDefinition" })
  monitoringJobDefinition?: MonitoringJobDefinition;

  @Metadata({ data: "json, name=MonitoringJobDefinitionName" })
  monitoringJobDefinitionName?: string;

  @Metadata({ data: "json, name=MonitoringType" })
  monitoringType?: MonitoringTypeEnum;

  @Metadata({ data: "json, name=ScheduleConfig" })
  scheduleConfig?: ScheduleConfig;
}
