package shared

import (
	"time"
)

// Invitation
// Details about an invitation.
type Invitation struct {
	AccountID    *string    `json:"AccountId,omitempty"`
	InvitationID *string    `json:"InvitationId,omitempty"`
	InvitedAt    *time.Time `json:"InvitedAt,omitempty"`
	MemberStatus *string    `json:"MemberStatus,omitempty"`
}
