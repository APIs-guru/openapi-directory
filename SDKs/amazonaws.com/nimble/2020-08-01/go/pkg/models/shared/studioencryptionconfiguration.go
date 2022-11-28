package shared

// StudioEncryptionConfiguration
// Configuration of the encryption method that is used for the studio.
type StudioEncryptionConfiguration struct {
	KeyArn  *string                                  `json:"keyArn,omitempty"`
	KeyType StudioEncryptionConfigurationKeyTypeEnum `json:"keyType"`
}
