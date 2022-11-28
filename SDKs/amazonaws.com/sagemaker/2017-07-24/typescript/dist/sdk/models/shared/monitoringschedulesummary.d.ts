import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduleStatusEnum } from "./schedulestatusenum";
import { MonitoringTypeEnum } from "./monitoringtypeenum";
/**
 * Summarizes the monitoring schedule.
**/
export declare class MonitoringScheduleSummary extends SpeakeasyBase {
    creationTime: Date;
    endpointName?: string;
    lastModifiedTime: Date;
    monitoringJobDefinitionName?: string;
    monitoringScheduleArn: string;
    monitoringScheduleName: string;
    monitoringScheduleStatus: ScheduleStatusEnum;
    monitoringType?: MonitoringTypeEnum;
}
