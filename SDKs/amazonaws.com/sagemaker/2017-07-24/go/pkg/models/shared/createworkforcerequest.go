package shared

type CreateWorkforceRequest struct {
	CognitoConfig  *CognitoConfig  `json:"CognitoConfig"`
	OidcConfig     *OidcConfig     `json:"OidcConfig"`
	SourceIPConfig *SourceIPConfig `json:"SourceIpConfig"`
	Tags           []Tag           `json:"Tags"`
	WorkforceName  string          `json:"WorkforceName"`
}
