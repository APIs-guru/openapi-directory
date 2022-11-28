package shared

import (
	"time"
)

// ImportSummary
// Provides summary information about an import in an import list.
type ImportSummary struct {
	CreationDateTime     *time.Time         `json:"creationDateTime,omitempty"`
	ImportID             *string            `json:"importId,omitempty"`
	ImportStatus         *ImportStatusEnum  `json:"importStatus,omitempty"`
	ImportedResourceID   *string            `json:"importedResourceId,omitempty"`
	ImportedResourceName *string            `json:"importedResourceName,omitempty"`
	LastUpdatedDateTime  *time.Time         `json:"lastUpdatedDateTime,omitempty"`
	MergeStrategy        *MergeStrategyEnum `json:"mergeStrategy,omitempty"`
}
