package shared

type TestIdentityProviderResponse struct {
	Message    *string `json:"Message,omitempty"`
	Response   *string `json:"Response,omitempty"`
	StatusCode int64   `json:"StatusCode"`
	URL        string  `json:"Url"`
}
