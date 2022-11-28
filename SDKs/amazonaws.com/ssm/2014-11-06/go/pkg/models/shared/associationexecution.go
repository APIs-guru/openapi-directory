package shared

import (
	"time"
)

// AssociationExecution
// Includes information about the specified association.
type AssociationExecution struct {
	AssociationID         *string    `json:"AssociationId,omitempty"`
	AssociationVersion    *string    `json:"AssociationVersion,omitempty"`
	CreatedTime           *time.Time `json:"CreatedTime,omitempty"`
	DetailedStatus        *string    `json:"DetailedStatus,omitempty"`
	ExecutionID           *string    `json:"ExecutionId,omitempty"`
	LastExecutionDate     *time.Time `json:"LastExecutionDate,omitempty"`
	ResourceCountByStatus *string    `json:"ResourceCountByStatus,omitempty"`
	Status                *string    `json:"Status,omitempty"`
}
