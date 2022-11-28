package shared

// GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamData
// Data specific to Android app streams.
type GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamData struct {
	FirebaseAppID *string `json:"firebaseAppId,omitempty"`
	PackageName   *string `json:"packageName,omitempty"`
}

// GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamDataInput
// Data specific to Android app streams.
type GoogleAnalyticsAdminV1alphaDataStreamAndroidAppStreamDataInput struct {
	PackageName *string `json:"packageName,omitempty"`
}
