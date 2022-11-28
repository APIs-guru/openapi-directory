package shared

// ServerGroup
// Logical grouping of servers.
type ServerGroup struct {
	Name          *string  `json:"name,omitempty"`
	ServerGroupID *string  `json:"serverGroupId,omitempty"`
	ServerList    []Server `json:"serverList,omitempty"`
}
