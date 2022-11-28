package shared

// HpoResourceConfig
// Describes the resource configuration for hyperparameter optimization (HPO).
type HpoResourceConfig struct {
	MaxNumberOfTrainingJobs *string `json:"maxNumberOfTrainingJobs,omitempty"`
	MaxParallelTrainingJobs *string `json:"maxParallelTrainingJobs,omitempty"`
}
