package shared

type IdentityAwareProxy struct {
	Enabled                  *bool   `json:"enabled"`
	Oauth2ClientID           *string `json:"oauth2ClientId"`
	Oauth2ClientSecret       *string `json:"oauth2ClientSecret"`
	Oauth2ClientSecretSha256 *string `json:"oauth2ClientSecretSha256"`
}
