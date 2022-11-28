import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserProfileSortKeyEnum } from "./userprofilesortkeyenum";
import { SortOrderEnum } from "./sortorderenum";



export class ListUserProfilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainIdEquals" })
  domainIdEquals?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: UserProfileSortKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=UserProfileNameContains" })
  userProfileNameContains?: string;
}
