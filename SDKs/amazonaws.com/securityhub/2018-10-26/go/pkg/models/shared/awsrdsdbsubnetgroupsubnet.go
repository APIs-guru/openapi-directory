package shared

type AwsRdsDbSubnetGroupSubnet struct {
	SubnetAvailabilityZone *AwsRdsDbSubnetGroupSubnetAvailabilityZone `json:"SubnetAvailabilityZone"`
	SubnetIdentifier       *string                                    `json:"SubnetIdentifier"`
	SubnetStatus           *string                                    `json:"SubnetStatus"`
}
