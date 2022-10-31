package shared

type ConfigProxy struct {
	TCPNodelay      *int32  `json:"TCP_NODELAY,omitempty"`
	ClientToServer  *string `json:"client_to_server,omitempty"`
	DisconnectDelay *int32  `json:"disconnect_delay,omitempty"`
	MaxConnects     *int32  `json:"max_connects,omitempty"`
	Portno          *int32  `json:"portno,omitempty"`
	PreConnect      *string `json:"pre_connect,omitempty"`
	ServerToClient  *string `json:"server_to_client,omitempty"`
	Target          *string `json:"target,omitempty"`
	Transport       *string `json:"transport,omitempty"`
}
