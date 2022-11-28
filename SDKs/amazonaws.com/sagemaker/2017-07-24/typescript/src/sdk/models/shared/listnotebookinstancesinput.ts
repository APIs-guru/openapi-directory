import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotebookInstanceSortKeyEnum } from "./notebookinstancesortkeyenum";
import { NotebookInstanceSortOrderEnum } from "./notebookinstancesortorderenum";
import { NotebookInstanceStatusEnum } from "./notebookinstancestatusenum";



export class ListNotebookInstancesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalCodeRepositoryEquals" })
  additionalCodeRepositoryEquals?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTimeAfter" })
  creationTimeAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreationTimeBefore" })
  creationTimeBefore?: Date;

  @SpeakeasyMetadata({ data: "json, name=DefaultCodeRepositoryContains" })
  defaultCodeRepositoryContains?: string;

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

  @SpeakeasyMetadata({ data: "json, name=NotebookInstanceLifecycleConfigNameContains" })
  notebookInstanceLifecycleConfigNameContains?: string;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: NotebookInstanceSortKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: NotebookInstanceSortOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusEquals" })
  statusEquals?: NotebookInstanceStatusEnum;
}
