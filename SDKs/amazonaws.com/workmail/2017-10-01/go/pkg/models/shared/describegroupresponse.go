package shared

import (
	"time"
)

type DescribeGroupResponse struct {
	DisabledDate *time.Time       `json:"DisabledDate"`
	Email        *string          `json:"Email"`
	EnabledDate  *time.Time       `json:"EnabledDate"`
	GroupID      *string          `json:"GroupId"`
	Name         *string          `json:"Name"`
	State        *EntityStateEnum `json:"State"`
}
