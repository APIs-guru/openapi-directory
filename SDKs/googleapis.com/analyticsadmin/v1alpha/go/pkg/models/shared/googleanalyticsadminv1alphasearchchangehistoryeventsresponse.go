package shared

type GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse struct {
	ChangeHistoryEvents []GoogleAnalyticsAdminV1alphaChangeHistoryEvent `json:"changeHistoryEvents,omitempty"`
	NextPageToken       *string                                         `json:"nextPageToken,omitempty"`
}
