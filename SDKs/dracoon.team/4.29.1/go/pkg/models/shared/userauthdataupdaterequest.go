package shared

type UserAuthDataUpdateRequest struct {
	AdConfigID  *int32  `json:"adConfigId"`
	Login       *string `json:"login"`
	Method      *string `json:"method"`
	OidConfigID *int32  `json:"oidConfigId"`
}
