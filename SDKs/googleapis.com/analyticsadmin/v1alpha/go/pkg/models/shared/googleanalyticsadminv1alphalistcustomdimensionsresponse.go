package shared

type GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse struct {
	CustomDimensions []GoogleAnalyticsAdminV1alphaCustomDimension `json:"customDimensions"`
	NextPageToken    *string                                      `json:"nextPageToken"`
}
