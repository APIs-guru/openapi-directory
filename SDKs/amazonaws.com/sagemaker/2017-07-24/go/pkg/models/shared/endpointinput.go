package shared

type EndpointInput struct {
	EndTimeOffset                 *string                               `json:"EndTimeOffset,omitempty"`
	EndpointName                  string                                `json:"EndpointName"`
	FeaturesAttribute             *string                               `json:"FeaturesAttribute,omitempty"`
	InferenceAttribute            *string                               `json:"InferenceAttribute,omitempty"`
	LocalPath                     string                                `json:"LocalPath"`
	ProbabilityAttribute          *string                               `json:"ProbabilityAttribute,omitempty"`
	ProbabilityThresholdAttribute *float64                              `json:"ProbabilityThresholdAttribute,omitempty"`
	S3DataDistributionType        *ProcessingS3DataDistributionTypeEnum `json:"S3DataDistributionType,omitempty"`
	S3InputMode                   *ProcessingS3InputModeEnum            `json:"S3InputMode,omitempty"`
	StartTimeOffset               *string                               `json:"StartTimeOffset,omitempty"`
}
