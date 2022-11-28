package shared

// GoogleAnalyticsAdminV1alphaAudienceEventFilter
// A filter that matches events of a single event name. If an event parameter is specified, only the subset of events that match both the single event name and the parameter filter expressions match this event filter.
type GoogleAnalyticsAdminV1alphaAudienceEventFilter struct {
	EventName                      *string                                              `json:"eventName,omitempty"`
	EventParameterFilterExpression *GoogleAnalyticsAdminV1alphaAudienceFilterExpression `json:"eventParameterFilterExpression,omitempty"`
}
