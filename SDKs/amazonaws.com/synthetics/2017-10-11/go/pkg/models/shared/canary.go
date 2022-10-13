package shared

type Canary struct {
	ArtifactS3Location           *string                `json:"ArtifactS3Location"`
	Code                         *CanaryCodeOutput      `json:"Code"`
	EngineArn                    *string                `json:"EngineArn"`
	ExecutionRoleArn             *string                `json:"ExecutionRoleArn"`
	FailureRetentionPeriodInDays *int64                 `json:"FailureRetentionPeriodInDays"`
	ID                           *string                `json:"Id"`
	Name                         *string                `json:"Name"`
	RunConfig                    *CanaryRunConfigOutput `json:"RunConfig"`
	RuntimeVersion               *string                `json:"RuntimeVersion"`
	Schedule                     *CanaryScheduleOutput  `json:"Schedule"`
	Status                       *CanaryStatus          `json:"Status"`
	SuccessRetentionPeriodInDays *int64                 `json:"SuccessRetentionPeriodInDays"`
	Tags                         map[string]string      `json:"Tags"`
	Timeline                     *CanaryTimeline        `json:"Timeline"`
	VisualReference              *VisualReferenceOutput `json:"VisualReference"`
	VpcConfig                    *VpcConfigOutput       `json:"VpcConfig"`
}
