package shared

import (
	"time"
)

// AssociationExecutionTarget
// Includes information about the specified association execution.
type AssociationExecutionTarget struct {
	AssociationID      *string       `json:"AssociationId,omitempty"`
	AssociationVersion *string       `json:"AssociationVersion,omitempty"`
	DetailedStatus     *string       `json:"DetailedStatus,omitempty"`
	ExecutionID        *string       `json:"ExecutionId,omitempty"`
	LastExecutionDate  *time.Time    `json:"LastExecutionDate,omitempty"`
	OutputSource       *OutputSource `json:"OutputSource,omitempty"`
	ResourceID         *string       `json:"ResourceId,omitempty"`
	ResourceType       *string       `json:"ResourceType,omitempty"`
	Status             *string       `json:"Status,omitempty"`
}
