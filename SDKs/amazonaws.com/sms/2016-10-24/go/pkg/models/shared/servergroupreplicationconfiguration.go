package shared

// ServerGroupReplicationConfiguration
// Replication configuration for a server group.
type ServerGroupReplicationConfiguration struct {
	ServerGroupID                   *string                          `json:"serverGroupId,omitempty"`
	ServerReplicationConfigurations []ServerReplicationConfiguration `json:"serverReplicationConfigurations,omitempty"`
}
