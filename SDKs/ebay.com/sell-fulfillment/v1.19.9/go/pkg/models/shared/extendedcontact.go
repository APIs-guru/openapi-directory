package shared

// ExtendedContact
// This type contains shipping and contact information for a buyer or an eBay shipping partner.
type ExtendedContact struct {
	CompanyName    *string      `json:"companyName,omitempty"`
	ContactAddress *Address     `json:"contactAddress,omitempty"`
	Email          *string      `json:"email,omitempty"`
	FullName       *string      `json:"fullName,omitempty"`
	PrimaryPhone   *PhoneNumber `json:"primaryPhone,omitempty"`
}
