import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Filter } from "./filter";
import { SortOrderEnum } from "./sortorderenum";


export class ListResolverQueryLogConfigsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters", elemType: shared.Filter })
  filters?: Filter[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: string;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
