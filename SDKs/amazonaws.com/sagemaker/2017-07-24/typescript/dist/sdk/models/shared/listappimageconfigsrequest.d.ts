import { SpeakeasyBase } from "../../../internal/utils";
import { AppImageConfigSortKeyEnum } from "./appimageconfigsortkeyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListAppImageConfigsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    maxResults?: number;
    modifiedTimeAfter?: Date;
    modifiedTimeBefore?: Date;
    nameContains?: string;
    nextToken?: string;
    sortBy?: AppImageConfigSortKeyEnum;
    sortOrder?: SortOrderEnum;
}
