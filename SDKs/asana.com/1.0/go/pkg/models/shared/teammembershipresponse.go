package shared



type TeamMembershipResponse struct {
    Gid *string `json:"gid,omitempty"`
    IsGuest *bool `json:"is_guest,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    Team *TeamCompact `json:"team,omitempty"`
    User *UserCompact `json:"user,omitempty"`
    
}

