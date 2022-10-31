package shared

type GetAppReplicationConfigurationResponse struct {
	ServerGroupReplicationConfigurations []ServerGroupReplicationConfiguration `json:"serverGroupReplicationConfigurations,omitempty"`
}
