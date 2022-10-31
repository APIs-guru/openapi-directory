package shared

type BookingOptions struct {
	AutoAcceptRequests             *bool `json:"AutoAcceptRequests,omitempty"`
	AutoDeclineConflictingRequests *bool `json:"AutoDeclineConflictingRequests,omitempty"`
	AutoDeclineRecurringRequests   *bool `json:"AutoDeclineRecurringRequests,omitempty"`
}
