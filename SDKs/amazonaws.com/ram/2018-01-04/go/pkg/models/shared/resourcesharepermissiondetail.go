package shared

import (
	"time"
)

type ResourceSharePermissionDetail struct {
	Arn                   *string    `json:"arn"`
	CreationTime          *time.Time `json:"creationTime"`
	DefaultVersion        *bool      `json:"defaultVersion"`
	IsResourceTypeDefault *bool      `json:"isResourceTypeDefault"`
	LastUpdatedTime       *time.Time `json:"lastUpdatedTime"`
	Name                  *string    `json:"name"`
	Permission            *string    `json:"permission"`
	ResourceType          *string    `json:"resourceType"`
	Version               *string    `json:"version"`
}
