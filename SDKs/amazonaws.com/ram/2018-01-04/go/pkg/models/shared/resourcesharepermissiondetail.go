package shared

import (
	"time"
)

// ResourceSharePermissionDetail
// Information about an RAM permission.
type ResourceSharePermissionDetail struct {
	Arn                   *string    `json:"arn,omitempty"`
	CreationTime          *time.Time `json:"creationTime,omitempty"`
	DefaultVersion        *bool      `json:"defaultVersion,omitempty"`
	IsResourceTypeDefault *bool      `json:"isResourceTypeDefault,omitempty"`
	LastUpdatedTime       *time.Time `json:"lastUpdatedTime,omitempty"`
	Name                  *string    `json:"name,omitempty"`
	Permission            *string    `json:"permission,omitempty"`
	ResourceType          *string    `json:"resourceType,omitempty"`
	Version               *string    `json:"version,omitempty"`
}
