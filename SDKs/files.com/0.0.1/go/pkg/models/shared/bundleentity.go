package shared

import (
"time")

type BundleEntity struct {
    ClickwrapBody *string `json:"clickwrap_body,omitempty"`
    ClickwrapID *int32 `json:"clickwrap_id,omitempty"`
    Code *string `json:"code,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    Description *string `json:"description,omitempty"`
    ExpiresAt *time.Time `json:"expires_at,omitempty"`
    FormFieldSet *FormFieldSetEntity `json:"form_field_set,omitempty"`
    HasInbox *bool `json:"has_inbox,omitempty"`
    ID *int32 `json:"id,omitempty"`
    InboxID *int32 `json:"inbox_id,omitempty"`
    MaxUses *int32 `json:"max_uses,omitempty"`
    Note *string `json:"note,omitempty"`
    PasswordProtected *bool `json:"password_protected,omitempty"`
    Paths []string `json:"paths,omitempty"`
    PreviewOnly *bool `json:"preview_only,omitempty"`
    RequireRegistration *bool `json:"require_registration,omitempty"`
    RequireShareRecipient *bool `json:"require_share_recipient,omitempty"`
    URL *string `json:"url,omitempty"`
    UserID *int32 `json:"user_id,omitempty"`
    Username *string `json:"username,omitempty"`
    
}

