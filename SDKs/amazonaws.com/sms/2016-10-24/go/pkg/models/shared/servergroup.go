package shared

type ServerGroup struct {
	Name          *string  `json:"name,omitempty"`
	ServerGroupID *string  `json:"serverGroupId,omitempty"`
	ServerList    []Server `json:"serverList,omitempty"`
}
