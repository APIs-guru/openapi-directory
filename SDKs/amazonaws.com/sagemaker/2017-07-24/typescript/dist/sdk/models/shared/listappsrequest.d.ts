import { SpeakeasyBase } from "../../../internal/utils";
import { AppSortKeyEnum } from "./appsortkeyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListAppsRequest extends SpeakeasyBase {
    domainIdEquals?: string;
    maxResults?: number;
    nextToken?: string;
    sortBy?: AppSortKeyEnum;
    sortOrder?: SortOrderEnum;
    userProfileNameEquals?: string;
}
