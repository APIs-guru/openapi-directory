import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AppImageConfigSortKeyEnum } from "./appimageconfigsortkeyenum";
import { SortOrderEnum } from "./sortorderenum";


export class ListAppImageConfigsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTimeAfter" })
  creationTimeAfter?: Date;

  @Metadata({ data: "json, name=CreationTimeBefore" })
  creationTimeBefore?: Date;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=ModifiedTimeAfter" })
  modifiedTimeAfter?: Date;

  @Metadata({ data: "json, name=ModifiedTimeBefore" })
  modifiedTimeBefore?: Date;

  @Metadata({ data: "json, name=NameContains" })
  nameContains?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: AppImageConfigSortKeyEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
