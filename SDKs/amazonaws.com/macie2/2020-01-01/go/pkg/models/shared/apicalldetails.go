package shared

import (
	"time"
)

type APICallDetails struct {
	API            *string    `json:"api,omitempty"`
	APIServiceName *string    `json:"apiServiceName,omitempty"`
	FirstSeen      *time.Time `json:"firstSeen,omitempty"`
	LastSeen       *time.Time `json:"lastSeen,omitempty"`
}
