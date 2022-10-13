package shared

type OidcConfigForResponse struct {
	AuthorizationEndpoint *string `json:"AuthorizationEndpoint"`
	ClientID              *string `json:"ClientId"`
	Issuer                *string `json:"Issuer"`
	JwksURI               *string `json:"JwksUri"`
	LogoutEndpoint        *string `json:"LogoutEndpoint"`
	TokenEndpoint         *string `json:"TokenEndpoint"`
	UserInfoEndpoint      *string `json:"UserInfoEndpoint"`
}
