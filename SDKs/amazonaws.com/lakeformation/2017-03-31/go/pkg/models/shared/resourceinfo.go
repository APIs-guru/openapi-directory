package shared

import (
	"time"
)

// ResourceInfo
// A structure containing information about an AWS Lake Formation resource.
type ResourceInfo struct {
	LastModified *time.Time `json:"LastModified,omitempty"`
	ResourceArn  *string    `json:"ResourceArn,omitempty"`
	RoleArn      *string    `json:"RoleArn,omitempty"`
}
