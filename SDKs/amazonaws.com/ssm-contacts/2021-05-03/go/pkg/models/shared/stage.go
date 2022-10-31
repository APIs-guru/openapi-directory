package shared

type Stage struct {
	DurationInMinutes int64    `json:"DurationInMinutes"`
	Targets           []Target `json:"Targets"`
}
