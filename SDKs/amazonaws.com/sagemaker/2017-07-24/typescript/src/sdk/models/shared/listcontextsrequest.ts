import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SortContextsByEnum } from "./sortcontextsbyenum";
import { SortOrderEnum } from "./sortorderenum";



export class ListContextsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContextType" })
  contextType?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedAfter" })
  createdAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreatedBefore" })
  createdBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: SortContextsByEnum;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=SourceUri" })
  sourceUri?: string;
}
