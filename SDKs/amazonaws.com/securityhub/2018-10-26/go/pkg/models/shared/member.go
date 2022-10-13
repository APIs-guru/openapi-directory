package shared

import (
	"time"
)

type Member struct {
	AccountID       *string    `json:"AccountId"`
	AdministratorID *string    `json:"AdministratorId"`
	Email           *string    `json:"Email"`
	InvitedAt       *time.Time `json:"InvitedAt"`
	MasterID        *string    `json:"MasterId"`
	MemberStatus    *string    `json:"MemberStatus"`
	UpdatedAt       *time.Time `json:"UpdatedAt"`
}
