package shared

import (
	"time"
)

// Invitation
// Provides information about an Amazon Macie membership invitation that was received by an account.
type Invitation struct {
	AccountID          *string                 `json:"accountId,omitempty"`
	InvitationID       *string                 `json:"invitationId,omitempty"`
	InvitedAt          *time.Time              `json:"invitedAt,omitempty"`
	RelationshipStatus *RelationshipStatusEnum `json:"relationshipStatus,omitempty"`
}
