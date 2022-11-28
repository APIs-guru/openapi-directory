package shared

// NotificationSpecification
// The NotificationSpecification data structure describes a HIT event notification for a HIT type.
type NotificationSpecification struct {
	Destination string                    `json:"Destination"`
	EventTypes  []EventTypeEnum           `json:"EventTypes"`
	Transport   NotificationTransportEnum `json:"Transport"`
	Version     string                    `json:"Version"`
}
