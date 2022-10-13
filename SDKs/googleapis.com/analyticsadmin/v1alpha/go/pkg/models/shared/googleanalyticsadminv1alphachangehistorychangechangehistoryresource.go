package shared

type GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource struct {
	Account                               *GoogleAnalyticsAdminV1alphaAccount                               `json:"account"`
	AttributionSettings                   *GoogleAnalyticsAdminV1alphaAttributionSettings                   `json:"attributionSettings"`
	ConversionEvent                       *GoogleAnalyticsAdminV1alphaConversionEvent                       `json:"conversionEvent"`
	CustomDimension                       *GoogleAnalyticsAdminV1alphaCustomDimension                       `json:"customDimension"`
	CustomMetric                          *GoogleAnalyticsAdminV1alphaCustomMetric                          `json:"customMetric"`
	DataRetentionSettings                 *GoogleAnalyticsAdminV1alphaDataRetentionSettings                 `json:"dataRetentionSettings"`
	DataStream                            *GoogleAnalyticsAdminV1alphaDataStream                            `json:"dataStream"`
	DisplayVideo360AdvertiserLink         *GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink         `json:"displayVideo360AdvertiserLink"`
	DisplayVideo360AdvertiserLinkProposal *GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal `json:"displayVideo360AdvertiserLinkProposal"`
	FirebaseLink                          *GoogleAnalyticsAdminV1alphaFirebaseLink                          `json:"firebaseLink"`
	GoogleAdsLink                         *GoogleAnalyticsAdminV1alphaGoogleAdsLink                         `json:"googleAdsLink"`
	GoogleSignalsSettings                 *GoogleAnalyticsAdminV1alphaGoogleSignalsSettings                 `json:"googleSignalsSettings"`
	MeasurementProtocolSecret             *GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret             `json:"measurementProtocolSecret"`
	Property                              *GoogleAnalyticsAdminV1alphaProperty                              `json:"property"`
	SearchAds360Link                      *GoogleAnalyticsAdminV1alphaSearchAds360Link                      `json:"searchAds360Link"`
}
