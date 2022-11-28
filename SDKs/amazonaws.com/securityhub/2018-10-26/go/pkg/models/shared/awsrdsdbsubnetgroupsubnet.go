package shared

// AwsRdsDbSubnetGroupSubnet
// Information about a subnet in a subnet group.
type AwsRdsDbSubnetGroupSubnet struct {
	SubnetAvailabilityZone *AwsRdsDbSubnetGroupSubnetAvailabilityZone `json:"SubnetAvailabilityZone,omitempty"`
	SubnetIdentifier       *string                                    `json:"SubnetIdentifier,omitempty"`
	SubnetStatus           *string                                    `json:"SubnetStatus,omitempty"`
}
