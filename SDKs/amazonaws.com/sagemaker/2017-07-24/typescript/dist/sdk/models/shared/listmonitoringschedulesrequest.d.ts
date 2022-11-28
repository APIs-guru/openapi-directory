import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringTypeEnum } from "./monitoringtypeenum";
import { MonitoringScheduleSortKeyEnum } from "./monitoringschedulesortkeyenum";
import { SortOrderEnum } from "./sortorderenum";
import { ScheduleStatusEnum } from "./schedulestatusenum";
export declare class ListMonitoringSchedulesRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    endpointName?: string;
    lastModifiedTimeAfter?: Date;
    lastModifiedTimeBefore?: Date;
    maxResults?: number;
    monitoringJobDefinitionName?: string;
    monitoringTypeEquals?: MonitoringTypeEnum;
    nameContains?: string;
    nextToken?: string;
    sortBy?: MonitoringScheduleSortKeyEnum;
    sortOrder?: SortOrderEnum;
    statusEquals?: ScheduleStatusEnum;
}
