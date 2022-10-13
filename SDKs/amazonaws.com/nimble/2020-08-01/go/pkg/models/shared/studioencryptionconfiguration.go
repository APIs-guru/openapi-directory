package shared

type StudioEncryptionConfiguration struct {
	KeyArn  *string                                  `json:"keyArn"`
	KeyType StudioEncryptionConfigurationKeyTypeEnum `json:"keyType"`
}
