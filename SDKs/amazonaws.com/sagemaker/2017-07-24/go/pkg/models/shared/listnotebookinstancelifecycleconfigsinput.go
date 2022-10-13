package shared

import (
	"time"
)

type ListNotebookInstanceLifecycleConfigsInput struct {
	CreationTimeAfter      *time.Time                                    `json:"CreationTimeAfter"`
	CreationTimeBefore     *time.Time                                    `json:"CreationTimeBefore"`
	LastModifiedTimeAfter  *time.Time                                    `json:"LastModifiedTimeAfter"`
	LastModifiedTimeBefore *time.Time                                    `json:"LastModifiedTimeBefore"`
	MaxResults             *int64                                        `json:"MaxResults"`
	NameContains           *string                                       `json:"NameContains"`
	NextToken              *string                                       `json:"NextToken"`
	SortBy                 *NotebookInstanceLifecycleConfigSortKeyEnum   `json:"SortBy"`
	SortOrder              *NotebookInstanceLifecycleConfigSortOrderEnum `json:"SortOrder"`
}
