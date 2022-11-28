package shared

import (
	"time"
)

// AccountChildLink
// Child link for an account entry. Points to the list of web properties for this account.
type AccountChildLink struct {
	Href *string `json:"href,omitempty"`
	Type *string `json:"type,omitempty"`
}

// AccountPermissions
// Permissions the user has for this account.
type AccountPermissions struct {
	Effective []string `json:"effective,omitempty"`
}

// Account
// JSON template for Analytics account entry.
type Account struct {
	ChildLink   *AccountChildLink   `json:"childLink,omitempty"`
	Created     *time.Time          `json:"created,omitempty"`
	ID          *string             `json:"id,omitempty"`
	Kind        *string             `json:"kind,omitempty"`
	Name        *string             `json:"name,omitempty"`
	Permissions *AccountPermissions `json:"permissions,omitempty"`
	SelfLink    *string             `json:"selfLink,omitempty"`
	Starred     *bool               `json:"starred,omitempty"`
	Updated     *time.Time          `json:"updated,omitempty"`
}
