package shared

import (
	"time"
)

type StartImportResponse struct {
	CreationDateTime      *time.Time                   `json:"creationDateTime,omitempty"`
	ImportID              *string                      `json:"importId,omitempty"`
	ImportStatus          *ImportStatusEnum            `json:"importStatus,omitempty"`
	MergeStrategy         *MergeStrategyEnum           `json:"mergeStrategy,omitempty"`
	ResourceSpecification *ImportResourceSpecification `json:"resourceSpecification,omitempty"`
}
