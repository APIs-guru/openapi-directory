package shared

// PendingModifiedValues
//
//	This data type is used as a response element in the <code>ModifyDBInstance</code> operation and contains changes that will be applied during the next maintenance window.
type PendingModifiedValues struct {
	AllocatedStorage                 *int64
	BackupRetentionPeriod            *int64
	CaCertificateIdentifier          *string
	DbInstanceClass                  *string
	DbInstanceIdentifier             *string
	DbSubnetGroupName                *string
	EngineVersion                    *string
	IamDatabaseAuthenticationEnabled *bool
	Iops                             *int64
	LicenseModel                     *string
	MasterUserPassword               *string
	MultiAz                          *bool
	PendingCloudwatchLogsExports     *PendingCloudwatchLogsExports
	Port                             *int64
	ProcessorFeatures                []ProcessorFeature
	StorageType                      *string
}
