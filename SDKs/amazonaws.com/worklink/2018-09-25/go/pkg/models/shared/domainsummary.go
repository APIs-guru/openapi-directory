package shared

import (
	"time"
)

// DomainSummary
// The summary of the domain.
type DomainSummary struct {
	CreatedTime  time.Time        `json:"CreatedTime"`
	DisplayName  *string          `json:"DisplayName,omitempty"`
	DomainName   string           `json:"DomainName"`
	DomainStatus DomainStatusEnum `json:"DomainStatus"`
}
