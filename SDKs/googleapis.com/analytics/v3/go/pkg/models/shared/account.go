package shared

import (
	"time"
)

type AccountChildLink struct {
	Href *string `json:"href"`
	Type *string `json:"type"`
}

type AccountPermissions struct {
	Effective []string `json:"effective"`
}

type Account struct {
	ChildLink   *AccountChildLink   `json:"childLink"`
	Created     *time.Time          `json:"created"`
	ID          *string             `json:"id"`
	Kind        *string             `json:"kind"`
	Name        *string             `json:"name"`
	Permissions *AccountPermissions `json:"permissions"`
	SelfLink    *string             `json:"selfLink"`
	Starred     *bool               `json:"starred"`
	Updated     *time.Time          `json:"updated"`
}
