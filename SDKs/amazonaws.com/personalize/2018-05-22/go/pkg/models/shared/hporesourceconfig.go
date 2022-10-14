package shared

type HpoResourceConfig struct {
	MaxNumberOfTrainingJobs *string `json:"maxNumberOfTrainingJobs,omitempty"`
	MaxParallelTrainingJobs *string `json:"maxParallelTrainingJobs,omitempty"`
}
