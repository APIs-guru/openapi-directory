package shared

type AwsEc2SubnetDetails struct {
	AssignIpv6AddressOnCreation *bool                      `json:"AssignIpv6AddressOnCreation,omitempty"`
	AvailabilityZone            *string                    `json:"AvailabilityZone,omitempty"`
	AvailabilityZoneID          *string                    `json:"AvailabilityZoneId,omitempty"`
	AvailableIPAddressCount     *int64                     `json:"AvailableIpAddressCount,omitempty"`
	CidrBlock                   *string                    `json:"CidrBlock,omitempty"`
	DefaultForAz                *bool                      `json:"DefaultForAz,omitempty"`
	Ipv6CidrBlockAssociationSet []Ipv6CidrBlockAssociation `json:"Ipv6CidrBlockAssociationSet,omitempty"`
	MapPublicIPOnLaunch         *bool                      `json:"MapPublicIpOnLaunch,omitempty"`
	OwnerID                     *string                    `json:"OwnerId,omitempty"`
	State                       *string                    `json:"State,omitempty"`
	SubnetArn                   *string                    `json:"SubnetArn,omitempty"`
	SubnetID                    *string                    `json:"SubnetId,omitempty"`
	VpcID                       *string                    `json:"VpcId,omitempty"`
}
