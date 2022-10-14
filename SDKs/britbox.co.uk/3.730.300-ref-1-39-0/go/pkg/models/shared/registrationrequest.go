package shared

type RegistrationRequest struct {
	Email        string   `json:"email"`
	FirstName    *string  `json:"firstName,omitempty"`
	LanguageCode *string  `json:"languageCode,omitempty"`
	LastName     *string  `json:"lastName,omitempty"`
	Marketing    *bool    `json:"marketing,omitempty"`
	Password     string   `json:"password"`
	Pin          *string  `json:"pin,omitempty"`
	Segments     []string `json:"segments,omitempty"`
}
