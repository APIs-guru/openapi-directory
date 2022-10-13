package shared

type AwsEc2SecurityGroupUserIDGroupPair struct {
	GroupID                *string `json:"GroupId"`
	GroupName              *string `json:"GroupName"`
	PeeringStatus          *string `json:"PeeringStatus"`
	UserID                 *string `json:"UserId"`
	VpcID                  *string `json:"VpcId"`
	VpcPeeringConnectionID *string `json:"VpcPeeringConnectionId"`
}
