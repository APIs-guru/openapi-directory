package shared

import (
	"time"
)

type ListModelPackagesInput struct {
	CreationTimeAfter     *time.Time               `json:"CreationTimeAfter,omitempty"`
	CreationTimeBefore    *time.Time               `json:"CreationTimeBefore,omitempty"`
	MaxResults            *int64                   `json:"MaxResults,omitempty"`
	ModelApprovalStatus   *ModelApprovalStatusEnum `json:"ModelApprovalStatus,omitempty"`
	ModelPackageGroupName *string                  `json:"ModelPackageGroupName,omitempty"`
	ModelPackageType      *ModelPackageTypeEnum    `json:"ModelPackageType,omitempty"`
	NameContains          *string                  `json:"NameContains,omitempty"`
	NextToken             *string                  `json:"NextToken,omitempty"`
	SortBy                *ModelPackageSortByEnum  `json:"SortBy,omitempty"`
	SortOrder             *SortOrderEnum           `json:"SortOrder,omitempty"`
}
