package shared

import (
	"time"
)

type DomainDetail struct {
	CanToggleRenew *bool        `json:"can_toggle_renew"`
	DomainName     *string      `json:"domain_name"`
	ExpirationDate *time.Time   `json:"expiration_date"`
	NameServers    []NameServer `json:"name_servers"`
	Registrant     *Registrant  `json:"registrant"`
	WillRenew      *bool        `json:"will_renew"`
}
