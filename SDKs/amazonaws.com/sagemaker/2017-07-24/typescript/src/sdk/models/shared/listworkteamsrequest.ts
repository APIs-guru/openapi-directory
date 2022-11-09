import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ListWorkteamsSortByOptionsEnum } from "./listworkteamssortbyoptionsenum";
import { SortOrderEnum } from "./sortorderenum";


export class ListWorkteamsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NameContains" })
  nameContains?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: ListWorkteamsSortByOptionsEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
