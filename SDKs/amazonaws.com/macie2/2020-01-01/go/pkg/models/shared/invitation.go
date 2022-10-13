package shared

import (
	"time"
)

type Invitation struct {
	AccountID          *string                 `json:"accountId"`
	InvitationID       *string                 `json:"invitationId"`
	InvitedAt          *time.Time              `json:"invitedAt"`
	RelationshipStatus *RelationshipStatusEnum `json:"relationshipStatus"`
}
