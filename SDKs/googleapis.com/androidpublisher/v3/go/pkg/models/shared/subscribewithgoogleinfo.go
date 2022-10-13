package shared

type SubscribeWithGoogleInfo struct {
	EmailAddress *string `json:"emailAddress"`
	FamilyName   *string `json:"familyName"`
	GivenName    *string `json:"givenName"`
	ProfileID    *string `json:"profileId"`
	ProfileName  *string `json:"profileName"`
}
