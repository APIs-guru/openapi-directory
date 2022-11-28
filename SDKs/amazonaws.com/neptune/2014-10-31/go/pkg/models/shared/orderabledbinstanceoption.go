package shared

// OrderableDbInstanceOption
// <p>Contains a list of available options for a DB instance.</p> <p> This data type is used as a response element in the <a>DescribeOrderableDBInstanceOptions</a> action.</p>
type OrderableDbInstanceOption struct {
	AvailabilityZones                 []AvailabilityZone
	DbInstanceClass                   *string
	Engine                            *string
	EngineVersion                     *string
	LicenseModel                      *string
	MaxIopsPerDbInstance              *int64
	MaxIopsPerGib                     *float64
	MaxStorageSize                    *int64
	MinIopsPerDbInstance              *int64
	MinIopsPerGib                     *float64
	MinStorageSize                    *int64
	MultiAzCapable                    *bool
	ReadReplicaCapable                *bool
	StorageType                       *string
	SupportsEnhancedMonitoring        *bool
	SupportsIamDatabaseAuthentication *bool
	SupportsIops                      *bool
	SupportsPerformanceInsights       *bool
	SupportsStorageEncryption         *bool
	Vpc                               *bool
}
