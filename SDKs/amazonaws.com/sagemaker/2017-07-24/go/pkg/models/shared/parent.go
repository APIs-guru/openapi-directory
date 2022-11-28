package shared

// Parent
// The trial that a trial component is associated with and the experiment the trial is part of. A component might not be associated with a trial. A component can be associated with multiple trials.
type Parent struct {
	ExperimentName *string `json:"ExperimentName,omitempty"`
	TrialName      *string `json:"TrialName,omitempty"`
}
