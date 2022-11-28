package shared

// Subnet
// <p>Specifies a subnet.</p> <p> This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
type Subnet struct {
	SubnetAvailabilityZone *AvailabilityZone
	SubnetIdentifier       *string
	SubnetStatus           *string
}
