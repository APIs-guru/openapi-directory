package shared



type UpdateWorkforceRequest struct {
    OidcConfig *OidcConfig `json:"OidcConfig,omitempty"`
    SourceIPConfig *SourceIPConfig `json:"SourceIpConfig,omitempty"`
    WorkforceName string `json:"WorkforceName"`
    
}

