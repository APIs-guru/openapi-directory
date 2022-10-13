package shared

import (
	"time"
)

type Invitation struct {
	AccountID    *string    `json:"AccountId"`
	InvitationID *string    `json:"InvitationId"`
	InvitedAt    *time.Time `json:"InvitedAt"`
	MemberStatus *string    `json:"MemberStatus"`
}
