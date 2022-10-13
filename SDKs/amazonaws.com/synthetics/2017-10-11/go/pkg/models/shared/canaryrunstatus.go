package shared

type CanaryRunStatus struct {
	State           *CanaryRunStateEnum           `json:"State"`
	StateReason     *string                       `json:"StateReason"`
	StateReasonCode *CanaryRunStateReasonCodeEnum `json:"StateReasonCode"`
}
