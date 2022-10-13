package shared

type IdentityInfo struct {
	IdentityName   *string           `json:"IdentityName"`
	IdentityType   *IdentityTypeEnum `json:"IdentityType"`
	SendingEnabled *bool             `json:"SendingEnabled"`
}
