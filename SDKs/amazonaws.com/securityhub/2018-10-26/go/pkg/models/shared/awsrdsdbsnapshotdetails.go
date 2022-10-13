package shared

type AwsRdsDbSnapshotDetails struct {
	AllocatedStorage                 *int64                     `json:"AllocatedStorage"`
	AvailabilityZone                 *string                    `json:"AvailabilityZone"`
	DbInstanceIdentifier             *string                    `json:"DbInstanceIdentifier"`
	DbSnapshotIdentifier             *string                    `json:"DbSnapshotIdentifier"`
	DbiResourceID                    *string                    `json:"DbiResourceId"`
	Encrypted                        *bool                      `json:"Encrypted"`
	Engine                           *string                    `json:"Engine"`
	EngineVersion                    *string                    `json:"EngineVersion"`
	IamDatabaseAuthenticationEnabled *bool                      `json:"IamDatabaseAuthenticationEnabled"`
	InstanceCreateTime               *string                    `json:"InstanceCreateTime"`
	Iops                             *int64                     `json:"Iops"`
	KmsKeyID                         *string                    `json:"KmsKeyId"`
	LicenseModel                     *string                    `json:"LicenseModel"`
	MasterUsername                   *string                    `json:"MasterUsername"`
	OptionGroupName                  *string                    `json:"OptionGroupName"`
	PercentProgress                  *int64                     `json:"PercentProgress"`
	Port                             *int64                     `json:"Port"`
	ProcessorFeatures                []AwsRdsDbProcessorFeature `json:"ProcessorFeatures"`
	SnapshotCreateTime               *string                    `json:"SnapshotCreateTime"`
	SnapshotType                     *string                    `json:"SnapshotType"`
	SourceDbSnapshotIdentifier       *string                    `json:"SourceDbSnapshotIdentifier"`
	SourceRegion                     *string                    `json:"SourceRegion"`
	Status                           *string                    `json:"Status"`
	StorageType                      *string                    `json:"StorageType"`
	TdeCredentialArn                 *string                    `json:"TdeCredentialArn"`
	Timezone                         *string                    `json:"Timezone"`
	VpcID                            *string                    `json:"VpcId"`
}
