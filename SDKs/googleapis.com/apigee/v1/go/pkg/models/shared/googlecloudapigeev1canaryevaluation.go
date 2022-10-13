package shared

type GoogleCloudApigeeV1CanaryEvaluationStateEnum string

const (
	GoogleCloudApigeeV1CanaryEvaluationStateEnumStateUnspecified GoogleCloudApigeeV1CanaryEvaluationStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudApigeeV1CanaryEvaluationStateEnumRunning          GoogleCloudApigeeV1CanaryEvaluationStateEnum = "RUNNING"
	GoogleCloudApigeeV1CanaryEvaluationStateEnumSucceeded        GoogleCloudApigeeV1CanaryEvaluationStateEnum = "SUCCEEDED"
)

type GoogleCloudApigeeV1CanaryEvaluationVerdictEnum string

const (
	GoogleCloudApigeeV1CanaryEvaluationVerdictEnumVerdictUnspecified GoogleCloudApigeeV1CanaryEvaluationVerdictEnum = "VERDICT_UNSPECIFIED"
	GoogleCloudApigeeV1CanaryEvaluationVerdictEnumNone               GoogleCloudApigeeV1CanaryEvaluationVerdictEnum = "NONE"
	GoogleCloudApigeeV1CanaryEvaluationVerdictEnumFail               GoogleCloudApigeeV1CanaryEvaluationVerdictEnum = "FAIL"
	GoogleCloudApigeeV1CanaryEvaluationVerdictEnumPass               GoogleCloudApigeeV1CanaryEvaluationVerdictEnum = "PASS"
)

type GoogleCloudApigeeV1CanaryEvaluation struct {
	Control      *string                                          `json:"control"`
	CreateTime   *string                                          `json:"createTime"`
	EndTime      *string                                          `json:"endTime"`
	MetricLabels *GoogleCloudApigeeV1CanaryEvaluationMetricLabels `json:"metricLabels"`
	Name         *string                                          `json:"name"`
	StartTime    *string                                          `json:"startTime"`
	State        *GoogleCloudApigeeV1CanaryEvaluationStateEnum    `json:"state"`
	Treatment    *string                                          `json:"treatment"`
	Verdict      *GoogleCloudApigeeV1CanaryEvaluationVerdictEnum  `json:"verdict"`
}
