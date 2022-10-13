package shared

type PutAppReplicationConfigurationRequest struct {
	AppID                                *string                               `json:"appId"`
	ServerGroupReplicationConfigurations []ServerGroupReplicationConfiguration `json:"serverGroupReplicationConfigurations"`
}
