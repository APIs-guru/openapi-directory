package shared

import (
	"time"
)

type GetDomainDetailResponse struct {
	AbuseContactEmail *string       `json:"AbuseContactEmail"`
	AbuseContactPhone *string       `json:"AbuseContactPhone"`
	AdminContact      ContactDetail `json:"AdminContact"`
	AdminPrivacy      *bool         `json:"AdminPrivacy"`
	AutoRenew         *bool         `json:"AutoRenew"`
	CreationDate      *time.Time    `json:"CreationDate"`
	DNSSec            *string       `json:"DnsSec"`
	DomainName        string        `json:"DomainName"`
	ExpirationDate    *time.Time    `json:"ExpirationDate"`
	Nameservers       []Nameserver  `json:"Nameservers"`
	RegistrantContact ContactDetail `json:"RegistrantContact"`
	RegistrantPrivacy *bool         `json:"RegistrantPrivacy"`
	RegistrarName     *string       `json:"RegistrarName"`
	RegistrarURL      *string       `json:"RegistrarUrl"`
	RegistryDomainID  *string       `json:"RegistryDomainId"`
	Reseller          *string       `json:"Reseller"`
	StatusList        []string      `json:"StatusList"`
	TechContact       ContactDetail `json:"TechContact"`
	TechPrivacy       *bool         `json:"TechPrivacy"`
	UpdatedDate       *time.Time    `json:"UpdatedDate"`
	WhoIsServer       *string       `json:"WhoIsServer"`
}
