package shared

import (
	"time"
)

type StartImportResponse struct {
	CreatedDate   *time.Time         `json:"createdDate"`
	ImportID      *string            `json:"importId"`
	ImportStatus  *ImportStatusEnum  `json:"importStatus"`
	MergeStrategy *MergeStrategyEnum `json:"mergeStrategy"`
	Name          *string            `json:"name"`
	ResourceType  *ResourceTypeEnum  `json:"resourceType"`
	Tags          []Tag              `json:"tags"`
}
