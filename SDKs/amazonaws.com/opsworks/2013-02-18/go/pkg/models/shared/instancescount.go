package shared

type InstancesCount struct {
	Assigning      *int64 `json:"Assigning"`
	Booting        *int64 `json:"Booting"`
	ConnectionLost *int64 `json:"ConnectionLost"`
	Deregistering  *int64 `json:"Deregistering"`
	Online         *int64 `json:"Online"`
	Pending        *int64 `json:"Pending"`
	Rebooting      *int64 `json:"Rebooting"`
	Registered     *int64 `json:"Registered"`
	Registering    *int64 `json:"Registering"`
	Requested      *int64 `json:"Requested"`
	RunningSetup   *int64 `json:"RunningSetup"`
	SetupFailed    *int64 `json:"SetupFailed"`
	ShuttingDown   *int64 `json:"ShuttingDown"`
	StartFailed    *int64 `json:"StartFailed"`
	StopFailed     *int64 `json:"StopFailed"`
	Stopped        *int64 `json:"Stopped"`
	Stopping       *int64 `json:"Stopping"`
	Terminated     *int64 `json:"Terminated"`
	Terminating    *int64 `json:"Terminating"`
	Unassigning    *int64 `json:"Unassigning"`
}
