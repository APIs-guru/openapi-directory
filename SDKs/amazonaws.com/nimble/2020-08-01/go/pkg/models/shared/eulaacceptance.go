package shared

import (
"time")

type EulaAcceptance struct {
    AcceptedAt *time.Time `json:"acceptedAt,omitempty"`
    AcceptedBy *string `json:"acceptedBy,omitempty"`
    AccepteeID *string `json:"accepteeId,omitempty"`
    EulaAcceptanceID *string `json:"eulaAcceptanceId,omitempty"`
    EulaID *string `json:"eulaId,omitempty"`
    
}

