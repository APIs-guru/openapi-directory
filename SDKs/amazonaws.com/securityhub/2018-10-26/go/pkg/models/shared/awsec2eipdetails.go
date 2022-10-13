package shared

type AwsEc2EipDetails struct {
	AllocationID            *string `json:"AllocationId"`
	AssociationID           *string `json:"AssociationId"`
	Domain                  *string `json:"Domain"`
	InstanceID              *string `json:"InstanceId"`
	NetworkBorderGroup      *string `json:"NetworkBorderGroup"`
	NetworkInterfaceID      *string `json:"NetworkInterfaceId"`
	NetworkInterfaceOwnerID *string `json:"NetworkInterfaceOwnerId"`
	PrivateIPAddress        *string `json:"PrivateIpAddress"`
	PublicIP                *string `json:"PublicIp"`
	PublicIpv4Pool          *string `json:"PublicIpv4Pool"`
}
