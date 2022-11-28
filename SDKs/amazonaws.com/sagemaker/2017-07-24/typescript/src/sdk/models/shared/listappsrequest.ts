import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppSortKeyEnum } from "./appsortkeyenum";
import { SortOrderEnum } from "./sortorderenum";



export class ListAppsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainIdEquals" })
  domainIdEquals?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: AppSortKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=UserProfileNameEquals" })
  userProfileNameEquals?: string;
}
