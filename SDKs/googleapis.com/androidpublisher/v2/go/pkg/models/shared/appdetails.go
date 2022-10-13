package shared

type AppDetails struct {
	ContactEmail    *string `json:"contactEmail"`
	ContactPhone    *string `json:"contactPhone"`
	ContactWebsite  *string `json:"contactWebsite"`
	DefaultLanguage *string `json:"defaultLanguage"`
}
