package shared

type Server struct {
	ReplicationJobID         *string         `json:"replicationJobId"`
	ReplicationJobTerminated *bool           `json:"replicationJobTerminated"`
	ServerID                 *string         `json:"serverId"`
	ServerType               *ServerTypeEnum `json:"serverType"`
	VMServer                 *VMServer       `json:"vmServer"`
}
