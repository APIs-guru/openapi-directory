import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringTypeEnum } from "./monitoringtypeenum";
import { MonitoringExecutionSortKeyEnum } from "./monitoringexecutionsortkeyenum";
import { SortOrderEnum } from "./sortorderenum";
import { ExecutionStatusEnum } from "./executionstatusenum";
export declare class ListMonitoringExecutionsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    endpointName?: string;
    lastModifiedTimeAfter?: Date;
    lastModifiedTimeBefore?: Date;
    maxResults?: number;
    monitoringJobDefinitionName?: string;
    monitoringScheduleName?: string;
    monitoringTypeEquals?: MonitoringTypeEnum;
    nextToken?: string;
    scheduledTimeAfter?: Date;
    scheduledTimeBefore?: Date;
    sortBy?: MonitoringExecutionSortKeyEnum;
    sortOrder?: SortOrderEnum;
    statusEquals?: ExecutionStatusEnum;
}
