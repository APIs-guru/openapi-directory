package shared

// SelfManagedEventSource
// The self-managed Apache Kafka cluster for your event source.
type SelfManagedEventSource struct {
	Endpoints map[string][]string `json:"Endpoints,omitempty"`
}
