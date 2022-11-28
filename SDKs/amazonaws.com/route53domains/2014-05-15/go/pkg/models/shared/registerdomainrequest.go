package shared

// RegisterDomainRequest
// The RegisterDomain request includes the following elements.
type RegisterDomainRequest struct {
	AdminContact                    ContactDetail `json:"AdminContact"`
	AutoRenew                       *bool         `json:"AutoRenew,omitempty"`
	DomainName                      string        `json:"DomainName"`
	DurationInYears                 int64         `json:"DurationInYears"`
	IdnLangCode                     *string       `json:"IdnLangCode,omitempty"`
	PrivacyProtectAdminContact      *bool         `json:"PrivacyProtectAdminContact,omitempty"`
	PrivacyProtectRegistrantContact *bool         `json:"PrivacyProtectRegistrantContact,omitempty"`
	PrivacyProtectTechContact       *bool         `json:"PrivacyProtectTechContact,omitempty"`
	RegistrantContact               ContactDetail `json:"RegistrantContact"`
	TechContact                     ContactDetail `json:"TechContact"`
}
