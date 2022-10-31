package shared



type ListUserProfilesResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    UserProfiles []UserProfileDetails `json:"UserProfiles,omitempty"`
    
}

