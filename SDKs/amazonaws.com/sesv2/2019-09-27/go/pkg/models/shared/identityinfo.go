package shared

type IdentityInfo struct {
	IdentityName   *string           `json:"IdentityName,omitempty"`
	IdentityType   *IdentityTypeEnum `json:"IdentityType,omitempty"`
	SendingEnabled *bool             `json:"SendingEnabled,omitempty"`
}
