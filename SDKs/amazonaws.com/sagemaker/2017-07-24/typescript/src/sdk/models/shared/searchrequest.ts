import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { SearchExpression } from "./searchexpression";
import { SearchSortOrderEnum } from "./searchsortorderenum";


export class SearchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Resource" })
  resource: ResourceTypeEnum;

  @Metadata({ data: "json, name=SearchExpression" })
  searchExpression?: SearchExpression;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: string;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SearchSortOrderEnum;
}
