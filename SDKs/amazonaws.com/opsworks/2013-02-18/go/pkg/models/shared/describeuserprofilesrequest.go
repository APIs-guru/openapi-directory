package shared

type DescribeUserProfilesRequest struct {
	IamUserArns []string `json:"IamUserArns,omitempty"`
}
