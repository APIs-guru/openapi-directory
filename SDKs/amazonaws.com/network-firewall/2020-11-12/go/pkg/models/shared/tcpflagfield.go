package shared

// TCPFlagField
// TCP flags and masks to inspect packets for, used in stateless rules <a>MatchAttributes</a> settings.
type TCPFlagField struct {
	Flags []TCPFlagEnum `json:"Flags"`
	Masks []TCPFlagEnum `json:"Masks,omitempty"`
}
