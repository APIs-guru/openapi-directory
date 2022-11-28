package shared

// ConnectorEvent
// Unify event that is supported on the connector. Events are delivered via Webhooks.
type ConnectorEvent struct {
	DownstreamEventType *string `json:"downstream_event_type,omitempty"`
	EventType           *string `json:"event_type,omitempty"`
	Resource            *string `json:"resource,omitempty"`
}
