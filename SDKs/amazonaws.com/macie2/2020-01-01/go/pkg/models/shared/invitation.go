package shared

import (
	"time"
)

type Invitation struct {
	AccountID          *string                 `json:"accountId,omitempty"`
	InvitationID       *string                 `json:"invitationId,omitempty"`
	InvitedAt          *time.Time              `json:"invitedAt,omitempty"`
	RelationshipStatus *RelationshipStatusEnum `json:"relationshipStatus,omitempty"`
}
