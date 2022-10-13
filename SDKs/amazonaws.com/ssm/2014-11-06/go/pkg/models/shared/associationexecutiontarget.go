package shared

import (
	"time"
)

type AssociationExecutionTarget struct {
	AssociationID      *string       `json:"AssociationId"`
	AssociationVersion *string       `json:"AssociationVersion"`
	DetailedStatus     *string       `json:"DetailedStatus"`
	ExecutionID        *string       `json:"ExecutionId"`
	LastExecutionDate  *time.Time    `json:"LastExecutionDate"`
	OutputSource       *OutputSource `json:"OutputSource"`
	ResourceID         *string       `json:"ResourceId"`
	ResourceType       *string       `json:"ResourceType"`
	Status             *string       `json:"Status"`
}
