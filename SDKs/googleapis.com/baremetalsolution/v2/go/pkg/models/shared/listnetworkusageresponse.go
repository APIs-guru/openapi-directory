package shared

// ListNetworkUsageResponse
// Response with Networks with IPs
type ListNetworkUsageResponse struct {
	Networks []NetworkUsage `json:"networks,omitempty"`
}
