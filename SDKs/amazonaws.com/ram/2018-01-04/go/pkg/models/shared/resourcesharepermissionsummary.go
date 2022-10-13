package shared

import (
	"time"
)

type ResourceSharePermissionSummary struct {
	Arn                   *string    `json:"arn"`
	CreationTime          *time.Time `json:"creationTime"`
	DefaultVersion        *bool      `json:"defaultVersion"`
	IsResourceTypeDefault *bool      `json:"isResourceTypeDefault"`
	LastUpdatedTime       *time.Time `json:"lastUpdatedTime"`
	Name                  *string    `json:"name"`
	ResourceType          *string    `json:"resourceType"`
	Status                *string    `json:"status"`
	Version               *string    `json:"version"`
}
