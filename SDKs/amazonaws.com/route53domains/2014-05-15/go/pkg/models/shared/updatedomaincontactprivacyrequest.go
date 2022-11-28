package shared

// UpdateDomainContactPrivacyRequest
// The UpdateDomainContactPrivacy request includes the following elements.
type UpdateDomainContactPrivacyRequest struct {
	AdminPrivacy      *bool  `json:"AdminPrivacy,omitempty"`
	DomainName        string `json:"DomainName"`
	RegistrantPrivacy *bool  `json:"RegistrantPrivacy,omitempty"`
	TechPrivacy       *bool  `json:"TechPrivacy,omitempty"`
}
