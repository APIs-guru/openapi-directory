package shared

// InstancesCount
// Describes how many instances a stack has for each status.
type InstancesCount struct {
	Assigning      *int64 `json:"Assigning,omitempty"`
	Booting        *int64 `json:"Booting,omitempty"`
	ConnectionLost *int64 `json:"ConnectionLost,omitempty"`
	Deregistering  *int64 `json:"Deregistering,omitempty"`
	Online         *int64 `json:"Online,omitempty"`
	Pending        *int64 `json:"Pending,omitempty"`
	Rebooting      *int64 `json:"Rebooting,omitempty"`
	Registered     *int64 `json:"Registered,omitempty"`
	Registering    *int64 `json:"Registering,omitempty"`
	Requested      *int64 `json:"Requested,omitempty"`
	RunningSetup   *int64 `json:"RunningSetup,omitempty"`
	SetupFailed    *int64 `json:"SetupFailed,omitempty"`
	ShuttingDown   *int64 `json:"ShuttingDown,omitempty"`
	StartFailed    *int64 `json:"StartFailed,omitempty"`
	StopFailed     *int64 `json:"StopFailed,omitempty"`
	Stopped        *int64 `json:"Stopped,omitempty"`
	Stopping       *int64 `json:"Stopping,omitempty"`
	Terminated     *int64 `json:"Terminated,omitempty"`
	Terminating    *int64 `json:"Terminating,omitempty"`
	Unassigning    *int64 `json:"Unassigning,omitempty"`
}
