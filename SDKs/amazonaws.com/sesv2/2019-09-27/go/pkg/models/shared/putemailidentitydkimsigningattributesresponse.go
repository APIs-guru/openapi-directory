package shared



type PutEmailIdentityDkimSigningAttributesResponse struct {
    DkimStatus *DkimStatusEnum `json:"DkimStatus,omitempty"`
    DkimTokens []string `json:"DkimTokens,omitempty"`
    
}

