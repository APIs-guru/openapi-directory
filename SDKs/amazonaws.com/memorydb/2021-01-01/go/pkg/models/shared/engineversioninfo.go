package shared

// EngineVersionInfo
// Provides details of the Redis engine version
type EngineVersionInfo struct {
	EnginePatchVersion   *string `json:"EnginePatchVersion,omitempty"`
	EngineVersion        *string `json:"EngineVersion,omitempty"`
	ParameterGroupFamily *string `json:"ParameterGroupFamily,omitempty"`
}
