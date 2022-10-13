package shared

type CreateWorkteamRequest struct {
	Description               string                     `json:"Description"`
	MemberDefinitions         []MemberDefinition         `json:"MemberDefinitions"`
	NotificationConfiguration *NotificationConfiguration `json:"NotificationConfiguration"`
	Tags                      []Tag                      `json:"Tags"`
	WorkforceName             *string                    `json:"WorkforceName"`
	WorkteamName              string                     `json:"WorkteamName"`
}
