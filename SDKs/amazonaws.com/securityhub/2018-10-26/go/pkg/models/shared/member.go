package shared

import (
	"time"
)

// Member
// The details about a member account.
type Member struct {
	AccountID       *string    `json:"AccountId,omitempty"`
	AdministratorID *string    `json:"AdministratorId,omitempty"`
	Email           *string    `json:"Email,omitempty"`
	InvitedAt       *time.Time `json:"InvitedAt,omitempty"`
	MasterID        *string    `json:"MasterId,omitempty"`
	MemberStatus    *string    `json:"MemberStatus,omitempty"`
	UpdatedAt       *time.Time `json:"UpdatedAt,omitempty"`
}
