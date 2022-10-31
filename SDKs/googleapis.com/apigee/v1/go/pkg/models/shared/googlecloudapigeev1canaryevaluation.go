package shared




type GoogleCloudApigeeV1CanaryEvaluationStateEnum string

const (
    GoogleCloudApigeeV1CanaryEvaluationStateEnumStateUnspecified GoogleCloudApigeeV1CanaryEvaluationStateEnum = "STATE_UNSPECIFIED"
GoogleCloudApigeeV1CanaryEvaluationStateEnumRunning GoogleCloudApigeeV1CanaryEvaluationStateEnum = "RUNNING"
GoogleCloudApigeeV1CanaryEvaluationStateEnumSucceeded GoogleCloudApigeeV1CanaryEvaluationStateEnum = "SUCCEEDED"
)



type GoogleCloudApigeeV1CanaryEvaluationVerdictEnum string

const (
    GoogleCloudApigeeV1CanaryEvaluationVerdictEnumVerdictUnspecified GoogleCloudApigeeV1CanaryEvaluationVerdictEnum = "VERDICT_UNSPECIFIED"
GoogleCloudApigeeV1CanaryEvaluationVerdictEnumNone GoogleCloudApigeeV1CanaryEvaluationVerdictEnum = "NONE"
GoogleCloudApigeeV1CanaryEvaluationVerdictEnumFail GoogleCloudApigeeV1CanaryEvaluationVerdictEnum = "FAIL"
GoogleCloudApigeeV1CanaryEvaluationVerdictEnumPass GoogleCloudApigeeV1CanaryEvaluationVerdictEnum = "PASS"
)


type GoogleCloudApigeeV1CanaryEvaluation struct {
    Control *string `json:"control,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    EndTime *string `json:"endTime,omitempty"`
    MetricLabels *GoogleCloudApigeeV1CanaryEvaluationMetricLabels `json:"metricLabels,omitempty"`
    Name *string `json:"name,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    State *GoogleCloudApigeeV1CanaryEvaluationStateEnum `json:"state,omitempty"`
    Treatment *string `json:"treatment,omitempty"`
    Verdict *GoogleCloudApigeeV1CanaryEvaluationVerdictEnum `json:"verdict,omitempty"`
    
}

