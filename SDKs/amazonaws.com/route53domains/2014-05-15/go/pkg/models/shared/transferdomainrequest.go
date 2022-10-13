package shared

type TransferDomainRequest struct {
	AdminContact                    ContactDetail `json:"AdminContact"`
	AuthCode                        *string       `json:"AuthCode"`
	AutoRenew                       *bool         `json:"AutoRenew"`
	DomainName                      string        `json:"DomainName"`
	DurationInYears                 int64         `json:"DurationInYears"`
	IdnLangCode                     *string       `json:"IdnLangCode"`
	Nameservers                     []Nameserver  `json:"Nameservers"`
	PrivacyProtectAdminContact      *bool         `json:"PrivacyProtectAdminContact"`
	PrivacyProtectRegistrantContact *bool         `json:"PrivacyProtectRegistrantContact"`
	PrivacyProtectTechContact       *bool         `json:"PrivacyProtectTechContact"`
	RegistrantContact               ContactDetail `json:"RegistrantContact"`
	TechContact                     ContactDetail `json:"TechContact"`
}
