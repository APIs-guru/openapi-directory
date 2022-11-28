package shared

// ProfilerRuleConfiguration
// Configuration information for profiling rules.
type ProfilerRuleConfiguration struct {
	InstanceType          *ProcessingInstanceTypeEnum `json:"InstanceType,omitempty"`
	LocalPath             *string                     `json:"LocalPath,omitempty"`
	RuleConfigurationName string                      `json:"RuleConfigurationName"`
	RuleEvaluatorImage    string                      `json:"RuleEvaluatorImage"`
	RuleParameters        map[string]string           `json:"RuleParameters,omitempty"`
	S3OutputPath          *string                     `json:"S3OutputPath,omitempty"`
	VolumeSizeInGb        *int64                      `json:"VolumeSizeInGB,omitempty"`
}
