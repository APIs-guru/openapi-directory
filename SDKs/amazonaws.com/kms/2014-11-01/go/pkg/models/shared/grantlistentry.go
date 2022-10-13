package shared

import (
	"time"
)

type GrantListEntry struct {
	Constraints       *GrantConstraints    `json:"Constraints"`
	CreationDate      *time.Time           `json:"CreationDate"`
	GrantID           *string              `json:"GrantId"`
	GranteePrincipal  *string              `json:"GranteePrincipal"`
	IssuingAccount    *string              `json:"IssuingAccount"`
	KeyID             *string              `json:"KeyId"`
	Name              *string              `json:"Name"`
	Operations        []GrantOperationEnum `json:"Operations"`
	RetiringPrincipal *string              `json:"RetiringPrincipal"`
}
