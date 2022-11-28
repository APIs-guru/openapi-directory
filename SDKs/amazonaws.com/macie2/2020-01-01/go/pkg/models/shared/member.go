package shared

import (
	"time"
)

// Member
// Provides information about an account that's associated with an Amazon Macie administrator account.
type Member struct {
	AccountID              *string                 `json:"accountId,omitempty"`
	AdministratorAccountID *string                 `json:"administratorAccountId,omitempty"`
	Arn                    *string                 `json:"arn,omitempty"`
	Email                  *string                 `json:"email,omitempty"`
	InvitedAt              *time.Time              `json:"invitedAt,omitempty"`
	MasterAccountID        *string                 `json:"masterAccountId,omitempty"`
	RelationshipStatus     *RelationshipStatusEnum `json:"relationshipStatus,omitempty"`
	Tags                   map[string]string       `json:"tags,omitempty"`
	UpdatedAt              *time.Time              `json:"updatedAt,omitempty"`
}
