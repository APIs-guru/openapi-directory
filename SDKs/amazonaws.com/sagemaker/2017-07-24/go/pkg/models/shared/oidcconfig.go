package shared

type OidcConfig struct {
	AuthorizationEndpoint string `json:"AuthorizationEndpoint"`
	ClientID              string `json:"ClientId"`
	ClientSecret          string `json:"ClientSecret"`
	Issuer                string `json:"Issuer"`
	JwksURI               string `json:"JwksUri"`
	LogoutEndpoint        string `json:"LogoutEndpoint"`
	TokenEndpoint         string `json:"TokenEndpoint"`
	UserInfoEndpoint      string `json:"UserInfoEndpoint"`
}
