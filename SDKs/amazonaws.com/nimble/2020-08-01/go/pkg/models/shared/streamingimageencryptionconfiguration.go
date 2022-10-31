package shared



type StreamingImageEncryptionConfiguration struct {
    KeyArn *string `json:"keyArn,omitempty"`
    KeyType StreamingImageEncryptionConfigurationKeyTypeEnum `json:"keyType"`
    
}

