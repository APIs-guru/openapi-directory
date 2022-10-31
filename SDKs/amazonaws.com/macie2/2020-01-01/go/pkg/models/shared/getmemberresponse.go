package shared

import (
	"time"
)

type GetMemberResponse struct {
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
