package shared

type ConfigProxy struct {
	TCPNodelay      *int32  `json:"TCP_NODELAY"`
	ClientToServer  *string `json:"client_to_server"`
	DisconnectDelay *int32  `json:"disconnect_delay"`
	MaxConnects     *int32  `json:"max_connects"`
	Portno          *int32  `json:"portno"`
	PreConnect      *string `json:"pre_connect"`
	ServerToClient  *string `json:"server_to_client"`
	Target          *string `json:"target"`
	Transport       *string `json:"transport"`
}
