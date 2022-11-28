package shared

// IndividualAccount
// The type that defines the fields for the information of an individual account.
type IndividualAccount struct {
	Email               *string  `json:"email,omitempty"`
	FirstName           *string  `json:"firstName,omitempty"`
	LastName            *string  `json:"lastName,omitempty"`
	PrimaryPhone        *Phone   `json:"primaryPhone,omitempty"`
	RegistrationAddress *Address `json:"registrationAddress,omitempty"`
	SecondaryPhone      *Phone   `json:"secondaryPhone,omitempty"`
}
