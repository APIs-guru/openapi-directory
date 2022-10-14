package shared

import (
	"time"
)

type DescribeResourceResponse struct {
	BookingOptions *BookingOptions   `json:"BookingOptions,omitempty"`
	DisabledDate   *time.Time        `json:"DisabledDate,omitempty"`
	Email          *string           `json:"Email,omitempty"`
	EnabledDate    *time.Time        `json:"EnabledDate,omitempty"`
	Name           *string           `json:"Name,omitempty"`
	ResourceID     *string           `json:"ResourceId,omitempty"`
	State          *EntityStateEnum  `json:"State,omitempty"`
	Type           *ResourceTypeEnum `json:"Type,omitempty"`
}
