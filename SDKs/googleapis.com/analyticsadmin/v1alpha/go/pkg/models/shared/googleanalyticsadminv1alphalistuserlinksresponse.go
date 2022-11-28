package shared

// GoogleAnalyticsAdminV1alphaListUserLinksResponse
// Response message for ListUserLinks RPC.
type GoogleAnalyticsAdminV1alphaListUserLinksResponse struct {
	NextPageToken *string                               `json:"nextPageToken,omitempty"`
	UserLinks     []GoogleAnalyticsAdminV1alphaUserLink `json:"userLinks,omitempty"`
}
