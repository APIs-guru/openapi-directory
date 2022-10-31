package shared



type Runbook struct {
    DocumentName string `json:"DocumentName"`
    DocumentVersion *string `json:"DocumentVersion,omitempty"`
    MaxConcurrency *string `json:"MaxConcurrency,omitempty"`
    MaxErrors *string `json:"MaxErrors,omitempty"`
    Parameters map[string][]string `json:"Parameters,omitempty"`
    TargetLocations []TargetLocation `json:"TargetLocations,omitempty"`
    TargetParameterName *string `json:"TargetParameterName,omitempty"`
    Targets []Target `json:"Targets,omitempty"`
    
}

