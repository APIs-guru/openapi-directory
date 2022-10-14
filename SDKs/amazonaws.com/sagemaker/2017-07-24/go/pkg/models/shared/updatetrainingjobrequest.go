package shared

type UpdateTrainingJobRequest struct {
	ProfilerConfig             *ProfilerConfigForUpdate    `json:"ProfilerConfig,omitempty"`
	ProfilerRuleConfigurations []ProfilerRuleConfiguration `json:"ProfilerRuleConfigurations,omitempty"`
	TrainingJobName            string                      `json:"TrainingJobName"`
}
