package shared

// IcmpTypeCode
// An Internet Control Message Protocol (ICMP) type and code.
type IcmpTypeCode struct {
	Code *int64 `json:"Code,omitempty"`
	Type *int64 `json:"Type,omitempty"`
}
