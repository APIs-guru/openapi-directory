package shared

type OrganizationInvitation struct {
	CreatedAt          string     `json:"created_at"`
	Email              string     `json:"email"`
	FailedAt           *string    `json:"failed_at,omitempty"`
	FailedReason       *string    `json:"failed_reason,omitempty"`
	ID                 int64      `json:"id"`
	InvitationTeamURL  string     `json:"invitation_team_url"`
	InvitationTeamsURL *string    `json:"invitation_teams_url,omitempty"`
	Inviter            SimpleUser `json:"inviter"`
	Login              string     `json:"login"`
	NodeID             string     `json:"node_id"`
	Role               string     `json:"role"`
	TeamCount          int64      `json:"team_count"`
}
