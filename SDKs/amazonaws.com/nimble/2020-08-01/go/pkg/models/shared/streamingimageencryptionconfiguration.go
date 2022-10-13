package shared

type StreamingImageEncryptionConfiguration struct {
	KeyArn  *string                                          `json:"keyArn"`
	KeyType StreamingImageEncryptionConfigurationKeyTypeEnum `json:"keyType"`
}
