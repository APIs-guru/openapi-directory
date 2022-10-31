package shared

import (
"time")

type Partner struct {
    Company string `json:"company"`
    Contacts []Contact `json:"contacts,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    Icon *File `json:"icon,omitempty"`
    ID *string `json:"id,omitempty"`
    Listed *string `json:"listed,omitempty"`
    Twitter *string `json:"twitter,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    Website *string `json:"website,omitempty"`
    
}

