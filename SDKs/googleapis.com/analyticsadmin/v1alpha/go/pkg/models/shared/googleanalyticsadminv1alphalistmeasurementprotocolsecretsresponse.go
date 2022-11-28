package shared

// GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse
// Response message for ListMeasurementProtocolSecret RPC
type GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse struct {
	MeasurementProtocolSecrets []GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret `json:"measurementProtocolSecrets,omitempty"`
	NextPageToken              *string                                                `json:"nextPageToken,omitempty"`
}
