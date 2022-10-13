package shared

type RegisterDomainRequest struct {
	AdminContact                    ContactDetail `json:"AdminContact"`
	AutoRenew                       *bool         `json:"AutoRenew"`
	DomainName                      string        `json:"DomainName"`
	DurationInYears                 int64         `json:"DurationInYears"`
	IdnLangCode                     *string       `json:"IdnLangCode"`
	PrivacyProtectAdminContact      *bool         `json:"PrivacyProtectAdminContact"`
	PrivacyProtectRegistrantContact *bool         `json:"PrivacyProtectRegistrantContact"`
	PrivacyProtectTechContact       *bool         `json:"PrivacyProtectTechContact"`
	RegistrantContact               ContactDetail `json:"RegistrantContact"`
	TechContact                     ContactDetail `json:"TechContact"`
}
