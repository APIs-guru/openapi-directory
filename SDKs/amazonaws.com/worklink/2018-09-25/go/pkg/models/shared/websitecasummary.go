package shared

import (
	"time"
)

// WebsiteCaSummary
// The summary of the certificate authority (CA).
type WebsiteCaSummary struct {
	CreatedTime *time.Time `json:"CreatedTime,omitempty"`
	DisplayName *string    `json:"DisplayName,omitempty"`
	WebsiteCaID *string    `json:"WebsiteCaId,omitempty"`
}
