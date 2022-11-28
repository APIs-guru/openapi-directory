package shared

// GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse
// Response message for ListSearchAds360Links RPC.
type GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse struct {
	NextPageToken     *string                                       `json:"nextPageToken,omitempty"`
	SearchAds360Links []GoogleAnalyticsAdminV1alphaSearchAds360Link `json:"searchAds360Links,omitempty"`
}
