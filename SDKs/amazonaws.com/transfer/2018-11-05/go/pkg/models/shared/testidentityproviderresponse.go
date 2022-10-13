package shared

type TestIdentityProviderResponse struct {
	Message    *string `json:"Message"`
	Response   *string `json:"Response"`
	StatusCode int64   `json:"StatusCode"`
	URL        string  `json:"Url"`
}
