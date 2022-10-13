package shared

type AwsEc2SecurityGroupDetails struct {
	GroupID             *string                           `json:"GroupId"`
	GroupName           *string                           `json:"GroupName"`
	IPPermissions       []AwsEc2SecurityGroupIPPermission `json:"IpPermissions"`
	IPPermissionsEgress []AwsEc2SecurityGroupIPPermission `json:"IpPermissionsEgress"`
	OwnerID             *string                           `json:"OwnerId"`
	VpcID               *string                           `json:"VpcId"`
}
