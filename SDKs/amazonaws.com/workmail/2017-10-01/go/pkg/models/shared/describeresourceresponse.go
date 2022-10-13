package shared

import (
	"time"
)

type DescribeResourceResponse struct {
	BookingOptions *BookingOptions   `json:"BookingOptions"`
	DisabledDate   *time.Time        `json:"DisabledDate"`
	Email          *string           `json:"Email"`
	EnabledDate    *time.Time        `json:"EnabledDate"`
	Name           *string           `json:"Name"`
	ResourceID     *string           `json:"ResourceId"`
	State          *EntityStateEnum  `json:"State"`
	Type           *ResourceTypeEnum `json:"Type"`
}
