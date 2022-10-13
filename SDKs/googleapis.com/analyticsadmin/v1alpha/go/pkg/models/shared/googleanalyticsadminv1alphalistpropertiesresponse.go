package shared

type GoogleAnalyticsAdminV1alphaListPropertiesResponse struct {
	NextPageToken *string                               `json:"nextPageToken"`
	Properties    []GoogleAnalyticsAdminV1alphaProperty `json:"properties"`
}
