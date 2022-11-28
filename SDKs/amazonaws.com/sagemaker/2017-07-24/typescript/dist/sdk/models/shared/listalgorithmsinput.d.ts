import { SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmSortByEnum } from "./algorithmsortbyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListAlgorithmsInput extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    sortBy?: AlgorithmSortByEnum;
    sortOrder?: SortOrderEnum;
}
