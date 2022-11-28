package shared

// UnprocessedStatistics
// Sampling statistics from a call to <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a> that X-Ray could not process.
type UnprocessedStatistics struct {
	ErrorCode *string `json:"ErrorCode,omitempty"`
	Message   *string `json:"Message,omitempty"`
	RuleName  *string `json:"RuleName,omitempty"`
}
