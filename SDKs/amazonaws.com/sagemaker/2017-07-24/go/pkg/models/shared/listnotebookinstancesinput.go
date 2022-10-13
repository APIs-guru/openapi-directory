package shared

import (
	"time"
)

type ListNotebookInstancesInput struct {
	AdditionalCodeRepositoryEquals              *string                        `json:"AdditionalCodeRepositoryEquals"`
	CreationTimeAfter                           *time.Time                     `json:"CreationTimeAfter"`
	CreationTimeBefore                          *time.Time                     `json:"CreationTimeBefore"`
	DefaultCodeRepositoryContains               *string                        `json:"DefaultCodeRepositoryContains"`
	LastModifiedTimeAfter                       *time.Time                     `json:"LastModifiedTimeAfter"`
	LastModifiedTimeBefore                      *time.Time                     `json:"LastModifiedTimeBefore"`
	MaxResults                                  *int64                         `json:"MaxResults"`
	NameContains                                *string                        `json:"NameContains"`
	NextToken                                   *string                        `json:"NextToken"`
	NotebookInstanceLifecycleConfigNameContains *string                        `json:"NotebookInstanceLifecycleConfigNameContains"`
	SortBy                                      *NotebookInstanceSortKeyEnum   `json:"SortBy"`
	SortOrder                                   *NotebookInstanceSortOrderEnum `json:"SortOrder"`
	StatusEquals                                *NotebookInstanceStatusEnum    `json:"StatusEquals"`
}
