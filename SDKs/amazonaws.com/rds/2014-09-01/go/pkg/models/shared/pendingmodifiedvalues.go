package shared

type PendingModifiedValues struct {
	AllocatedStorage      *int64
	BackupRetentionPeriod *int64
	DbInstanceClass       *string
	DbInstanceIdentifier  *string
	EngineVersion         *string
	Iops                  *int64
	MasterUserPassword    *string
	MultiAz               *bool
	Port                  *int64
	StorageType           *string
}
