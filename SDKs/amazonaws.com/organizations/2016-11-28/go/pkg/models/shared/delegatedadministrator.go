package shared

import (
	"time"
)

// DelegatedAdministrator
// Contains information about the delegated administrator.
type DelegatedAdministrator struct {
	Arn                   *string                  `json:"Arn,omitempty"`
	DelegationEnabledDate *time.Time               `json:"DelegationEnabledDate,omitempty"`
	Email                 *string                  `json:"Email,omitempty"`
	ID                    *string                  `json:"Id,omitempty"`
	JoinedMethod          *AccountJoinedMethodEnum `json:"JoinedMethod,omitempty"`
	JoinedTimestamp       *time.Time               `json:"JoinedTimestamp,omitempty"`
	Name                  *string                  `json:"Name,omitempty"`
	Status                *AccountStatusEnum       `json:"Status,omitempty"`
}
