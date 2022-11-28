package shared

// Subnet
// Describes a subnet.
type Subnet struct {
	SubnetAvailabilityZone *AvailabilityZone
	SubnetIdentifier       *string
	SubnetStatus           *string
}
