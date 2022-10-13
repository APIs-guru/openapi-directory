package shared

import (
	"time"
)

type Member struct {
	DisabledDate *time.Time       `json:"DisabledDate"`
	EnabledDate  *time.Time       `json:"EnabledDate"`
	ID           *string          `json:"Id"`
	Name         *string          `json:"Name"`
	State        *EntityStateEnum `json:"State"`
	Type         *MemberTypeEnum  `json:"Type"`
}
