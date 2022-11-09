import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ListWorkforcesSortByOptionsEnum } from "./listworkforcessortbyoptionsenum";
import { SortOrderEnum } from "./sortorderenum";


export class ListWorkforcesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NameContains" })
  nameContains?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: ListWorkforcesSortByOptionsEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
