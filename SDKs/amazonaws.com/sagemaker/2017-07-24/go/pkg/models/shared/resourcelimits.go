package shared

// ResourceLimits
// Specifies the maximum number of training jobs and parallel training jobs that a hyperparameter tuning job can launch.
type ResourceLimits struct {
	MaxNumberOfTrainingJobs int64 `json:"MaxNumberOfTrainingJobs"`
	MaxParallelTrainingJobs int64 `json:"MaxParallelTrainingJobs"`
}
