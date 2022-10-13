package shared

type UpdateDomainContactRequest struct {
	AdminContact      *ContactDetail `json:"AdminContact"`
	DomainName        string         `json:"DomainName"`
	RegistrantContact *ContactDetail `json:"RegistrantContact"`
	TechContact       *ContactDetail `json:"TechContact"`
}
