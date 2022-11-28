package shared

// UpdateDomainContactRequest
// The UpdateDomainContact request includes the following elements.
type UpdateDomainContactRequest struct {
	AdminContact      *ContactDetail `json:"AdminContact,omitempty"`
	DomainName        string         `json:"DomainName"`
	RegistrantContact *ContactDetail `json:"RegistrantContact,omitempty"`
	TechContact       *ContactDetail `json:"TechContact,omitempty"`
}
