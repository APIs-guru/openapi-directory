import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StudioLifecycleConfigAppTypeEnum } from "./studiolifecycleconfigapptypeenum";
import { StudioLifecycleConfigSortKeyEnum } from "./studiolifecycleconfigsortkeyenum";
import { SortOrderEnum } from "./sortorderenum";


export class ListStudioLifecycleConfigsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppTypeEquals" })
  appTypeEquals?: StudioLifecycleConfigAppTypeEnum;

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
  sortBy?: StudioLifecycleConfigSortKeyEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
