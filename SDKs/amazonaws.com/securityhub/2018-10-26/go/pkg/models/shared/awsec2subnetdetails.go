package shared

type AwsEc2SubnetDetails struct {
	AssignIpv6AddressOnCreation *bool                      `json:"AssignIpv6AddressOnCreation"`
	AvailabilityZone            *string                    `json:"AvailabilityZone"`
	AvailabilityZoneID          *string                    `json:"AvailabilityZoneId"`
	AvailableIPAddressCount     *int64                     `json:"AvailableIpAddressCount"`
	CidrBlock                   *string                    `json:"CidrBlock"`
	DefaultForAz                *bool                      `json:"DefaultForAz"`
	Ipv6CidrBlockAssociationSet []Ipv6CidrBlockAssociation `json:"Ipv6CidrBlockAssociationSet"`
	MapPublicIPOnLaunch         *bool                      `json:"MapPublicIpOnLaunch"`
	OwnerID                     *string                    `json:"OwnerId"`
	State                       *string                    `json:"State"`
	SubnetArn                   *string                    `json:"SubnetArn"`
	SubnetID                    *string                    `json:"SubnetId"`
	VpcID                       *string                    `json:"VpcId"`
}
