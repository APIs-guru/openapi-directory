package shared

import (
	"time"
)

// DbInstanceAutomatedBackup
// An automated backup of a DB instance. It consists of system backups, transaction logs, and the database instance properties that existed at the time you deleted the source instance.
type DbInstanceAutomatedBackup struct {
	AllocatedStorage                       *int64
	AvailabilityZone                       *string
	BackupRetentionPeriod                  *int64
	DbInstanceArn                          *string
	DbInstanceAutomatedBackupsArn          *string
	DbInstanceAutomatedBackupsReplications []DbInstanceAutomatedBackupsReplication
	DbInstanceIdentifier                   *string
	DbiResourceID                          *string
	Encrypted                              *bool
	Engine                                 *string
	EngineVersion                          *string
	IamDatabaseAuthenticationEnabled       *bool
	InstanceCreateTime                     *time.Time
	Iops                                   *int64
	KmsKeyID                               *string
	LicenseModel                           *string
	MasterUsername                         *string
	OptionGroupName                        *string
	Port                                   *int64
	Region                                 *string
	RestoreWindow                          *RestoreWindow
	Status                                 *string
	StorageType                            *string
	TdeCredentialArn                       *string
	Timezone                               *string
	VpcID                                  *string
}
