package shared

type DraftTeam struct {
	DisplayName *string `json:"displayName,omitempty"`
	Location    *string `json:"location,omitempty"`
	Logo        *string `json:"logo,omitempty"`
	Nickname    *string `json:"nickname,omitempty"`
}
