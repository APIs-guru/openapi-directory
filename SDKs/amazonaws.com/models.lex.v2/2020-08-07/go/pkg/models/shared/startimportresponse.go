package shared

import (
	"time"
)

type StartImportResponse struct {
	CreationDateTime      *time.Time                   `json:"creationDateTime"`
	ImportID              *string                      `json:"importId"`
	ImportStatus          *ImportStatusEnum            `json:"importStatus"`
	MergeStrategy         *MergeStrategyEnum           `json:"mergeStrategy"`
	ResourceSpecification *ImportResourceSpecification `json:"resourceSpecification"`
}
