package shared

type GoogleAnalyticsAdminV1alphaListPropertiesResponse struct {
	NextPageToken *string                               `json:"nextPageToken,omitempty"`
	Properties    []GoogleAnalyticsAdminV1alphaProperty `json:"properties,omitempty"`
}
