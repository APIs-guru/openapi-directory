package shared



type CreateWorkforceRequest struct {
    CognitoConfig *CognitoConfig `json:"CognitoConfig,omitempty"`
    OidcConfig *OidcConfig `json:"OidcConfig,omitempty"`
    SourceIPConfig *SourceIPConfig `json:"SourceIpConfig,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    WorkforceName string `json:"WorkforceName"`
    
}

