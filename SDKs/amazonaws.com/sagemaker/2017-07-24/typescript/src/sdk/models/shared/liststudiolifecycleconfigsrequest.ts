import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StudioLifecycleConfigAppTypeEnum } from "./studiolifecycleconfigapptypeenum";
import { StudioLifecycleConfigSortKeyEnum } from "./studiolifecycleconfigsortkeyenum";
import { SortOrderEnum } from "./sortorderenum";



export class ListStudioLifecycleConfigsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppTypeEquals" })
  appTypeEquals?: StudioLifecycleConfigAppTypeEnum;

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
  sortBy?: StudioLifecycleConfigSortKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
