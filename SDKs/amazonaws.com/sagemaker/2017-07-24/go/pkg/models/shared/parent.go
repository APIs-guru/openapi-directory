package shared

type Parent struct {
	ExperimentName *string `json:"ExperimentName,omitempty"`
	TrialName      *string `json:"TrialName,omitempty"`
}
