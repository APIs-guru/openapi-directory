package shared

// GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse
// Response message for ListCustomDimensions RPC.
type GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse struct {
	CustomDimensions []GoogleAnalyticsAdminV1alphaCustomDimension `json:"customDimensions,omitempty"`
	NextPageToken    *string                                      `json:"nextPageToken,omitempty"`
}
