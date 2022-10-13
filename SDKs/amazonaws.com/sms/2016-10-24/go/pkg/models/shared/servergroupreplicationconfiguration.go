package shared

type ServerGroupReplicationConfiguration struct {
	ServerGroupID                   *string                          `json:"serverGroupId"`
	ServerReplicationConfigurations []ServerReplicationConfiguration `json:"serverReplicationConfigurations"`
}
