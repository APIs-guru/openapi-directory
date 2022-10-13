package shared

type TrialComponentStatus struct {
	Message       *string                          `json:"Message"`
	PrimaryStatus *TrialComponentPrimaryStatusEnum `json:"PrimaryStatus"`
}
