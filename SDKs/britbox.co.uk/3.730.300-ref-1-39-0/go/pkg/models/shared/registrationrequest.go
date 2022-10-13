package shared

type RegistrationRequest struct {
	Email        string   `json:"email"`
	FirstName    *string  `json:"firstName"`
	LanguageCode *string  `json:"languageCode"`
	LastName     *string  `json:"lastName"`
	Marketing    *bool    `json:"marketing"`
	Password     string   `json:"password"`
	Pin          *string  `json:"pin"`
	Segments     []string `json:"segments"`
}
