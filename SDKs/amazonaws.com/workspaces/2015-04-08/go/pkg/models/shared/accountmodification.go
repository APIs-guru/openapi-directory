package shared

import (
	"time"
)

type AccountModification struct {
	DedicatedTenancyManagementCidrRange *string                                    `json:"DedicatedTenancyManagementCidrRange,omitempty"`
	DedicatedTenancySupport             *DedicatedTenancySupportResultEnumEnum     `json:"DedicatedTenancySupport,omitempty"`
	ErrorCode                           *string                                    `json:"ErrorCode,omitempty"`
	ErrorMessage                        *string                                    `json:"ErrorMessage,omitempty"`
	ModificationState                   *DedicatedTenancyModificationStateEnumEnum `json:"ModificationState,omitempty"`
	StartTime                           *time.Time                                 `json:"StartTime,omitempty"`
}
