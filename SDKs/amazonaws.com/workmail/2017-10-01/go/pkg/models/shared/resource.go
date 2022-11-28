package shared

import (
	"time"
)

// Resource
// The representation of a resource.
type Resource struct {
	DisabledDate *time.Time        `json:"DisabledDate,omitempty"`
	Email        *string           `json:"Email,omitempty"`
	EnabledDate  *time.Time        `json:"EnabledDate,omitempty"`
	ID           *string           `json:"Id,omitempty"`
	Name         *string           `json:"Name,omitempty"`
	State        *EntityStateEnum  `json:"State,omitempty"`
	Type         *ResourceTypeEnum `json:"Type,omitempty"`
}
