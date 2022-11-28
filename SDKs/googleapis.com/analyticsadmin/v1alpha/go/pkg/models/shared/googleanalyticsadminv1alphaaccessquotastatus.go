package shared

// GoogleAnalyticsAdminV1alphaAccessQuotaStatus
// Current state for a particular quota group.
type GoogleAnalyticsAdminV1alphaAccessQuotaStatus struct {
	Consumed  *int32 `json:"consumed,omitempty"`
	Remaining *int32 `json:"remaining,omitempty"`
}
