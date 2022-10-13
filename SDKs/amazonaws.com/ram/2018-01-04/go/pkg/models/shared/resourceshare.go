package shared

import (
	"time"
)

type ResourceShare struct {
	AllowExternalPrincipals *bool                        `json:"allowExternalPrincipals"`
	CreationTime            *time.Time                   `json:"creationTime"`
	FeatureSet              *ResourceShareFeatureSetEnum `json:"featureSet"`
	LastUpdatedTime         *time.Time                   `json:"lastUpdatedTime"`
	Name                    *string                      `json:"name"`
	OwningAccountID         *string                      `json:"owningAccountId"`
	ResourceShareArn        *string                      `json:"resourceShareArn"`
	Status                  *ResourceShareStatusEnum     `json:"status"`
	StatusMessage           *string                      `json:"statusMessage"`
	Tags                    []Tag                        `json:"tags"`
}
