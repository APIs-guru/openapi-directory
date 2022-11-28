package shared

// Stage
// A set amount of time that an escalation plan or engagement plan engages the specified contacts or contact methods.
type Stage struct {
	DurationInMinutes int64    `json:"DurationInMinutes"`
	Targets           []Target `json:"Targets"`
}
