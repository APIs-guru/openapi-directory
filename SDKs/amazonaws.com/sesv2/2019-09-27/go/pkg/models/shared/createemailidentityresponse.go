package shared



type CreateEmailIdentityResponse struct {
    DkimAttributes *DkimAttributes `json:"DkimAttributes,omitempty"`
    IdentityType *IdentityTypeEnum `json:"IdentityType,omitempty"`
    VerifiedForSendingStatus *bool `json:"VerifiedForSendingStatus,omitempty"`
    
}

