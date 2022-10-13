package shared

import (
	"time"
)

type EulaAcceptance struct {
	AcceptedAt       *time.Time `json:"acceptedAt"`
	AcceptedBy       *string    `json:"acceptedBy"`
	AccepteeID       *string    `json:"accepteeId"`
	EulaAcceptanceID *string    `json:"eulaAcceptanceId"`
	EulaID           *string    `json:"eulaId"`
}
