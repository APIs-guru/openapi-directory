package shared

// Contact
// The type that defines the fields for the information of the contact person for the account.
type Contact struct {
	FirstName *string `json:"firstName,omitempty"`
	LastName  *string `json:"lastName,omitempty"`
}
