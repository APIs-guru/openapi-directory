package shared

type ProcessDetails struct {
	LaunchedAt   *string `json:"LaunchedAt"`
	Name         *string `json:"Name"`
	ParentPid    *int64  `json:"ParentPid"`
	Path         *string `json:"Path"`
	Pid          *int64  `json:"Pid"`
	TerminatedAt *string `json:"TerminatedAt"`
}
