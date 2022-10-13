package shared

type StartAutomationExecutionRequest struct {
	ClientToken         *string               `json:"ClientToken"`
	DocumentName        string                `json:"DocumentName"`
	DocumentVersion     *string               `json:"DocumentVersion"`
	MaxConcurrency      *string               `json:"MaxConcurrency"`
	MaxErrors           *string               `json:"MaxErrors"`
	Mode                *ExecutionModeEnum    `json:"Mode"`
	Parameters          map[string][]string   `json:"Parameters"`
	Tags                []Tag                 `json:"Tags"`
	TargetLocations     []TargetLocation      `json:"TargetLocations"`
	TargetMaps          []map[string][]string `json:"TargetMaps"`
	TargetParameterName *string               `json:"TargetParameterName"`
	Targets             []Target              `json:"Targets"`
}
