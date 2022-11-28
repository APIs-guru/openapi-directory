package shared

// GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse
// Response message for ListDisplayVideo360AdvertiserLinks RPC.
type GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse struct {
	DisplayVideo360AdvertiserLinks []GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink `json:"displayVideo360AdvertiserLinks,omitempty"`
	NextPageToken                  *string                                                    `json:"nextPageToken,omitempty"`
}
