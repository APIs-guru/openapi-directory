package shared

// GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamDataInput
// Data specific to iOS app streams.
type GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamDataInput struct {
	BundleID *string `json:"bundleId,omitempty"`
}

// GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData
// Data specific to iOS app streams.
type GoogleAnalyticsAdminV1alphaDataStreamIosAppStreamData struct {
	BundleID      *string `json:"bundleId,omitempty"`
	FirebaseAppID *string `json:"firebaseAppId,omitempty"`
}
