package shared

type AwsRdsDbPendingModifiedValues struct {
	AllocatedStorage             *int64                              `json:"AllocatedStorage"`
	BackupRetentionPeriod        *int64                              `json:"BackupRetentionPeriod"`
	CaCertificateIdentifier      *string                             `json:"CaCertificateIdentifier"`
	DbInstanceClass              *string                             `json:"DbInstanceClass"`
	DbInstanceIdentifier         *string                             `json:"DbInstanceIdentifier"`
	DbSubnetGroupName            *string                             `json:"DbSubnetGroupName"`
	EngineVersion                *string                             `json:"EngineVersion"`
	Iops                         *int64                              `json:"Iops"`
	LicenseModel                 *string                             `json:"LicenseModel"`
	MasterUserPassword           *string                             `json:"MasterUserPassword"`
	MultiAz                      *bool                               `json:"MultiAZ"`
	PendingCloudWatchLogsExports *AwsRdsPendingCloudWatchLogsExports `json:"PendingCloudWatchLogsExports"`
	Port                         *int64                              `json:"Port"`
	ProcessorFeatures            []AwsRdsDbProcessorFeature          `json:"ProcessorFeatures"`
	StorageType                  *string                             `json:"StorageType"`
}
