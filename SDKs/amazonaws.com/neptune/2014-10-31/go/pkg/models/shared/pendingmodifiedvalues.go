package shared

// PendingModifiedValues
//
//	This data type is used as a response element in the <a>ModifyDBInstance</a> action.
type PendingModifiedValues struct {
	AllocatedStorage             *int64
	BackupRetentionPeriod        *int64
	CaCertificateIdentifier      *string
	DbInstanceClass              *string
	DbInstanceIdentifier         *string
	DbSubnetGroupName            *string
	EngineVersion                *string
	Iops                         *int64
	LicenseModel                 *string
	MasterUserPassword           *string
	MultiAz                      *bool
	PendingCloudwatchLogsExports *PendingCloudwatchLogsExports
	Port                         *int64
	StorageType                  *string
}
