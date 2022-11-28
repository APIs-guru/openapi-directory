package shared

// OrderableDbInstanceOption
// <p>Contains a list of available options for a DB instance.</p> <p> This data type is used as a response element in the <code>DescribeOrderableDBInstanceOptions</code> action. </p>
type OrderableDbInstanceOption struct {
	AvailabilityZoneGroup             *string
	AvailabilityZones                 []AvailabilityZone
	AvailableProcessorFeatures        []AvailableProcessorFeature
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
	OutpostCapable                    *bool
	ReadReplicaCapable                *bool
	StorageType                       *string
	SupportedActivityStreamModes      []string
	SupportedEngineModes              []string
	SupportsEnhancedMonitoring        *bool
	SupportsGlobalDatabases           *bool
	SupportsIamDatabaseAuthentication *bool
	SupportsIops                      *bool
	SupportsKerberosAuthentication    *bool
	SupportsPerformanceInsights       *bool
	SupportsStorageAutoscaling        *bool
	SupportsStorageEncryption         *bool
	Vpc                               *bool
}
