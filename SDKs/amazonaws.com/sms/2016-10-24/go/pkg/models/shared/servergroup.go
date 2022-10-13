package shared

type ServerGroup struct {
	Name          *string  `json:"name"`
	ServerGroupID *string  `json:"serverGroupId"`
	ServerList    []Server `json:"serverList"`
}
