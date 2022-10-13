package shared

import (
	"time"
)

type BundleEntity struct {
	ClickwrapBody         *string             `json:"clickwrap_body"`
	ClickwrapID           *int32              `json:"clickwrap_id"`
	Code                  *string             `json:"code"`
	CreatedAt             *time.Time          `json:"created_at"`
	Description           *string             `json:"description"`
	ExpiresAt             *time.Time          `json:"expires_at"`
	FormFieldSet          *FormFieldSetEntity `json:"form_field_set"`
	HasInbox              *bool               `json:"has_inbox"`
	ID                    *int32              `json:"id"`
	InboxID               *int32              `json:"inbox_id"`
	MaxUses               *int32              `json:"max_uses"`
	Note                  *string             `json:"note"`
	PasswordProtected     *bool               `json:"password_protected"`
	Paths                 []string            `json:"paths"`
	PreviewOnly           *bool               `json:"preview_only"`
	RequireRegistration   *bool               `json:"require_registration"`
	RequireShareRecipient *bool               `json:"require_share_recipient"`
	URL                   *string             `json:"url"`
	UserID                *int32              `json:"user_id"`
	Username              *string             `json:"username"`
}
