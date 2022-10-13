package shared

type UpdateTrainingJobRequest struct {
	ProfilerConfig             *ProfilerConfigForUpdate    `json:"ProfilerConfig"`
	ProfilerRuleConfigurations []ProfilerRuleConfiguration `json:"ProfilerRuleConfigurations"`
	TrainingJobName            string                      `json:"TrainingJobName"`
}
