package shared

// AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails
// Information about the Amazon Elastic File System file system that is used for task storage.
type AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails struct {
	AuthorizationConfig   *AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails `json:"AuthorizationConfig,omitempty"`
	FilesystemID          *string                                                                      `json:"FilesystemId,omitempty"`
	RootDirectory         *string                                                                      `json:"RootDirectory,omitempty"`
	TransitEncryption     *string                                                                      `json:"TransitEncryption,omitempty"`
	TransitEncryptionPort *int64                                                                       `json:"TransitEncryptionPort,omitempty"`
}
