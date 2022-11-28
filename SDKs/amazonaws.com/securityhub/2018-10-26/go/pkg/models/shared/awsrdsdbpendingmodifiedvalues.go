package shared

// AwsRdsDbPendingModifiedValues
// Changes to a DB instance that are currently pending.
type AwsRdsDbPendingModifiedValues struct {
	AllocatedStorage             *int64                              `json:"AllocatedStorage,omitempty"`
	BackupRetentionPeriod        *int64                              `json:"BackupRetentionPeriod,omitempty"`
	CaCertificateIdentifier      *string                             `json:"CaCertificateIdentifier,omitempty"`
	DbInstanceClass              *string                             `json:"DbInstanceClass,omitempty"`
	DbInstanceIdentifier         *string                             `json:"DbInstanceIdentifier,omitempty"`
	DbSubnetGroupName            *string                             `json:"DbSubnetGroupName,omitempty"`
	EngineVersion                *string                             `json:"EngineVersion,omitempty"`
	Iops                         *int64                              `json:"Iops,omitempty"`
	LicenseModel                 *string                             `json:"LicenseModel,omitempty"`
	MasterUserPassword           *string                             `json:"MasterUserPassword,omitempty"`
	MultiAz                      *bool                               `json:"MultiAZ,omitempty"`
	PendingCloudWatchLogsExports *AwsRdsPendingCloudWatchLogsExports `json:"PendingCloudWatchLogsExports,omitempty"`
	Port                         *int64                              `json:"Port,omitempty"`
	ProcessorFeatures            []AwsRdsDbProcessorFeature          `json:"ProcessorFeatures,omitempty"`
	StorageType                  *string                             `json:"StorageType,omitempty"`
}
