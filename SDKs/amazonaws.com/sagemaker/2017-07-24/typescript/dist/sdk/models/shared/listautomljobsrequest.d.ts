import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMlSortByEnum } from "./automlsortbyenum";
import { AutoMlSortOrderEnum } from "./automlsortorderenum";
import { AutoMlJobStatusEnum } from "./automljobstatusenum";
export declare class ListAutoMlJobsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    lastModifiedTimeAfter?: Date;
    lastModifiedTimeBefore?: Date;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    sortBy?: AutoMlSortByEnum;
    sortOrder?: AutoMlSortOrderEnum;
    statusEquals?: AutoMlJobStatusEnum;
}
