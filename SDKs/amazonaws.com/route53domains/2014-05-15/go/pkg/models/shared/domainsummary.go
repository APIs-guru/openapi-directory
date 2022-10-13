package shared

import (
	"time"
)

type DomainSummary struct {
	AutoRenew    *bool      `json:"AutoRenew"`
	DomainName   string     `json:"DomainName"`
	Expiry       *time.Time `json:"Expiry"`
	TransferLock *bool      `json:"TransferLock"`
}
