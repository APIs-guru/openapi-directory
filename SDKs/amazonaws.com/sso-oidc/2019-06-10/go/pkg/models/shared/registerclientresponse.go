package shared

type RegisterClientResponse struct {
	AuthorizationEndpoint *string `json:"authorizationEndpoint,omitempty"`
	ClientID              *string `json:"clientId,omitempty"`
	ClientIDIssuedAt      *int64  `json:"clientIdIssuedAt,omitempty"`
	ClientSecret          *string `json:"clientSecret,omitempty"`
	ClientSecretExpiresAt *int64  `json:"clientSecretExpiresAt,omitempty"`
	TokenEndpoint         *string `json:"tokenEndpoint,omitempty"`
}
