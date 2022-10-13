package shared

type RegisterClientResponse struct {
	AuthorizationEndpoint *string `json:"authorizationEndpoint"`
	ClientID              *string `json:"clientId"`
	ClientIDIssuedAt      *int64  `json:"clientIdIssuedAt"`
	ClientSecret          *string `json:"clientSecret"`
	ClientSecretExpiresAt *int64  `json:"clientSecretExpiresAt"`
	TokenEndpoint         *string `json:"tokenEndpoint"`
}
