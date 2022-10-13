package shared

import (
	"time"
)

type Namespace struct {
	Arn              *string              `json:"Arn"`
	CreateDate       *time.Time           `json:"CreateDate"`
	CreatorRequestID *string              `json:"CreatorRequestId"`
	Description      *string              `json:"Description"`
	ID               *string              `json:"Id"`
	Name             *string              `json:"Name"`
	Properties       *NamespaceProperties `json:"Properties"`
	ServiceCount     *int64               `json:"ServiceCount"`
	Type             *NamespaceTypeEnum   `json:"Type"`
}
