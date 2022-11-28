package shared

// DebugRuleConfiguration
// Configuration information for SageMaker Debugger rules for debugging. To learn more about how to configure the <code>DebugRuleConfiguration</code> parameter, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.
type DebugRuleConfiguration struct {
	InstanceType          *ProcessingInstanceTypeEnum `json:"InstanceType,omitempty"`
	LocalPath             *string                     `json:"LocalPath,omitempty"`
	RuleConfigurationName string                      `json:"RuleConfigurationName"`
	RuleEvaluatorImage    string                      `json:"RuleEvaluatorImage"`
	RuleParameters        map[string]string           `json:"RuleParameters,omitempty"`
	S3OutputPath          *string                     `json:"S3OutputPath,omitempty"`
	VolumeSizeInGb        *int64                      `json:"VolumeSizeInGB,omitempty"`
}
