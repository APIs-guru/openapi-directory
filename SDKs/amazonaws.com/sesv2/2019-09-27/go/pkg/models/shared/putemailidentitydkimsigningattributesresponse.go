package shared

// PutEmailIdentityDkimSigningAttributesResponse
// <p>If the action is successful, the service sends back an HTTP 200 response.</p> <p>The following data is returned in JSON format by the service.</p>
type PutEmailIdentityDkimSigningAttributesResponse struct {
	DkimStatus *DkimStatusEnum `json:"DkimStatus,omitempty"`
	DkimTokens []string        `json:"DkimTokens,omitempty"`
}
