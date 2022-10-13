package shared

import (
	"time"
)

type Member struct {
	AccountID              *string                 `json:"accountId"`
	AdministratorAccountID *string                 `json:"administratorAccountId"`
	Arn                    *string                 `json:"arn"`
	Email                  *string                 `json:"email"`
	InvitedAt              *time.Time              `json:"invitedAt"`
	MasterAccountID        *string                 `json:"masterAccountId"`
	RelationshipStatus     *RelationshipStatusEnum `json:"relationshipStatus"`
	Tags                   map[string]string       `json:"tags"`
	UpdatedAt              *time.Time              `json:"updatedAt"`
}
