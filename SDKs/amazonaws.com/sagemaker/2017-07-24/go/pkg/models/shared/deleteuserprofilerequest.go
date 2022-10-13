package shared

type DeleteUserProfileRequest struct {
	DomainID        string `json:"DomainId"`
	UserProfileName string `json:"UserProfileName"`
}
