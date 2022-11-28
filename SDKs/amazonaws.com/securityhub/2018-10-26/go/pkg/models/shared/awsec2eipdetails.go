package shared

// AwsEc2EipDetails
// Information about an Elastic IP address.
type AwsEc2EipDetails struct {
	AllocationID            *string `json:"AllocationId,omitempty"`
	AssociationID           *string `json:"AssociationId,omitempty"`
	Domain                  *string `json:"Domain,omitempty"`
	InstanceID              *string `json:"InstanceId,omitempty"`
	NetworkBorderGroup      *string `json:"NetworkBorderGroup,omitempty"`
	NetworkInterfaceID      *string `json:"NetworkInterfaceId,omitempty"`
	NetworkInterfaceOwnerID *string `json:"NetworkInterfaceOwnerId,omitempty"`
	PrivateIPAddress        *string `json:"PrivateIpAddress,omitempty"`
	PublicIP                *string `json:"PublicIp,omitempty"`
	PublicIpv4Pool          *string `json:"PublicIpv4Pool,omitempty"`
}
