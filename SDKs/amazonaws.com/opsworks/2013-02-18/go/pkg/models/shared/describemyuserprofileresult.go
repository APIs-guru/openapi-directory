package shared

// DescribeMyUserProfileResult
// Contains the response to a <code>DescribeMyUserProfile</code> request.
type DescribeMyUserProfileResult struct {
	UserProfile *SelfUserProfile `json:"UserProfile,omitempty"`
}
