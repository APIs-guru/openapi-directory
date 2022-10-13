package shared

import (
	"time"
)

type DelegatedAdministrator struct {
	Arn                   *string                  `json:"Arn"`
	DelegationEnabledDate *time.Time               `json:"DelegationEnabledDate"`
	Email                 *string                  `json:"Email"`
	ID                    *string                  `json:"Id"`
	JoinedMethod          *AccountJoinedMethodEnum `json:"JoinedMethod"`
	JoinedTimestamp       *time.Time               `json:"JoinedTimestamp"`
	Name                  *string                  `json:"Name"`
	Status                *AccountStatusEnum       `json:"Status"`
}
