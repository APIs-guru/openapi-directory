package shared

type UserAuthData struct {
	AdConfigID         *int32  `json:"adConfigId"`
	Login              *string `json:"login"`
	Method             string  `json:"method"`
	MustChangePassword *bool   `json:"mustChangePassword"`
	OidConfigID        *int32  `json:"oidConfigId"`
	Password           *string `json:"password"`
}
