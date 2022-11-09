import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NotebookInstanceSortKeyEnum } from "./notebookinstancesortkeyenum";
import { NotebookInstanceSortOrderEnum } from "./notebookinstancesortorderenum";
import { NotebookInstanceStatusEnum } from "./notebookinstancestatusenum";


export class ListNotebookInstancesInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdditionalCodeRepositoryEquals" })
  additionalCodeRepositoryEquals?: string;

  @Metadata({ data: "json, name=CreationTimeAfter" })
  creationTimeAfter?: Date;

  @Metadata({ data: "json, name=CreationTimeBefore" })
  creationTimeBefore?: Date;

  @Metadata({ data: "json, name=DefaultCodeRepositoryContains" })
  defaultCodeRepositoryContains?: string;

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

  @Metadata({ data: "json, name=NotebookInstanceLifecycleConfigNameContains" })
  notebookInstanceLifecycleConfigNameContains?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: NotebookInstanceSortKeyEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: NotebookInstanceSortOrderEnum;

  @Metadata({ data: "json, name=StatusEquals" })
  statusEquals?: NotebookInstanceStatusEnum;
}
