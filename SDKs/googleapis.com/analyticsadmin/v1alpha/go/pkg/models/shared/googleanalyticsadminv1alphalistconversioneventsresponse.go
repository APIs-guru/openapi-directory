package shared

type GoogleAnalyticsAdminV1alphaListConversionEventsResponse struct {
	ConversionEvents []GoogleAnalyticsAdminV1alphaConversionEvent `json:"conversionEvents"`
	NextPageToken    *string                                      `json:"nextPageToken"`
}
