package shared

import (
	"time"
)

// APICallDetails
// Provides information about an API operation that an entity invoked for an affected resource.
type APICallDetails struct {
	API            *string    `json:"api,omitempty"`
	APIServiceName *string    `json:"apiServiceName,omitempty"`
	FirstSeen      *time.Time `json:"firstSeen,omitempty"`
	LastSeen       *time.Time `json:"lastSeen,omitempty"`
}
