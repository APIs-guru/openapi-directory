package shared

import (
	"time"
)

type NamespaceSummary struct {
	Arn          *string              `json:"Arn"`
	CreateDate   *time.Time           `json:"CreateDate"`
	Description  *string              `json:"Description"`
	ID           *string              `json:"Id"`
	Name         *string              `json:"Name"`
	Properties   *NamespaceProperties `json:"Properties"`
	ServiceCount *int64               `json:"ServiceCount"`
	Type         *NamespaceTypeEnum   `json:"Type"`
}
