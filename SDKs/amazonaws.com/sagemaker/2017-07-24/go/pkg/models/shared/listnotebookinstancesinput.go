package shared

import (
"time")

type ListNotebookInstancesInput struct {
    AdditionalCodeRepositoryEquals *string `json:"AdditionalCodeRepositoryEquals,omitempty"`
    CreationTimeAfter *time.Time `json:"CreationTimeAfter,omitempty"`
    CreationTimeBefore *time.Time `json:"CreationTimeBefore,omitempty"`
    DefaultCodeRepositoryContains *string `json:"DefaultCodeRepositoryContains,omitempty"`
    LastModifiedTimeAfter *time.Time `json:"LastModifiedTimeAfter,omitempty"`
    LastModifiedTimeBefore *time.Time `json:"LastModifiedTimeBefore,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NameContains *string `json:"NameContains,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    NotebookInstanceLifecycleConfigNameContains *string `json:"NotebookInstanceLifecycleConfigNameContains,omitempty"`
    SortBy *NotebookInstanceSortKeyEnum `json:"SortBy,omitempty"`
    SortOrder *NotebookInstanceSortOrderEnum `json:"SortOrder,omitempty"`
    StatusEquals *NotebookInstanceStatusEnum `json:"StatusEquals,omitempty"`
    
}

