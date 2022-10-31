package shared



type CreateUserProfileRequest struct {
    DomainID string `json:"DomainId"`
    SingleSignOnUserIdentifier *string `json:"SingleSignOnUserIdentifier,omitempty"`
    SingleSignOnUserValue *string `json:"SingleSignOnUserValue,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    UserProfileName string `json:"UserProfileName"`
    UserSettings *UserSettings `json:"UserSettings,omitempty"`
    
}

