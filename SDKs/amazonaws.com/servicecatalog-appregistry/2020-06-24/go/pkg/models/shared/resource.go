package shared

import (
	"time"
)

type Resource struct {
	Arn             *string               `json:"arn"`
	AssociationTime *time.Time            `json:"associationTime"`
	Integrations    *ResourceIntegrations `json:"integrations"`
	Name            *string               `json:"name"`
}
