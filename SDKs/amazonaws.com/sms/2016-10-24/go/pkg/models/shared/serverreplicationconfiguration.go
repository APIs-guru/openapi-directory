package shared

// ServerReplicationConfiguration
// Replication configuration of a server.
type ServerReplicationConfiguration struct {
	Server                      *Server                      `json:"server,omitempty"`
	ServerReplicationParameters *ServerReplicationParameters `json:"serverReplicationParameters,omitempty"`
}
