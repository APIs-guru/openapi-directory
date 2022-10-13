package shared

type ProfilerRuleConfiguration struct {
	InstanceType          *ProcessingInstanceTypeEnum `json:"InstanceType"`
	LocalPath             *string                     `json:"LocalPath"`
	RuleConfigurationName string                      `json:"RuleConfigurationName"`
	RuleEvaluatorImage    string                      `json:"RuleEvaluatorImage"`
	RuleParameters        map[string]string           `json:"RuleParameters"`
	S3OutputPath          *string                     `json:"S3OutputPath"`
	VolumeSizeInGb        *int64                      `json:"VolumeSizeInGB"`
}
