package shared

type Window struct {
	Days        []int32 `json:"days"`
	LengthHours int32   `json:"length_hours"`
	StartHour   int32   `json:"start_hour"`
}
