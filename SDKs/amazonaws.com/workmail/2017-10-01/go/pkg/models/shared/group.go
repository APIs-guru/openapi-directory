package shared

import (
	"time"
)

type Group struct {
	DisabledDate *time.Time       `json:"DisabledDate"`
	Email        *string          `json:"Email"`
	EnabledDate  *time.Time       `json:"EnabledDate"`
	ID           *string          `json:"Id"`
	Name         *string          `json:"Name"`
	State        *EntityStateEnum `json:"State"`
}
