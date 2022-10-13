package shared

type AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails struct {
	AuthorizationConfig   *AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails `json:"AuthorizationConfig"`
	FilesystemID          *string                                                                      `json:"FilesystemId"`
	RootDirectory         *string                                                                      `json:"RootDirectory"`
	TransitEncryption     *string                                                                      `json:"TransitEncryption"`
	TransitEncryptionPort *int64                                                                       `json:"TransitEncryptionPort"`
}
