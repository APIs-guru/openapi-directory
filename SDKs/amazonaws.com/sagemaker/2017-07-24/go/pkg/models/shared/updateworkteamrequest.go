package shared



type UpdateWorkteamRequest struct {
    Description *string `json:"Description,omitempty"`
    MemberDefinitions []MemberDefinition `json:"MemberDefinitions,omitempty"`
    NotificationConfiguration *NotificationConfiguration `json:"NotificationConfiguration,omitempty"`
    WorkteamName string `json:"WorkteamName"`
    
}

