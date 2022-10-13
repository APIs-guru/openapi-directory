package shared

import (
	"time"
)

type DescribeImportResponse struct {
	CreationDateTime      *time.Time                   `json:"creationDateTime"`
	FailureReasons        []string                     `json:"failureReasons"`
	ImportID              *string                      `json:"importId"`
	ImportStatus          *ImportStatusEnum            `json:"importStatus"`
	ImportedResourceID    *string                      `json:"importedResourceId"`
	ImportedResourceName  *string                      `json:"importedResourceName"`
	LastUpdatedDateTime   *time.Time                   `json:"lastUpdatedDateTime"`
	MergeStrategy         *MergeStrategyEnum           `json:"mergeStrategy"`
	ResourceSpecification *ImportResourceSpecification `json:"resourceSpecification"`
}
