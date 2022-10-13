package shared

type HpoResourceConfig struct {
	MaxNumberOfTrainingJobs *string `json:"maxNumberOfTrainingJobs"`
	MaxParallelTrainingJobs *string `json:"maxParallelTrainingJobs"`
}
