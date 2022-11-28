package shared

// NetworkConnectionAction
// Provided if <code>ActionType</code> is <code>NETWORK_CONNECTION</code>. It provides details about the attempted network connection that was detected.
type NetworkConnectionAction struct {
	Blocked             *bool                    `json:"Blocked,omitempty"`
	ConnectionDirection *string                  `json:"ConnectionDirection,omitempty"`
	LocalPortDetails    *ActionLocalPortDetails  `json:"LocalPortDetails,omitempty"`
	Protocol            *string                  `json:"Protocol,omitempty"`
	RemoteIPDetails     *ActionRemoteIPDetails   `json:"RemoteIpDetails,omitempty"`
	RemotePortDetails   *ActionRemotePortDetails `json:"RemotePortDetails,omitempty"`
}
