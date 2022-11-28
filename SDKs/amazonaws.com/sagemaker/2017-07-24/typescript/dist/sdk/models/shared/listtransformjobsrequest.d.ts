import { SpeakeasyBase } from "../../../internal/utils";
import { SortByEnum } from "./sortbyenum";
import { SortOrderEnum } from "./sortorderenum";
import { TransformJobStatusEnum } from "./transformjobstatusenum";
export declare class ListTransformJobsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    lastModifiedTimeAfter?: Date;
    lastModifiedTimeBefore?: Date;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    sortBy?: SortByEnum;
    sortOrder?: SortOrderEnum;
    statusEquals?: TransformJobStatusEnum;
}
