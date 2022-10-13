package shared

type BookingOptions struct {
	AutoAcceptRequests             *bool `json:"AutoAcceptRequests"`
	AutoDeclineConflictingRequests *bool `json:"AutoDeclineConflictingRequests"`
	AutoDeclineRecurringRequests   *bool `json:"AutoDeclineRecurringRequests"`
}
