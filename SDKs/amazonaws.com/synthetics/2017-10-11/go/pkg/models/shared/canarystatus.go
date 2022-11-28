package shared

// CanaryStatus
// A structure that contains the current state of the canary.
type CanaryStatus struct {
	State           *CanaryStateEnum           `json:"State,omitempty"`
	StateReason     *string                    `json:"StateReason,omitempty"`
	StateReasonCode *CanaryStateReasonCodeEnum `json:"StateReasonCode,omitempty"`
}
