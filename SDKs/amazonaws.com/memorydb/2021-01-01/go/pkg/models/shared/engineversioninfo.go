package shared



type EngineVersionInfo struct {
    EnginePatchVersion *string `json:"EnginePatchVersion,omitempty"`
    EngineVersion *string `json:"EngineVersion,omitempty"`
    ParameterGroupFamily *string `json:"ParameterGroupFamily,omitempty"`
    
}

