import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SortActionsByEnum } from "./sortactionsbyenum";
import { SortOrderEnum } from "./sortorderenum";


export class ListActionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActionType" })
  actionType?: string;

  @Metadata({ data: "json, name=CreatedAfter" })
  createdAfter?: Date;

  @Metadata({ data: "json, name=CreatedBefore" })
  createdBefore?: Date;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: SortActionsByEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;

  @Metadata({ data: "json, name=SourceUri" })
  sourceUri?: string;
}
