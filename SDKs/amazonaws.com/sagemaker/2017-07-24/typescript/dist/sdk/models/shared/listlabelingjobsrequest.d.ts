import { SpeakeasyBase } from "../../../internal/utils";
import { SortByEnum } from "./sortbyenum";
import { SortOrderEnum } from "./sortorderenum";
import { LabelingJobStatusEnum } from "./labelingjobstatusenum";
export declare class ListLabelingJobsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    lastModifiedTimeAfter?: Date;
    lastModifiedTimeBefore?: Date;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    sortBy?: SortByEnum;
    sortOrder?: SortOrderEnum;
    statusEquals?: LabelingJobStatusEnum;
}
