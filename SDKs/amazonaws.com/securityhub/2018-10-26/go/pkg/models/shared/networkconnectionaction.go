package shared

type NetworkConnectionAction struct {
	Blocked             *bool                    `json:"Blocked"`
	ConnectionDirection *string                  `json:"ConnectionDirection"`
	LocalPortDetails    *ActionLocalPortDetails  `json:"LocalPortDetails"`
	Protocol            *string                  `json:"Protocol"`
	RemoteIPDetails     *ActionRemoteIPDetails   `json:"RemoteIpDetails"`
	RemotePortDetails   *ActionRemotePortDetails `json:"RemotePortDetails"`
}
