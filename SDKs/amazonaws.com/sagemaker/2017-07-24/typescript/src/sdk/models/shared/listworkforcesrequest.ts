import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListWorkforcesSortByOptionsEnum } from "./listworkforcessortbyoptionsenum";
import { SortOrderEnum } from "./sortorderenum";



export class ListWorkforcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NameContains" })
  nameContains?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: ListWorkforcesSortByOptionsEnum;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
