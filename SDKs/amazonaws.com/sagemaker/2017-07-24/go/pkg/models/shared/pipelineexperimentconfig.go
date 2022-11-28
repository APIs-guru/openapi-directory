package shared

// PipelineExperimentConfig
// Specifies the names of the experiment and trial created by a pipeline.
type PipelineExperimentConfig struct {
	ExperimentName *string `json:"ExperimentName,omitempty"`
	TrialName      *string `json:"TrialName,omitempty"`
}
