package shared

// GoogleAnalyticsAdminV1alphaDataStreamWebStreamDataInput
// Data specific to web streams.
type GoogleAnalyticsAdminV1alphaDataStreamWebStreamDataInput struct {
	DefaultURI *string `json:"defaultUri,omitempty"`
}

// GoogleAnalyticsAdminV1alphaDataStreamWebStreamData
// Data specific to web streams.
type GoogleAnalyticsAdminV1alphaDataStreamWebStreamData struct {
	DefaultURI    *string `json:"defaultUri,omitempty"`
	FirebaseAppID *string `json:"firebaseAppId,omitempty"`
	MeasurementID *string `json:"measurementId,omitempty"`
}
