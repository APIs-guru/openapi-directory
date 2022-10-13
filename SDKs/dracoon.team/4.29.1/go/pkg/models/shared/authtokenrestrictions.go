package shared

type AuthTokenRestrictions struct {
	AccessTokenValidity  *int32 `json:"accessTokenValidity"`
	RefreshTokenValidity *int32 `json:"refreshTokenValidity"`
	RestrictionEnabled   *bool  `json:"restrictionEnabled"`
}
