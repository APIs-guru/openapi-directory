package shared

type CreateUserProfileRequest struct {
	DomainID                   string        `json:"DomainId"`
	SingleSignOnUserIdentifier *string       `json:"SingleSignOnUserIdentifier"`
	SingleSignOnUserValue      *string       `json:"SingleSignOnUserValue"`
	Tags                       []Tag         `json:"Tags"`
	UserProfileName            string        `json:"UserProfileName"`
	UserSettings               *UserSettings `json:"UserSettings"`
}
