package shared

import (
	"time"
)

type GetImportResponse struct {
	CreatedDate   *time.Time         `json:"createdDate"`
	FailureReason []string           `json:"failureReason"`
	ImportID      *string            `json:"importId"`
	ImportStatus  *ImportStatusEnum  `json:"importStatus"`
	MergeStrategy *MergeStrategyEnum `json:"mergeStrategy"`
	Name          *string            `json:"name"`
	ResourceType  *ResourceTypeEnum  `json:"resourceType"`
}
