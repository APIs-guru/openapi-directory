package shared



type AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails struct {
    AuthorizationConfig *AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails `json:"AuthorizationConfig,omitempty"`
    FilesystemID *string `json:"FilesystemId,omitempty"`
    RootDirectory *string `json:"RootDirectory,omitempty"`
    TransitEncryption *string `json:"TransitEncryption,omitempty"`
    TransitEncryptionPort *int64 `json:"TransitEncryptionPort,omitempty"`
    
}

