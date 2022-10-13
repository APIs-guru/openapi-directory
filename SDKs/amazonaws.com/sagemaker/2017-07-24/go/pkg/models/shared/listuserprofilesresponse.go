package shared

type ListUserProfilesResponse struct {
	NextToken    *string              `json:"NextToken"`
	UserProfiles []UserProfileDetails `json:"UserProfiles"`
}
