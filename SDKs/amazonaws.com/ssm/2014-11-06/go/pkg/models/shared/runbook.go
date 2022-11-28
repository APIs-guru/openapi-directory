package shared

// Runbook
// <p>Information about an Automation runbook used in a runbook workflow in Change Manager.</p> <note> <p>The Automation runbooks specified for the runbook workflow can't run until all required approvals for the change request have been received.</p> </note>
type Runbook struct {
	DocumentName        string              `json:"DocumentName"`
	DocumentVersion     *string             `json:"DocumentVersion,omitempty"`
	MaxConcurrency      *string             `json:"MaxConcurrency,omitempty"`
	MaxErrors           *string             `json:"MaxErrors,omitempty"`
	Parameters          map[string][]string `json:"Parameters,omitempty"`
	TargetLocations     []TargetLocation    `json:"TargetLocations,omitempty"`
	TargetParameterName *string             `json:"TargetParameterName,omitempty"`
	Targets             []Target            `json:"Targets,omitempty"`
}
