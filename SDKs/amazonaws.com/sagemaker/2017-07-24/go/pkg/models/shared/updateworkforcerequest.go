package shared

type UpdateWorkforceRequest struct {
	OidcConfig     *OidcConfig     `json:"OidcConfig"`
	SourceIPConfig *SourceIPConfig `json:"SourceIpConfig"`
	WorkforceName  string          `json:"WorkforceName"`
}
