package shared

type GoogleAnalyticsAdminV1alphaListUserLinksResponse struct {
	NextPageToken *string                               `json:"nextPageToken"`
	UserLinks     []GoogleAnalyticsAdminV1alphaUserLink `json:"userLinks"`
}
