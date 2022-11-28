package shared

// CanaryRunStatus
// This structure contains the status information about a canary run.
type CanaryRunStatus struct {
	State           *CanaryRunStateEnum           `json:"State,omitempty"`
	StateReason     *string                       `json:"StateReason,omitempty"`
	StateReasonCode *CanaryRunStateReasonCodeEnum `json:"StateReasonCode,omitempty"`
}
