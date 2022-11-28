import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionStatusEnum } from "./executionstatusenum";
import { MonitoringTypeEnum } from "./monitoringtypeenum";
/**
 * Summary of information about the last monitoring job to run.
**/
export declare class MonitoringExecutionSummary extends SpeakeasyBase {
    creationTime: Date;
    endpointName?: string;
    failureReason?: string;
    lastModifiedTime: Date;
    monitoringExecutionStatus: ExecutionStatusEnum;
    monitoringJobDefinitionName?: string;
    monitoringScheduleName: string;
    monitoringType?: MonitoringTypeEnum;
    processingJobArn?: string;
    scheduledTime: Date;
}
