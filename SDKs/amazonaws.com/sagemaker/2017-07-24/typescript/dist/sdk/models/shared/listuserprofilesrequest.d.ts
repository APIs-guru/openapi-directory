import { SpeakeasyBase } from "../../../internal/utils";
import { UserProfileSortKeyEnum } from "./userprofilesortkeyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListUserProfilesRequest extends SpeakeasyBase {
    domainIdEquals?: string;
    maxResults?: number;
    nextToken?: string;
    sortBy?: UserProfileSortKeyEnum;
    sortOrder?: SortOrderEnum;
    userProfileNameContains?: string;
}
