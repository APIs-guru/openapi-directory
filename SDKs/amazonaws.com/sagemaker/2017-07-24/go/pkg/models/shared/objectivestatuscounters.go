package shared

type ObjectiveStatusCounters struct {
	Failed    *int64 `json:"Failed,omitempty"`
	Pending   *int64 `json:"Pending,omitempty"`
	Succeeded *int64 `json:"Succeeded,omitempty"`
}
