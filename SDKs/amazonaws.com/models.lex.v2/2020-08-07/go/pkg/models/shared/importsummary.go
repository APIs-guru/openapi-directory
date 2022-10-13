package shared

import (
	"time"
)

type ImportSummary struct {
	CreationDateTime     *time.Time         `json:"creationDateTime"`
	ImportID             *string            `json:"importId"`
	ImportStatus         *ImportStatusEnum  `json:"importStatus"`
	ImportedResourceID   *string            `json:"importedResourceId"`
	ImportedResourceName *string            `json:"importedResourceName"`
	LastUpdatedDateTime  *time.Time         `json:"lastUpdatedDateTime"`
	MergeStrategy        *MergeStrategyEnum `json:"mergeStrategy"`
}
