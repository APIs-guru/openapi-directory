package shared



type AutoForward struct {
    CopyToMyself *bool `json:"copy_to_myself,omitempty"`
    EmailAddresses []string `json:"email_addresses,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    
}

