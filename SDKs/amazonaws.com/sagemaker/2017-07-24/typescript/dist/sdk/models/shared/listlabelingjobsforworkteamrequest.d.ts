import { SpeakeasyBase } from "../../../internal/utils";
import { ListLabelingJobsForWorkteamSortByOptionsEnum } from "./listlabelingjobsforworkteamsortbyoptionsenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListLabelingJobsForWorkteamRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    jobReferenceCodeContains?: string;
    maxResults?: number;
    nextToken?: string;
    sortBy?: ListLabelingJobsForWorkteamSortByOptionsEnum;
    sortOrder?: SortOrderEnum;
    workteamArn: string;
}
