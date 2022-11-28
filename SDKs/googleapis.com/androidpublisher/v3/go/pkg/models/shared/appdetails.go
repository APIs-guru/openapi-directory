package shared

// AppDetails
// The app details. The resource for DetailsService.
type AppDetails struct {
	ContactEmail    *string `json:"contactEmail,omitempty"`
	ContactPhone    *string `json:"contactPhone,omitempty"`
	ContactWebsite  *string `json:"contactWebsite,omitempty"`
	DefaultLanguage *string `json:"defaultLanguage,omitempty"`
}
