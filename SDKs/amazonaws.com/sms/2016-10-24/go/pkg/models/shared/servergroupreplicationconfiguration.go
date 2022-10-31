package shared



type ServerGroupReplicationConfiguration struct {
    ServerGroupID *string `json:"serverGroupId,omitempty"`
    ServerReplicationConfigurations []ServerReplicationConfiguration `json:"serverReplicationConfigurations,omitempty"`
    
}

