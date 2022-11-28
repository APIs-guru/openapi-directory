package shared

import (
	"time"
)

// Account1
// JSON template for Analytics account entry.
type Account1 struct {
	ChildLink *AccountChildLink `json:"childLink,omitempty"`
	Created   *time.Time        `json:"created,omitempty"`
	ID        *string           `json:"id,omitempty"`
	Kind      *string           `json:"kind,omitempty"`
	Name      *string           `json:"name,omitempty"`
	SelfLink  *string           `json:"selfLink,omitempty"`
	Starred   *bool             `json:"starred,omitempty"`
	Updated   *time.Time        `json:"updated,omitempty"`
}
