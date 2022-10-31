package shared

import (
"time")

type Domain struct {
    DomainName *string `json:"domain_name,omitempty"`
    ExpirationDate *time.Time `json:"expiration_date,omitempty"`
    WillRenew *bool `json:"will_renew,omitempty"`
    
}

