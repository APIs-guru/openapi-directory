package shared

type OrderableDbInstanceOption struct {
	AvailabilityZones  []AvailabilityZone
	DbInstanceClass    *string
	Engine             *string
	EngineVersion      *string
	LicenseModel       *string
	MultiAzCapable     *bool
	ReadReplicaCapable *bool
	Vpc                *bool
}
