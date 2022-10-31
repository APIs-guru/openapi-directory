package shared



type DkimAttributes struct {
    SigningAttributesOrigin *DkimSigningAttributesOriginEnum `json:"SigningAttributesOrigin,omitempty"`
    SigningEnabled *bool `json:"SigningEnabled,omitempty"`
    Status *DkimStatusEnum `json:"Status,omitempty"`
    Tokens []string `json:"Tokens,omitempty"`
    
}

