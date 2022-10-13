package shared

import (
	"time"
)

type ListModelPackagesInput struct {
	CreationTimeAfter     *time.Time               `json:"CreationTimeAfter"`
	CreationTimeBefore    *time.Time               `json:"CreationTimeBefore"`
	MaxResults            *int64                   `json:"MaxResults"`
	ModelApprovalStatus   *ModelApprovalStatusEnum `json:"ModelApprovalStatus"`
	ModelPackageGroupName *string                  `json:"ModelPackageGroupName"`
	ModelPackageType      *ModelPackageTypeEnum    `json:"ModelPackageType"`
	NameContains          *string                  `json:"NameContains"`
	NextToken             *string                  `json:"NextToken"`
	SortBy                *ModelPackageSortByEnum  `json:"SortBy"`
	SortOrder             *SortOrderEnum           `json:"SortOrder"`
}
