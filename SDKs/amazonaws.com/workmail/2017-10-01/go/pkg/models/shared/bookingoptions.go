package shared

// BookingOptions
// At least one delegate must be associated to the resource to disable automatic replies from the resource.
type BookingOptions struct {
	AutoAcceptRequests             *bool `json:"AutoAcceptRequests,omitempty"`
	AutoDeclineConflictingRequests *bool `json:"AutoDeclineConflictingRequests,omitempty"`
	AutoDeclineRecurringRequests   *bool `json:"AutoDeclineRecurringRequests,omitempty"`
}
