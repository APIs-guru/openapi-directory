import { SpeakeasyBase } from "../../../internal/utils";
import { NotebookInstanceLifecycleConfigSortKeyEnum } from "./notebookinstancelifecycleconfigsortkeyenum";
import { NotebookInstanceLifecycleConfigSortOrderEnum } from "./notebookinstancelifecycleconfigsortorderenum";
export declare class ListNotebookInstanceLifecycleConfigsInput extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    lastModifiedTimeAfter?: Date;
    lastModifiedTimeBefore?: Date;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    sortBy?: NotebookInstanceLifecycleConfigSortKeyEnum;
    sortOrder?: NotebookInstanceLifecycleConfigSortOrderEnum;
}
