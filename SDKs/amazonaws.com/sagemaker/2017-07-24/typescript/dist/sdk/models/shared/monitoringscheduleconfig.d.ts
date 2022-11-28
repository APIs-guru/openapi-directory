import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringJobDefinition } from "./monitoringjobdefinition";
import { MonitoringTypeEnum } from "./monitoringtypeenum";
import { ScheduleConfig } from "./scheduleconfig";
/**
 * Configures the monitoring schedule and defines the monitoring job.
**/
export declare class MonitoringScheduleConfig extends SpeakeasyBase {
    monitoringJobDefinition?: MonitoringJobDefinition;
    monitoringJobDefinitionName?: string;
    monitoringType?: MonitoringTypeEnum;
    scheduleConfig?: ScheduleConfig;
}
