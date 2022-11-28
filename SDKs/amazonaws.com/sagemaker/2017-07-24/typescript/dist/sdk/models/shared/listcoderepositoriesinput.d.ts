import { SpeakeasyBase } from "../../../internal/utils";
import { CodeRepositorySortByEnum } from "./coderepositorysortbyenum";
import { CodeRepositorySortOrderEnum } from "./coderepositorysortorderenum";
export declare class ListCodeRepositoriesInput extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    lastModifiedTimeAfter?: Date;
    lastModifiedTimeBefore?: Date;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    sortBy?: CodeRepositorySortByEnum;
    sortOrder?: CodeRepositorySortOrderEnum;
}
