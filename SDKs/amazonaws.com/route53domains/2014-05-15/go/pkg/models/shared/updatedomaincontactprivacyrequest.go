package shared

type UpdateDomainContactPrivacyRequest struct {
	AdminPrivacy      *bool  `json:"AdminPrivacy,omitempty"`
	DomainName        string `json:"DomainName"`
	RegistrantPrivacy *bool  `json:"RegistrantPrivacy,omitempty"`
	TechPrivacy       *bool  `json:"TechPrivacy,omitempty"`
}
