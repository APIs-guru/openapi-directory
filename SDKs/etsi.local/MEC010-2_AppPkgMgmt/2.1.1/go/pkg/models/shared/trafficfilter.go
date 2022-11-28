package shared

type TrafficFilter struct {
	DScp             *int64
	DstAddress       []string
	DstPort          []string
	DstTunnelPort    []string
	Protocol         []string
	QCi              *int64
	SrcAddress       []string
	SrcPort          []string
	SrcTunnelAddress []string
	SrcTunnelPort    []string
	TC               *int64
	Tag              []string
	TgtTunnelAddress []string
}
