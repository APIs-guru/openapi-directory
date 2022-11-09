import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserProfileSortKeyEnum } from "./userprofilesortkeyenum";
import { SortOrderEnum } from "./sortorderenum";


export class ListUserProfilesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainIdEquals" })
  domainIdEquals?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: UserProfileSortKeyEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;

  @Metadata({ data: "json, name=UserProfileNameContains" })
  userProfileNameContains?: string;
}
