package shared

import (
	"time"
)

type AccountModification struct {
	DedicatedTenancyManagementCidrRange *string                                    `json:"DedicatedTenancyManagementCidrRange"`
	DedicatedTenancySupport             *DedicatedTenancySupportResultEnumEnum     `json:"DedicatedTenancySupport"`
	ErrorCode                           *string                                    `json:"ErrorCode"`
	ErrorMessage                        *string                                    `json:"ErrorMessage"`
	ModificationState                   *DedicatedTenancyModificationStateEnumEnum `json:"ModificationState"`
	StartTime                           *time.Time                                 `json:"StartTime"`
}
