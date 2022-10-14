package shared

type SubscribeWithGoogleInfo struct {
	EmailAddress *string `json:"emailAddress,omitempty"`
	FamilyName   *string `json:"familyName,omitempty"`
	GivenName    *string `json:"givenName,omitempty"`
	ProfileID    *string `json:"profileId,omitempty"`
	ProfileName  *string `json:"profileName,omitempty"`
}
