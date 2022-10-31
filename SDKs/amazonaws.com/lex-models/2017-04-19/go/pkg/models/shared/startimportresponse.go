package shared

import (
	"time"
)

type StartImportResponse struct {
	CreatedDate   *time.Time         `json:"createdDate,omitempty"`
	ImportID      *string            `json:"importId,omitempty"`
	ImportStatus  *ImportStatusEnum  `json:"importStatus,omitempty"`
	MergeStrategy *MergeStrategyEnum `json:"mergeStrategy,omitempty"`
	Name          *string            `json:"name,omitempty"`
	ResourceType  *ResourceTypeEnum  `json:"resourceType,omitempty"`
	Tags          []Tag              `json:"tags,omitempty"`
}
