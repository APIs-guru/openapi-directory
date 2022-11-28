package shared

// SubscribeWithGoogleInfo
// Information associated with purchases made with 'Subscribe with Google'.
type SubscribeWithGoogleInfo struct {
	EmailAddress *string `json:"emailAddress,omitempty"`
	FamilyName   *string `json:"familyName,omitempty"`
	GivenName    *string `json:"givenName,omitempty"`
	ProfileID    *string `json:"profileId,omitempty"`
	ProfileName  *string `json:"profileName,omitempty"`
}
