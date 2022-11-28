package shared

// SoaChange
// Updated Start of Authority (SOA) properties for a public or private DNS namespace.
type SoaChange struct {
	TTL int64 `json:"TTL"`
}
