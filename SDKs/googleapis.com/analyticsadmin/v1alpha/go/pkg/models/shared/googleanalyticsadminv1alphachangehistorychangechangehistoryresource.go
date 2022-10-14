package shared

type GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource struct {
	Account                               *GoogleAnalyticsAdminV1alphaAccount                               `json:"account,omitempty"`
	AttributionSettings                   *GoogleAnalyticsAdminV1alphaAttributionSettings                   `json:"attributionSettings,omitempty"`
	ConversionEvent                       *GoogleAnalyticsAdminV1alphaConversionEvent                       `json:"conversionEvent,omitempty"`
	CustomDimension                       *GoogleAnalyticsAdminV1alphaCustomDimension                       `json:"customDimension,omitempty"`
	CustomMetric                          *GoogleAnalyticsAdminV1alphaCustomMetric                          `json:"customMetric,omitempty"`
	DataRetentionSettings                 *GoogleAnalyticsAdminV1alphaDataRetentionSettings                 `json:"dataRetentionSettings,omitempty"`
	DataStream                            *GoogleAnalyticsAdminV1alphaDataStream                            `json:"dataStream,omitempty"`
	DisplayVideo360AdvertiserLink         *GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink         `json:"displayVideo360AdvertiserLink,omitempty"`
	DisplayVideo360AdvertiserLinkProposal *GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal `json:"displayVideo360AdvertiserLinkProposal,omitempty"`
	FirebaseLink                          *GoogleAnalyticsAdminV1alphaFirebaseLink                          `json:"firebaseLink,omitempty"`
	GoogleAdsLink                         *GoogleAnalyticsAdminV1alphaGoogleAdsLink                         `json:"googleAdsLink,omitempty"`
	GoogleSignalsSettings                 *GoogleAnalyticsAdminV1alphaGoogleSignalsSettings                 `json:"googleSignalsSettings,omitempty"`
	MeasurementProtocolSecret             *GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret             `json:"measurementProtocolSecret,omitempty"`
	Property                              *GoogleAnalyticsAdminV1alphaProperty                              `json:"property,omitempty"`
	SearchAds360Link                      *GoogleAnalyticsAdminV1alphaSearchAds360Link                      `json:"searchAds360Link,omitempty"`
}
