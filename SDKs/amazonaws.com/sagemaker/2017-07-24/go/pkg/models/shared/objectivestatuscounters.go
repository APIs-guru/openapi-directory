package shared

type ObjectiveStatusCounters struct {
	Failed    *int64 `json:"Failed"`
	Pending   *int64 `json:"Pending"`
	Succeeded *int64 `json:"Succeeded"`
}
