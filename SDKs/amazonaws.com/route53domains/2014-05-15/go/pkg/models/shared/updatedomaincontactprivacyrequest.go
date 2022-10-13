package shared

type UpdateDomainContactPrivacyRequest struct {
	AdminPrivacy      *bool  `json:"AdminPrivacy"`
	DomainName        string `json:"DomainName"`
	RegistrantPrivacy *bool  `json:"RegistrantPrivacy"`
	TechPrivacy       *bool  `json:"TechPrivacy"`
}
