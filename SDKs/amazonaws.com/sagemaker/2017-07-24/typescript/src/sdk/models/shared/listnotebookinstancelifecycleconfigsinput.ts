import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NotebookInstanceLifecycleConfigSortKeyEnum } from "./notebookinstancelifecycleconfigsortkeyenum";
import { NotebookInstanceLifecycleConfigSortOrderEnum } from "./notebookinstancelifecycleconfigsortorderenum";


export class ListNotebookInstanceLifecycleConfigsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTimeAfter" })
  creationTimeAfter?: Date;

  @Metadata({ data: "json, name=CreationTimeBefore" })
  creationTimeBefore?: Date;

  @Metadata({ data: "json, name=LastModifiedTimeAfter" })
  lastModifiedTimeAfter?: Date;

  @Metadata({ data: "json, name=LastModifiedTimeBefore" })
  lastModifiedTimeBefore?: Date;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NameContains" })
  nameContains?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: NotebookInstanceLifecycleConfigSortKeyEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: NotebookInstanceLifecycleConfigSortOrderEnum;
}
