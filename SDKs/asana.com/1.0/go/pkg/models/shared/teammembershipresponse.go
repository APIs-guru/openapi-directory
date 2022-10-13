package shared

type TeamMembershipResponse struct {
	Gid          *string      `json:"gid"`
	IsGuest      *bool        `json:"is_guest"`
	ResourceType *string      `json:"resource_type"`
	Team         *TeamCompact `json:"team"`
	User         *UserCompact `json:"user"`
}
