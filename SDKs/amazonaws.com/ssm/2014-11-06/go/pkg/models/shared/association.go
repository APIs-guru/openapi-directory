package shared

import (
	"time"
)

type Association struct {
	AssociationID      *string              `json:"AssociationId"`
	AssociationName    *string              `json:"AssociationName"`
	AssociationVersion *string              `json:"AssociationVersion"`
	DocumentVersion    *string              `json:"DocumentVersion"`
	InstanceID         *string              `json:"InstanceId"`
	LastExecutionDate  *time.Time           `json:"LastExecutionDate"`
	Name               *string              `json:"Name"`
	Overview           *AssociationOverview `json:"Overview"`
	ScheduleExpression *string              `json:"ScheduleExpression"`
	Targets            []Target             `json:"Targets"`
}
