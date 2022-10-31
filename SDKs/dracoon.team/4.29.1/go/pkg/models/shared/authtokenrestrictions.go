package shared

type AuthTokenRestrictions struct {
	AccessTokenValidity  *int32 `json:"accessTokenValidity,omitempty"`
	RefreshTokenValidity *int32 `json:"refreshTokenValidity,omitempty"`
	RestrictionEnabled   *bool  `json:"restrictionEnabled,omitempty"`
}
