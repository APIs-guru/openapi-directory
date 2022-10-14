package shared

type UserAuthData struct {
	AdConfigID         *int32  `json:"adConfigId,omitempty"`
	Login              *string `json:"login,omitempty"`
	Method             string  `json:"method"`
	MustChangePassword *bool   `json:"mustChangePassword,omitempty"`
	OidConfigID        *int32  `json:"oidConfigId,omitempty"`
	Password           *string `json:"password,omitempty"`
}
