package shared

// GoogleCloudApigeeV1CanaryEvaluationInput
// CanaryEvaluation represents the canary analysis between two versions of the runtime that is serving requests.
type GoogleCloudApigeeV1CanaryEvaluationInput struct {
	Control      *string                                          `json:"control,omitempty"`
	EndTime      *string                                          `json:"endTime,omitempty"`
	MetricLabels *GoogleCloudApigeeV1CanaryEvaluationMetricLabels `json:"metricLabels,omitempty"`
	StartTime    *string                                          `json:"startTime,omitempty"`
	Treatment    *string                                          `json:"treatment,omitempty"`
}
