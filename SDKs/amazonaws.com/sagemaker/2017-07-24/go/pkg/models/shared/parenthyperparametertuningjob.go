package shared

// ParentHyperParameterTuningJob
// A previously completed or stopped hyperparameter tuning job to be used as a starting point for a new hyperparameter tuning job.
type ParentHyperParameterTuningJob struct {
	HyperParameterTuningJobName *string `json:"HyperParameterTuningJobName,omitempty"`
}
