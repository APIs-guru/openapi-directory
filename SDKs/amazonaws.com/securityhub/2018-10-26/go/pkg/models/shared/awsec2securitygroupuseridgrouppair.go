package shared

type AwsEc2SecurityGroupUserIDGroupPair struct {
	GroupID                *string `json:"GroupId,omitempty"`
	GroupName              *string `json:"GroupName,omitempty"`
	PeeringStatus          *string `json:"PeeringStatus,omitempty"`
	UserID                 *string `json:"UserId,omitempty"`
	VpcID                  *string `json:"VpcId,omitempty"`
	VpcPeeringConnectionID *string `json:"VpcPeeringConnectionId,omitempty"`
}
