package shared

type GroupMappingGroups struct {
	GroupDescription string  `json:"group_description"`
	GroupID          string  `json:"group_id"`
	GroupName        string  `json:"group_name"`
	Status           *string `json:"status"`
	SyncedAt         *string `json:"synced_at"`
}

type GroupMapping struct {
	Groups []GroupMappingGroups `json:"groups"`
}
