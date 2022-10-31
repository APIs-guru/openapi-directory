package shared

type DescribeUserProfileRequest struct {
	DomainID        string `json:"DomainId"`
	UserProfileName string `json:"UserProfileName"`
}
