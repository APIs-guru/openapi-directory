package shared

import (
	"time"
)

type AssociationExecution struct {
	AssociationID         *string    `json:"AssociationId"`
	AssociationVersion    *string    `json:"AssociationVersion"`
	CreatedTime           *time.Time `json:"CreatedTime"`
	DetailedStatus        *string    `json:"DetailedStatus"`
	ExecutionID           *string    `json:"ExecutionId"`
	LastExecutionDate     *time.Time `json:"LastExecutionDate"`
	ResourceCountByStatus *string    `json:"ResourceCountByStatus"`
	Status                *string    `json:"Status"`
}
