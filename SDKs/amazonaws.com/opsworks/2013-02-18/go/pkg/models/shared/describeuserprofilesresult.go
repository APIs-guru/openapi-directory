package shared

// DescribeUserProfilesResult
// Contains the response to a <code>DescribeUserProfiles</code> request.
type DescribeUserProfilesResult struct {
	UserProfiles []UserProfile `json:"UserProfiles,omitempty"`
}
