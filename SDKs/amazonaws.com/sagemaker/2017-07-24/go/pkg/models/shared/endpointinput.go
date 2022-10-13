package shared

type EndpointInput struct {
	EndTimeOffset                 *string                               `json:"EndTimeOffset"`
	EndpointName                  string                                `json:"EndpointName"`
	FeaturesAttribute             *string                               `json:"FeaturesAttribute"`
	InferenceAttribute            *string                               `json:"InferenceAttribute"`
	LocalPath                     string                                `json:"LocalPath"`
	ProbabilityAttribute          *string                               `json:"ProbabilityAttribute"`
	ProbabilityThresholdAttribute *float64                              `json:"ProbabilityThresholdAttribute"`
	S3DataDistributionType        *ProcessingS3DataDistributionTypeEnum `json:"S3DataDistributionType"`
	S3InputMode                   *ProcessingS3InputModeEnum            `json:"S3InputMode"`
	StartTimeOffset               *string                               `json:"StartTimeOffset"`
}
