package shared

type ExperimentConfig struct {
	ExperimentName            *string `json:"ExperimentName"`
	TrialComponentDisplayName *string `json:"TrialComponentDisplayName"`
	TrialName                 *string `json:"TrialName"`
}
