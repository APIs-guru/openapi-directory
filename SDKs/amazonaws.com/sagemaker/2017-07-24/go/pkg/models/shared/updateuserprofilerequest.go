package shared

type UpdateUserProfileRequest struct {
	DomainID        string        `json:"DomainId"`
	UserProfileName string        `json:"UserProfileName"`
	UserSettings    *UserSettings `json:"UserSettings,omitempty"`
}
