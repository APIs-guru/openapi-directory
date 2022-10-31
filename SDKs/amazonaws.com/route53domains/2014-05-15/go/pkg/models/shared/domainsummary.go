package shared

import (
"time")

type DomainSummary struct {
    AutoRenew *bool `json:"AutoRenew,omitempty"`
    DomainName string `json:"DomainName"`
    Expiry *time.Time `json:"Expiry,omitempty"`
    TransferLock *bool `json:"TransferLock,omitempty"`
    
}

