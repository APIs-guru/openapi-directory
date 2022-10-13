package shared

type PortProbeDetail struct {
	LocalIPDetails   *ActionLocalIPDetails   `json:"LocalIpDetails"`
	LocalPortDetails *ActionLocalPortDetails `json:"LocalPortDetails"`
	RemoteIPDetails  *ActionRemoteIPDetails  `json:"RemoteIpDetails"`
}
