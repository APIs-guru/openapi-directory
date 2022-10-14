package shared

type PortProbeDetail struct {
	LocalIPDetails   *ActionLocalIPDetails   `json:"LocalIpDetails,omitempty"`
	LocalPortDetails *ActionLocalPortDetails `json:"LocalPortDetails,omitempty"`
	RemoteIPDetails  *ActionRemoteIPDetails  `json:"RemoteIpDetails,omitempty"`
}
