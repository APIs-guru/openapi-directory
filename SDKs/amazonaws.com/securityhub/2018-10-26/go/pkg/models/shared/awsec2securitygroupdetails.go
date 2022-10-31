package shared



type AwsEc2SecurityGroupDetails struct {
    GroupID *string `json:"GroupId,omitempty"`
    GroupName *string `json:"GroupName,omitempty"`
    IPPermissions []AwsEc2SecurityGroupIPPermission `json:"IpPermissions,omitempty"`
    IPPermissionsEgress []AwsEc2SecurityGroupIPPermission `json:"IpPermissionsEgress,omitempty"`
    OwnerID *string `json:"OwnerId,omitempty"`
    VpcID *string `json:"VpcId,omitempty"`
    
}

