import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListWorkteamsSortByOptionsEnum } from "./listworkteamssortbyoptionsenum";
import { SortOrderEnum } from "./sortorderenum";



export class ListWorkteamsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NameContains" })
  nameContains?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: ListWorkteamsSortByOptionsEnum;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
