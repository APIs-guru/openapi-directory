package shared

// IdentityAwareProxy
// Identity-Aware Proxy
type IdentityAwareProxy struct {
	Enabled                  *bool   `json:"enabled,omitempty"`
	Oauth2ClientID           *string `json:"oauth2ClientId,omitempty"`
	Oauth2ClientSecret       *string `json:"oauth2ClientSecret,omitempty"`
	Oauth2ClientSecretSha256 *string `json:"oauth2ClientSecretSha256,omitempty"`
}

// IdentityAwareProxyInput
// Identity-Aware Proxy
type IdentityAwareProxyInput struct {
	Enabled            *bool   `json:"enabled,omitempty"`
	Oauth2ClientID     *string `json:"oauth2ClientId,omitempty"`
	Oauth2ClientSecret *string `json:"oauth2ClientSecret,omitempty"`
}
