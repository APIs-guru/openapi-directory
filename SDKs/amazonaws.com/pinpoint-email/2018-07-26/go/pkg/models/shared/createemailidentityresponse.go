package shared

type CreateEmailIdentityResponse struct {
	DkimAttributes           *DkimAttributes   `json:"DkimAttributes"`
	IdentityType             *IdentityTypeEnum `json:"IdentityType"`
	VerifiedForSendingStatus *bool             `json:"VerifiedForSendingStatus"`
}
