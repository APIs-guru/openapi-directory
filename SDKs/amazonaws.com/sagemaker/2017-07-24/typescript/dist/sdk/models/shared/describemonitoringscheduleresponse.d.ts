import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringExecutionSummary } from "./monitoringexecutionsummary";
import { MonitoringScheduleConfig } from "./monitoringscheduleconfig";
import { ScheduleStatusEnum } from "./schedulestatusenum";
import { MonitoringTypeEnum } from "./monitoringtypeenum";
export declare class DescribeMonitoringScheduleResponse extends SpeakeasyBase {
    creationTime: Date;
    endpointName?: string;
    failureReason?: string;
    lastModifiedTime: Date;
    lastMonitoringExecutionSummary?: MonitoringExecutionSummary;
    monitoringScheduleArn: string;
    monitoringScheduleConfig: MonitoringScheduleConfig;
    monitoringScheduleName: string;
    monitoringScheduleStatus: ScheduleStatusEnum;
    monitoringType?: MonitoringTypeEnum;
}
