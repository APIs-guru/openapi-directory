package shared

type Runbook struct {
	DocumentName        string              `json:"DocumentName"`
	DocumentVersion     *string             `json:"DocumentVersion"`
	MaxConcurrency      *string             `json:"MaxConcurrency"`
	MaxErrors           *string             `json:"MaxErrors"`
	Parameters          map[string][]string `json:"Parameters"`
	TargetLocations     []TargetLocation    `json:"TargetLocations"`
	TargetParameterName *string             `json:"TargetParameterName"`
	Targets             []Target            `json:"Targets"`
}
