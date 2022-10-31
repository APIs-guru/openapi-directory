package shared

import (
	"time"
)

type Account struct {
	Arn             *string                  `json:"Arn,omitempty"`
	Email           *string                  `json:"Email,omitempty"`
	ID              *string                  `json:"Id,omitempty"`
	JoinedMethod    *AccountJoinedMethodEnum `json:"JoinedMethod,omitempty"`
	JoinedTimestamp *time.Time               `json:"JoinedTimestamp,omitempty"`
	Name            *string                  `json:"Name,omitempty"`
	Status          *AccountStatusEnum       `json:"Status,omitempty"`
}
