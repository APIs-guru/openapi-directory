package shared

// UpdateAuthTokenRestrictions
// Request model for updating auth token settings
type UpdateAuthTokenRestrictions struct {
	AccessTokenValidity  *int32 `json:"accessTokenValidity,omitempty"`
	OverwriteEnabled     bool   `json:"overwriteEnabled"`
	RefreshTokenValidity *int32 `json:"refreshTokenValidity,omitempty"`
}
