package shared

// Endpoint
// Represents an available endpoint against which to make API calls agaisnt, as well as the TTL for that endpoint.
type Endpoint struct {
	Address              string `json:"Address"`
	CachePeriodInMinutes int64  `json:"CachePeriodInMinutes"`
}
