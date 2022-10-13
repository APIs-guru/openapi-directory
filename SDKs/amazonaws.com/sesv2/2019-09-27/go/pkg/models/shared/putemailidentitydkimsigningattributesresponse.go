package shared

type PutEmailIdentityDkimSigningAttributesResponse struct {
	DkimStatus *DkimStatusEnum `json:"DkimStatus"`
	DkimTokens []string        `json:"DkimTokens"`
}
