package shared

type UpdateWorkteamRequest struct {
	Description               *string                    `json:"Description"`
	MemberDefinitions         []MemberDefinition         `json:"MemberDefinitions"`
	NotificationConfiguration *NotificationConfiguration `json:"NotificationConfiguration"`
	WorkteamName              string                     `json:"WorkteamName"`
}
