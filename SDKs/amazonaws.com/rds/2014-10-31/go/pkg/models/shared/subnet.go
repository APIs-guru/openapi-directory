package shared

// Subnet
//
//	This data type is used as a response element for the <code>DescribeDBSubnetGroups</code> operation.
type Subnet struct {
	SubnetAvailabilityZone *AvailabilityZone
	SubnetIdentifier       *string
	SubnetOutpost          *Outpost
	SubnetStatus           *string
}
