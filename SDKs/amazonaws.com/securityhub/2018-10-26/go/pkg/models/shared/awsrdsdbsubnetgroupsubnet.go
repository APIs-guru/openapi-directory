package shared

type AwsRdsDbSubnetGroupSubnet struct {
	SubnetAvailabilityZone *AwsRdsDbSubnetGroupSubnetAvailabilityZone `json:"SubnetAvailabilityZone,omitempty"`
	SubnetIdentifier       *string                                    `json:"SubnetIdentifier,omitempty"`
	SubnetStatus           *string                                    `json:"SubnetStatus,omitempty"`
}
