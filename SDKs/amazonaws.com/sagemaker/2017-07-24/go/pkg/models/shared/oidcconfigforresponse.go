package shared

type OidcConfigForResponse struct {
	AuthorizationEndpoint *string `json:"AuthorizationEndpoint,omitempty"`
	ClientID              *string `json:"ClientId,omitempty"`
	Issuer                *string `json:"Issuer,omitempty"`
	JwksURI               *string `json:"JwksUri,omitempty"`
	LogoutEndpoint        *string `json:"LogoutEndpoint,omitempty"`
	TokenEndpoint         *string `json:"TokenEndpoint,omitempty"`
	UserInfoEndpoint      *string `json:"UserInfoEndpoint,omitempty"`
}
