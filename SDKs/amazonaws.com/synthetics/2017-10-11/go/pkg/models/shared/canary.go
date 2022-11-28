package shared

// Canary
// This structure contains all information about one canary in your account.
type Canary struct {
	ArtifactS3Location           *string                `json:"ArtifactS3Location,omitempty"`
	Code                         *CanaryCodeOutput      `json:"Code,omitempty"`
	EngineArn                    *string                `json:"EngineArn,omitempty"`
	ExecutionRoleArn             *string                `json:"ExecutionRoleArn,omitempty"`
	FailureRetentionPeriodInDays *int64                 `json:"FailureRetentionPeriodInDays,omitempty"`
	ID                           *string                `json:"Id,omitempty"`
	Name                         *string                `json:"Name,omitempty"`
	RunConfig                    *CanaryRunConfigOutput `json:"RunConfig,omitempty"`
	RuntimeVersion               *string                `json:"RuntimeVersion,omitempty"`
	Schedule                     *CanaryScheduleOutput  `json:"Schedule,omitempty"`
	Status                       *CanaryStatus          `json:"Status,omitempty"`
	SuccessRetentionPeriodInDays *int64                 `json:"SuccessRetentionPeriodInDays,omitempty"`
	Tags                         map[string]string      `json:"Tags,omitempty"`
	Timeline                     *CanaryTimeline        `json:"Timeline,omitempty"`
	VisualReference              *VisualReferenceOutput `json:"VisualReference,omitempty"`
	VpcConfig                    *VpcConfigOutput       `json:"VpcConfig,omitempty"`
}
