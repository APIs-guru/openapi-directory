package shared

type CanaryStatus struct {
	State           *CanaryStateEnum           `json:"State"`
	StateReason     *string                    `json:"StateReason"`
	StateReasonCode *CanaryStateReasonCodeEnum `json:"StateReasonCode"`
}
