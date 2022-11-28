package shared

// Soa
// Start of Authority (SOA) properties for a public or private DNS namespace.
type Soa struct {
	TTL int64 `json:"TTL"`
}
