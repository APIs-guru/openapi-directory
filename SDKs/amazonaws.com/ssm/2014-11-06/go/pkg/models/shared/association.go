package shared

import (
	"time"
)

// Association
// Describes an association of a Amazon Web Services Systems Manager document (SSM document) and an instance.
type Association struct {
	AssociationID      *string              `json:"AssociationId,omitempty"`
	AssociationName    *string              `json:"AssociationName,omitempty"`
	AssociationVersion *string              `json:"AssociationVersion,omitempty"`
	DocumentVersion    *string              `json:"DocumentVersion,omitempty"`
	InstanceID         *string              `json:"InstanceId,omitempty"`
	LastExecutionDate  *time.Time           `json:"LastExecutionDate,omitempty"`
	Name               *string              `json:"Name,omitempty"`
	Overview           *AssociationOverview `json:"Overview,omitempty"`
	ScheduleExpression *string              `json:"ScheduleExpression,omitempty"`
	Targets            []Target             `json:"Targets,omitempty"`
}
