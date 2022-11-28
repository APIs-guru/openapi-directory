package shared

// AwsEc2NetworkInterfaceSecurityGroup
// A security group associated with the network interface.
type AwsEc2NetworkInterfaceSecurityGroup struct {
	GroupID   *string `json:"GroupId,omitempty"`
	GroupName *string `json:"GroupName,omitempty"`
}
