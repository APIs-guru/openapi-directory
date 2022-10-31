package shared



type UpdateDomainRequest struct {
    DefaultUserSettings *UserSettings `json:"DefaultUserSettings,omitempty"`
    DomainID string `json:"DomainId"`
    
}

