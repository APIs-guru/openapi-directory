import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AppSortKeyEnum } from "./appsortkeyenum";
import { SortOrderEnum } from "./sortorderenum";


export class ListAppsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainIdEquals" })
  domainIdEquals?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: AppSortKeyEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;

  @Metadata({ data: "json, name=UserProfileNameEquals" })
  userProfileNameEquals?: string;
}
