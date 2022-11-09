import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SortContextsByEnum } from "./sortcontextsbyenum";
import { SortOrderEnum } from "./sortorderenum";


export class ListContextsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContextType" })
  contextType?: string;

  @Metadata({ data: "json, name=CreatedAfter" })
  createdAfter?: Date;

  @Metadata({ data: "json, name=CreatedBefore" })
  createdBefore?: Date;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: SortContextsByEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;

  @Metadata({ data: "json, name=SourceUri" })
  sourceUri?: string;
}
