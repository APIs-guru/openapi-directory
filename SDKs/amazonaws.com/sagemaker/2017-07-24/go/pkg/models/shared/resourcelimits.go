package shared

type ResourceLimits struct {
	MaxNumberOfTrainingJobs int64 `json:"MaxNumberOfTrainingJobs"`
	MaxParallelTrainingJobs int64 `json:"MaxParallelTrainingJobs"`
}
