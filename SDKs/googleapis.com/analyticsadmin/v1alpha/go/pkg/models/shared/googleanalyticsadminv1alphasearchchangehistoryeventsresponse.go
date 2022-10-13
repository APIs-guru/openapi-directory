package shared

type GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse struct {
	ChangeHistoryEvents []GoogleAnalyticsAdminV1alphaChangeHistoryEvent `json:"changeHistoryEvents"`
	NextPageToken       *string                                         `json:"nextPageToken"`
}
