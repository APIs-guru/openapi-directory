import { SpeakeasyBase } from "../../../internal/utils";
import { ModelPackageGroupSortByEnum } from "./modelpackagegroupsortbyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListModelPackageGroupsInput extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    sortBy?: ModelPackageGroupSortByEnum;
    sortOrder?: SortOrderEnum;
}
