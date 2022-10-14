package shared

type UpdateSubscriptionRequest struct {
	AutoRenew *AutoRenewEnum `json:"AutoRenew,omitempty"`
}
