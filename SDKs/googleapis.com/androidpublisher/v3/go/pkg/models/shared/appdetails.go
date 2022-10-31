package shared



type AppDetails struct {
    ContactEmail *string `json:"contactEmail,omitempty"`
    ContactPhone *string `json:"contactPhone,omitempty"`
    ContactWebsite *string `json:"contactWebsite,omitempty"`
    DefaultLanguage *string `json:"defaultLanguage,omitempty"`
    
}

