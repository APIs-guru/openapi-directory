import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringExecutionSummary } from "./monitoringexecutionsummary";
import { MonitoringScheduleConfig } from "./monitoringscheduleconfig";
import { ScheduleStatusEnum } from "./schedulestatusenum";
import { MonitoringTypeEnum } from "./monitoringtypeenum";
import { Tag } from "./tag";
/**
 * A schedule for a model monitoring job. For information about model monitor, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model Monitor</a>.
**/
export declare class MonitoringSchedule extends SpeakeasyBase {
    creationTime?: Date;
    endpointName?: string;
    failureReason?: string;
    lastModifiedTime?: Date;
    lastMonitoringExecutionSummary?: MonitoringExecutionSummary;
    monitoringScheduleArn?: string;
    monitoringScheduleConfig?: MonitoringScheduleConfig;
    monitoringScheduleName?: string;
    monitoringScheduleStatus?: ScheduleStatusEnum;
    monitoringType?: MonitoringTypeEnum;
    tags?: Tag[];
}
