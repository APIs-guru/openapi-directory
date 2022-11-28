package shared

// Contact
// This complex type contains contact information for an individual buyer or seller.
type Contact struct {
	CompanyName    *string         `json:"companyName,omitempty"`
	ContactAddress *ContactAddress `json:"contactAddress,omitempty"`
	FullName       *string         `json:"fullName,omitempty"`
	PrimaryPhone   *PhoneNumber    `json:"primaryPhone,omitempty"`
}
