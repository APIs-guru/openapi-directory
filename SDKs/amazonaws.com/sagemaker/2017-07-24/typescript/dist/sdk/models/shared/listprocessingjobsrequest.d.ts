import { SpeakeasyBase } from "../../../internal/utils";
import { SortByEnum } from "./sortbyenum";
import { SortOrderEnum } from "./sortorderenum";
import { ProcessingJobStatusEnum } from "./processingjobstatusenum";
export declare class ListProcessingJobsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    lastModifiedTimeAfter?: Date;
    lastModifiedTimeBefore?: Date;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    sortBy?: SortByEnum;
    sortOrder?: SortOrderEnum;
    statusEquals?: ProcessingJobStatusEnum;
}
