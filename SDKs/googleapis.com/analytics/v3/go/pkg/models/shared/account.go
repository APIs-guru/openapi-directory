package shared

import (
	"time"
)

type AccountChildLink struct {
	Href *string `json:"href,omitempty"`
	Type *string `json:"type,omitempty"`
}

type AccountPermissions struct {
	Effective []string `json:"effective,omitempty"`
}

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
