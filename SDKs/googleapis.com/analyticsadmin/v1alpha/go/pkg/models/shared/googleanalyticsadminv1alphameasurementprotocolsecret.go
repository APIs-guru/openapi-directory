package shared

// GoogleAnalyticsAdminV1alphaMeasurementProtocolSecretInput
// A secret value used for sending hits to Measurement Protocol.
type GoogleAnalyticsAdminV1alphaMeasurementProtocolSecretInput struct {
	DisplayName *string `json:"displayName,omitempty"`
}

// GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret
// A secret value used for sending hits to Measurement Protocol.
type GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret struct {
	DisplayName *string `json:"displayName,omitempty"`
	Name        *string `json:"name,omitempty"`
	SecretValue *string `json:"secretValue,omitempty"`
}
