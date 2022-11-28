import { SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterTuningJobSortByOptionsEnum } from "./hyperparametertuningjobsortbyoptionsenum";
import { SortOrderEnum } from "./sortorderenum";
import { HyperParameterTuningJobStatusEnum } from "./hyperparametertuningjobstatusenum";
export declare class ListHyperParameterTuningJobsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    lastModifiedTimeAfter?: Date;
    lastModifiedTimeBefore?: Date;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    sortBy?: HyperParameterTuningJobSortByOptionsEnum;
    sortOrder?: SortOrderEnum;
    statusEquals?: HyperParameterTuningJobStatusEnum;
}
