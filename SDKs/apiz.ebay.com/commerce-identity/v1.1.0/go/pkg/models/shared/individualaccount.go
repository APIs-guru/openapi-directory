package shared

type IndividualAccount struct {
	Email               *string  `json:"email"`
	FirstName           *string  `json:"firstName"`
	LastName            *string  `json:"lastName"`
	PrimaryPhone        *Phone   `json:"primaryPhone"`
	RegistrationAddress *Address `json:"registrationAddress"`
	SecondaryPhone      *Phone   `json:"secondaryPhone"`
}
