import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { SearchExpression } from "./searchexpression";
import { SearchSortOrderEnum } from "./searchsortorderenum";



export class SearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Resource" })
  resource: ResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SearchExpression" })
  searchExpression?: SearchExpression;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: string;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: SearchSortOrderEnum;
}
