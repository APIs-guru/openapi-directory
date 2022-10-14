package shared

type ServerReplicationConfiguration struct {
	Server                      *Server                      `json:"server,omitempty"`
	ServerReplicationParameters *ServerReplicationParameters `json:"serverReplicationParameters,omitempty"`
}
