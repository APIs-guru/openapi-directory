package shared

type UpdateAuthTokenRestrictions struct {
	AccessTokenValidity  *int32 `json:"accessTokenValidity"`
	OverwriteEnabled     bool   `json:"overwriteEnabled"`
	RefreshTokenValidity *int32 `json:"refreshTokenValidity"`
}
