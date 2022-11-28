package shared

// TrialComponentStatus
// The status of the trial component.
type TrialComponentStatus struct {
	Message       *string                          `json:"Message,omitempty"`
	PrimaryStatus *TrialComponentPrimaryStatusEnum `json:"PrimaryStatus,omitempty"`
}
