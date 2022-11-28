package shared

// PortProbeDetail
// A port scan that was part of the port probe. For each scan, PortProbeDetails provides information about the local IP address and port that were scanned, and the remote IP address that the scan originated from.
type PortProbeDetail struct {
	LocalIPDetails   *ActionLocalIPDetails   `json:"LocalIpDetails,omitempty"`
	LocalPortDetails *ActionLocalPortDetails `json:"LocalPortDetails,omitempty"`
	RemoteIPDetails  *ActionRemoteIPDetails  `json:"RemoteIpDetails,omitempty"`
}
