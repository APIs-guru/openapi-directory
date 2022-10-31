package shared



type DescribePermissionsRequest struct {
    IamUserArn *string `json:"IamUserArn,omitempty"`
    StackID *string `json:"StackId,omitempty"`
    
}

