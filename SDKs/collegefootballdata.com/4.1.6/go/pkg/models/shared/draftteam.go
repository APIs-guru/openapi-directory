package shared

type DraftTeam struct {
	DisplayName *string `json:"displayName"`
	Location    *string `json:"location"`
	Logo        *string `json:"logo"`
	Nickname    *string `json:"nickname"`
}
