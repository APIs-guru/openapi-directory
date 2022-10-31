package operations

type GetOAuthTokenRequest struct {
	Request *interface{} `request:"mediaType=application/x-www-form-urlencoded"`
}

type GetOAuthToken200ApplicationJSON struct {
	AccessToken           *string `json:"access_token,omitempty"`
	ExpiresIn             *int64  `json:"expires_in,omitempty"`
	RefreshToken          *string `json:"refresh_token,omitempty"`
	RefreshTokenExpiresIn *int64  `json:"refresh_token_expires_in,omitempty"`
	TokenType             *string `json:"token_type,omitempty"`
}

type GetOAuthTokenResponse struct {
	ContentType                           string
	StatusCode                            int64
	GetOAuthToken200ApplicationJSONObject *GetOAuthToken200ApplicationJSON
}
