package shared



type NetworkConnectionAction struct {
    Blocked *bool `json:"Blocked,omitempty"`
    ConnectionDirection *string `json:"ConnectionDirection,omitempty"`
    LocalPortDetails *ActionLocalPortDetails `json:"LocalPortDetails,omitempty"`
    Protocol *string `json:"Protocol,omitempty"`
    RemoteIPDetails *ActionRemoteIPDetails `json:"RemoteIpDetails,omitempty"`
    RemotePortDetails *ActionRemotePortDetails `json:"RemotePortDetails,omitempty"`
    
}

