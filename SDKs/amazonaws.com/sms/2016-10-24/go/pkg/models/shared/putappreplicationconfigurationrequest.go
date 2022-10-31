package shared

type PutAppReplicationConfigurationRequest struct {
	AppID                                *string                               `json:"appId,omitempty"`
	ServerGroupReplicationConfigurations []ServerGroupReplicationConfiguration `json:"serverGroupReplicationConfigurations,omitempty"`
}
