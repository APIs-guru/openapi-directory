package shared

type ExtendedContact struct {
	CompanyName    *string      `json:"companyName"`
	ContactAddress *Address     `json:"contactAddress"`
	Email          *string      `json:"email"`
	FullName       *string      `json:"fullName"`
	PrimaryPhone   *PhoneNumber `json:"primaryPhone"`
}
