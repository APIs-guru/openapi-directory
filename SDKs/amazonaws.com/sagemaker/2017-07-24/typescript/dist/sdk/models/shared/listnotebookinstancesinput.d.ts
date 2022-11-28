import { SpeakeasyBase } from "../../../internal/utils";
import { NotebookInstanceSortKeyEnum } from "./notebookinstancesortkeyenum";
import { NotebookInstanceSortOrderEnum } from "./notebookinstancesortorderenum";
import { NotebookInstanceStatusEnum } from "./notebookinstancestatusenum";
export declare class ListNotebookInstancesInput extends SpeakeasyBase {
    additionalCodeRepositoryEquals?: string;
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    defaultCodeRepositoryContains?: string;
    lastModifiedTimeAfter?: Date;
    lastModifiedTimeBefore?: Date;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    notebookInstanceLifecycleConfigNameContains?: string;
    sortBy?: NotebookInstanceSortKeyEnum;
    sortOrder?: NotebookInstanceSortOrderEnum;
    statusEquals?: NotebookInstanceStatusEnum;
}
