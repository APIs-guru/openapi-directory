package shared

// IPFilter
// The IP filter for querying findings.
type IPFilter struct {
	Cidr *string `json:"Cidr,omitempty"`
}
