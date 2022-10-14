package shared

type GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse struct {
	CustomDimensions []GoogleAnalyticsAdminV1alphaCustomDimension `json:"customDimensions,omitempty"`
	NextPageToken    *string                                      `json:"nextPageToken,omitempty"`
}
