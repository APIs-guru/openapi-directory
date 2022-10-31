package shared



type StudioEncryptionConfiguration struct {
    KeyArn *string `json:"keyArn,omitempty"`
    KeyType StudioEncryptionConfigurationKeyTypeEnum `json:"keyType"`
    
}

