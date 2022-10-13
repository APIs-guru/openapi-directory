package shared

type PipelineExperimentConfig struct {
	ExperimentName *string `json:"ExperimentName"`
	TrialName      *string `json:"TrialName"`
}
