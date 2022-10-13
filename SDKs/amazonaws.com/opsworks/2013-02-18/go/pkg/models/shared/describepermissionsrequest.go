package shared

type DescribePermissionsRequest struct {
	IamUserArn *string `json:"IamUserArn"`
	StackID    *string `json:"StackId"`
}
