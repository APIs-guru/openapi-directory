package shared



type DkimAttributes struct {
    SigningEnabled *bool `json:"SigningEnabled,omitempty"`
    Status *DkimStatusEnum `json:"Status,omitempty"`
    Tokens []string `json:"Tokens,omitempty"`
    
}

