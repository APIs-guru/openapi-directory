import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppImageConfigSortKeyEnum } from "./appimageconfigsortkeyenum";
import { SortOrderEnum } from "./sortorderenum";



export class ListAppImageConfigsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTimeAfter" })
  creationTimeAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreationTimeBefore" })
  creationTimeBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=ModifiedTimeAfter" })
  modifiedTimeAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=ModifiedTimeBefore" })
  modifiedTimeBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=NameContains" })
  nameContains?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: AppImageConfigSortKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
