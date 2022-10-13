package shared

type GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse struct {
	MeasurementProtocolSecrets []GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret `json:"measurementProtocolSecrets"`
	NextPageToken              *string                                                `json:"nextPageToken"`
}
