package shared

// GoogleCloudAssuredworkloadsV1WorkloadKmsSettings
// Settings specific to the Key Management Service. This message is deprecated. In order to create a Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field.
type GoogleCloudAssuredworkloadsV1WorkloadKmsSettings struct {
	NextRotationTime *string `json:"nextRotationTime,omitempty"`
	RotationPeriod   *string `json:"rotationPeriod,omitempty"`
}
