package shared

type GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse struct {
	GoogleAdsLinks []GoogleAnalyticsAdminV1alphaGoogleAdsLink `json:"googleAdsLinks"`
	NextPageToken  *string                                    `json:"nextPageToken"`
}
