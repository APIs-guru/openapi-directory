import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SortActionsByEnum } from "./sortactionsbyenum";
import { SortOrderEnum } from "./sortorderenum";



export class ListActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionType" })
  actionType?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedAfter" })
  createdAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreatedBefore" })
  createdBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: SortActionsByEnum;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=SourceUri" })
  sourceUri?: string;
}
