package shared



type UserAuthDataUpdateRequest struct {
    AdConfigID *int32 `json:"adConfigId,omitempty"`
    Login *string `json:"login,omitempty"`
    Method *string `json:"method,omitempty"`
    OidConfigID *int32 `json:"oidConfigId,omitempty"`
    
}

