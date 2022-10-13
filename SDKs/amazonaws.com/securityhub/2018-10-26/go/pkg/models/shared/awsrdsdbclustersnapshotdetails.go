package shared

type AwsRdsDbClusterSnapshotDetails struct {
	AllocatedStorage                 *int64   `json:"AllocatedStorage"`
	AvailabilityZones                []string `json:"AvailabilityZones"`
	ClusterCreateTime                *string  `json:"ClusterCreateTime"`
	DbClusterIdentifier              *string  `json:"DbClusterIdentifier"`
	DbClusterSnapshotIdentifier      *string  `json:"DbClusterSnapshotIdentifier"`
	Engine                           *string  `json:"Engine"`
	EngineVersion                    *string  `json:"EngineVersion"`
	IamDatabaseAuthenticationEnabled *bool    `json:"IamDatabaseAuthenticationEnabled"`
	KmsKeyID                         *string  `json:"KmsKeyId"`
	LicenseModel                     *string  `json:"LicenseModel"`
	MasterUsername                   *string  `json:"MasterUsername"`
	PercentProgress                  *int64   `json:"PercentProgress"`
	Port                             *int64   `json:"Port"`
	SnapshotCreateTime               *string  `json:"SnapshotCreateTime"`
	SnapshotType                     *string  `json:"SnapshotType"`
	Status                           *string  `json:"Status"`
	StorageEncrypted                 *bool    `json:"StorageEncrypted"`
	VpcID                            *string  `json:"VpcId"`
}
