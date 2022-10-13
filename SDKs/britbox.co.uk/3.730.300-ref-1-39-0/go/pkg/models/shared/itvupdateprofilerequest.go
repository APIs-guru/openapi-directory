package shared

type ItvUpdateProfileRequest struct {
	DateOfBirth  *string `json:"dateOfBirth"`
	Email        *string `json:"email"`
	FirstName    *string `json:"firstName"`
	LastName     *string `json:"lastName"`
	Postcode     *string `json:"postcode"`
	ProfileToken string  `json:"profileToken"`
	Title        *string `json:"title"`
}
