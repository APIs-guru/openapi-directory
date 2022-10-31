package shared

import (
"time")

type DomainDetail struct {
    CanToggleRenew *bool `json:"can_toggle_renew,omitempty"`
    DomainName *string `json:"domain_name,omitempty"`
    ExpirationDate *time.Time `json:"expiration_date,omitempty"`
    NameServers []NameServer `json:"name_servers,omitempty"`
    Registrant *Registrant `json:"registrant,omitempty"`
    WillRenew *bool `json:"will_renew,omitempty"`
    
}

