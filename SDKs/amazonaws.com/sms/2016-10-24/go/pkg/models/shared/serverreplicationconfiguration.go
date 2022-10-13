package shared

type ServerReplicationConfiguration struct {
	Server                      *Server                      `json:"server"`
	ServerReplicationParameters *ServerReplicationParameters `json:"serverReplicationParameters"`
}
