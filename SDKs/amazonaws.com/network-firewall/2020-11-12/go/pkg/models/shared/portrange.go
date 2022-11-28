package shared

// PortRange
// A single port range specification. This is used for source and destination port ranges in the stateless rule <a>MatchAttributes</a>, <code>SourcePorts</code>, and <code>DestinationPorts</code> settings.
type PortRange struct {
	FromPort int64 `json:"FromPort"`
	ToPort   int64 `json:"ToPort"`
}
