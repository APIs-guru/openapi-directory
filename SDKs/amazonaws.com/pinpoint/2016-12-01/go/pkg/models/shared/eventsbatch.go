package shared

// EventsBatch
// Specifies a batch of endpoints and events to process.
type EventsBatch struct {
	Endpoint PublicEndpoint   `json:"Endpoint"`
	Events   map[string]Event `json:"Events"`
}
