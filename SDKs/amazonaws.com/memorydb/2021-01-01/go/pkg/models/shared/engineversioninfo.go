package shared

type EngineVersionInfo struct {
	EnginePatchVersion   *string `json:"EnginePatchVersion"`
	EngineVersion        *string `json:"EngineVersion"`
	ParameterGroupFamily *string `json:"ParameterGroupFamily"`
}
