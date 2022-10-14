package shared

type AwsRdsDbClusterSnapshotDetails struct {
	AllocatedStorage                 *int64   `json:"AllocatedStorage,omitempty"`
	AvailabilityZones                []string `json:"AvailabilityZones,omitempty"`
	ClusterCreateTime                *string  `json:"ClusterCreateTime,omitempty"`
	DbClusterIdentifier              *string  `json:"DbClusterIdentifier,omitempty"`
	DbClusterSnapshotIdentifier      *string  `json:"DbClusterSnapshotIdentifier,omitempty"`
	Engine                           *string  `json:"Engine,omitempty"`
	EngineVersion                    *string  `json:"EngineVersion,omitempty"`
	IamDatabaseAuthenticationEnabled *bool    `json:"IamDatabaseAuthenticationEnabled,omitempty"`
	KmsKeyID                         *string  `json:"KmsKeyId,omitempty"`
	LicenseModel                     *string  `json:"LicenseModel,omitempty"`
	MasterUsername                   *string  `json:"MasterUsername,omitempty"`
	PercentProgress                  *int64   `json:"PercentProgress,omitempty"`
	Port                             *int64   `json:"Port,omitempty"`
	SnapshotCreateTime               *string  `json:"SnapshotCreateTime,omitempty"`
	SnapshotType                     *string  `json:"SnapshotType,omitempty"`
	Status                           *string  `json:"Status,omitempty"`
	StorageEncrypted                 *bool    `json:"StorageEncrypted,omitempty"`
	VpcID                            *string  `json:"VpcId,omitempty"`
}
