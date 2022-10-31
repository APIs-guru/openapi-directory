package shared

type CreateWorkteamRequest struct {
	Description               string                     `json:"Description"`
	MemberDefinitions         []MemberDefinition         `json:"MemberDefinitions"`
	NotificationConfiguration *NotificationConfiguration `json:"NotificationConfiguration,omitempty"`
	Tags                      []Tag                      `json:"Tags,omitempty"`
	WorkforceName             *string                    `json:"WorkforceName,omitempty"`
	WorkteamName              string                     `json:"WorkteamName"`
}
