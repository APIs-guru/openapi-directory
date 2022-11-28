package shared

// GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse
// Response message for ListGoogleAdsLinks RPC.
type GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse struct {
	GoogleAdsLinks []GoogleAnalyticsAdminV1alphaGoogleAdsLink `json:"googleAdsLinks,omitempty"`
	NextPageToken  *string                                    `json:"nextPageToken,omitempty"`
}
