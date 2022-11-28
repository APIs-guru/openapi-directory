import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectSortByEnum } from "./projectsortbyenum";
import { ProjectSortOrderEnum } from "./projectsortorderenum";
export declare class ListProjectsInput extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    sortBy?: ProjectSortByEnum;
    sortOrder?: ProjectSortOrderEnum;
}
