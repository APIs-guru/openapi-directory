package shared

type Contact struct {
	CompanyName    *string         `json:"companyName"`
	ContactAddress *ContactAddress `json:"contactAddress"`
	FullName       *string         `json:"fullName"`
	PrimaryPhone   *PhoneNumber    `json:"primaryPhone"`
}
