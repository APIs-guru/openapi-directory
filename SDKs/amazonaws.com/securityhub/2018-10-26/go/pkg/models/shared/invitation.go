package shared

import (
"time")

type Invitation struct {
    AccountID *string `json:"AccountId,omitempty"`
    InvitationID *string `json:"InvitationId,omitempty"`
    InvitedAt *time.Time `json:"InvitedAt,omitempty"`
    MemberStatus *string `json:"MemberStatus,omitempty"`
    
}

