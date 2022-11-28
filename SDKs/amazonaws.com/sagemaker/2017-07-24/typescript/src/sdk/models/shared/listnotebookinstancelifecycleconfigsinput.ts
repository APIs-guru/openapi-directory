import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotebookInstanceLifecycleConfigSortKeyEnum } from "./notebookinstancelifecycleconfigsortkeyenum";
import { NotebookInstanceLifecycleConfigSortOrderEnum } from "./notebookinstancelifecycleconfigsortorderenum";



export class ListNotebookInstanceLifecycleConfigsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTimeAfter" })
  creationTimeAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreationTimeBefore" })
  creationTimeBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTimeAfter" })
  lastModifiedTimeAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTimeBefore" })
  lastModifiedTimeBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NameContains" })
  nameContains?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: NotebookInstanceLifecycleConfigSortKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: NotebookInstanceLifecycleConfigSortOrderEnum;
}
