package shared

// GoogleAnalyticsAdminV1alphaListConversionEventsResponse
// Response message for ListConversionEvents RPC.
type GoogleAnalyticsAdminV1alphaListConversionEventsResponse struct {
	ConversionEvents []GoogleAnalyticsAdminV1alphaConversionEvent `json:"conversionEvents,omitempty"`
	NextPageToken    *string                                      `json:"nextPageToken,omitempty"`
}
