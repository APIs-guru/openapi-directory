package shared

type Contact struct {
	CompanyName    *string         `json:"companyName,omitempty"`
	ContactAddress *ContactAddress `json:"contactAddress,omitempty"`
	FullName       *string         `json:"fullName,omitempty"`
	PrimaryPhone   *PhoneNumber    `json:"primaryPhone,omitempty"`
}
