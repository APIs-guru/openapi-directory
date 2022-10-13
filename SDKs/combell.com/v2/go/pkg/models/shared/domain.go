package shared

import (
	"time"
)

type Domain struct {
	DomainName     *string    `json:"domain_name"`
	ExpirationDate *time.Time `json:"expiration_date"`
	WillRenew      *bool      `json:"will_renew"`
}
