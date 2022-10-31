package shared

import (
"time")

type GrantListEntry struct {
    Constraints *GrantConstraints `json:"Constraints,omitempty"`
    CreationDate *time.Time `json:"CreationDate,omitempty"`
    GrantID *string `json:"GrantId,omitempty"`
    GranteePrincipal *string `json:"GranteePrincipal,omitempty"`
    IssuingAccount *string `json:"IssuingAccount,omitempty"`
    KeyID *string `json:"KeyId,omitempty"`
    Name *string `json:"Name,omitempty"`
    Operations []GrantOperationEnum `json:"Operations,omitempty"`
    RetiringPrincipal *string `json:"RetiringPrincipal,omitempty"`
    
}

