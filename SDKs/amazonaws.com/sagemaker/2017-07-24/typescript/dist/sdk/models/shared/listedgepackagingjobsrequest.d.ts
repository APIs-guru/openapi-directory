import { SpeakeasyBase } from "../../../internal/utils";
import { ListEdgePackagingJobsSortByEnum } from "./listedgepackagingjobssortbyenum";
import { SortOrderEnum } from "./sortorderenum";
import { EdgePackagingJobStatusEnum } from "./edgepackagingjobstatusenum";
export declare class ListEdgePackagingJobsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    lastModifiedTimeAfter?: Date;
    lastModifiedTimeBefore?: Date;
    maxResults?: number;
    modelNameContains?: string;
    nameContains?: string;
    nextToken?: string;
    sortBy?: ListEdgePackagingJobsSortByEnum;
    sortOrder?: SortOrderEnum;
    statusEquals?: EdgePackagingJobStatusEnum;
}
