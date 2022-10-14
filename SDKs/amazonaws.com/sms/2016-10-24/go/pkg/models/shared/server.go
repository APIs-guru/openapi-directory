package shared

type Server struct {
	ReplicationJobID         *string         `json:"replicationJobId,omitempty"`
	ReplicationJobTerminated *bool           `json:"replicationJobTerminated,omitempty"`
	ServerID                 *string         `json:"serverId,omitempty"`
	ServerType               *ServerTypeEnum `json:"serverType,omitempty"`
	VMServer                 *VMServer       `json:"vmServer,omitempty"`
}
