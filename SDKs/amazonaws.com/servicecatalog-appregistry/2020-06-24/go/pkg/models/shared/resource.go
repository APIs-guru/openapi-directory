package shared

import (
	"time"
)

// Resource
//
//	The information about the resource.
type Resource struct {
	Arn             *string               `json:"arn,omitempty"`
	AssociationTime *time.Time            `json:"associationTime,omitempty"`
	Integrations    *ResourceIntegrations `json:"integrations,omitempty"`
	Name            *string               `json:"name,omitempty"`
}
