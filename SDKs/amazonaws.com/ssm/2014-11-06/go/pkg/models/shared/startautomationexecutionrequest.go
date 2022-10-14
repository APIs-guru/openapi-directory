package shared

type StartAutomationExecutionRequest struct {
	ClientToken         *string               `json:"ClientToken,omitempty"`
	DocumentName        string                `json:"DocumentName"`
	DocumentVersion     *string               `json:"DocumentVersion,omitempty"`
	MaxConcurrency      *string               `json:"MaxConcurrency,omitempty"`
	MaxErrors           *string               `json:"MaxErrors,omitempty"`
	Mode                *ExecutionModeEnum    `json:"Mode,omitempty"`
	Parameters          map[string][]string   `json:"Parameters,omitempty"`
	Tags                []Tag                 `json:"Tags,omitempty"`
	TargetLocations     []TargetLocation      `json:"TargetLocations,omitempty"`
	TargetMaps          []map[string][]string `json:"TargetMaps,omitempty"`
	TargetParameterName *string               `json:"TargetParameterName,omitempty"`
	Targets             []Target              `json:"Targets,omitempty"`
}
