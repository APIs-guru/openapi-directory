package shared

// ProcessDetails
// The details of process-related information about a finding.
type ProcessDetails struct {
	LaunchedAt   *string `json:"LaunchedAt,omitempty"`
	Name         *string `json:"Name,omitempty"`
	ParentPid    *int64  `json:"ParentPid,omitempty"`
	Path         *string `json:"Path,omitempty"`
	Pid          *int64  `json:"Pid,omitempty"`
	TerminatedAt *string `json:"TerminatedAt,omitempty"`
}
