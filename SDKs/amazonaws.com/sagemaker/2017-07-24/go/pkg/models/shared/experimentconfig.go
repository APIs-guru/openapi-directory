package shared

// ExperimentConfig
// <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs:</p> <ul> <li> <p> <a>CreateProcessingJob</a> </p> </li> <li> <p> <a>CreateTrainingJob</a> </p> </li> <li> <p> <a>CreateTransformJob</a> </p> </li> </ul>
type ExperimentConfig struct {
	ExperimentName            *string `json:"ExperimentName,omitempty"`
	TrialComponentDisplayName *string `json:"TrialComponentDisplayName,omitempty"`
	TrialName                 *string `json:"TrialName,omitempty"`
}
