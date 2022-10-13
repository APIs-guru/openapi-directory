package shared

import (
	"time"
)

type InstanceAssociationStatusInfo struct {
	AssociationID      *string                       `json:"AssociationId"`
	AssociationName    *string                       `json:"AssociationName"`
	AssociationVersion *string                       `json:"AssociationVersion"`
	DetailedStatus     *string                       `json:"DetailedStatus"`
	DocumentVersion    *string                       `json:"DocumentVersion"`
	ErrorCode          *string                       `json:"ErrorCode"`
	ExecutionDate      *time.Time                    `json:"ExecutionDate"`
	ExecutionSummary   *string                       `json:"ExecutionSummary"`
	InstanceID         *string                       `json:"InstanceId"`
	Name               *string                       `json:"Name"`
	OutputURL          *InstanceAssociationOutputURL `json:"OutputUrl"`
	Status             *string                       `json:"Status"`
}
