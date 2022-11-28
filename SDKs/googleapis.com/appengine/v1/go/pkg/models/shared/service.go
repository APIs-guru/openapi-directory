package shared

// Service
// A Service resource is a logical component of an application that can share state and communicate in a secure fashion with other services. For example, an application that handles customer requests might include separate services to handle tasks such as backend data analysis or API requests from mobile devices. Each service has a collection of versions that define a specific set of code used to implement the functionality of that service.
type Service struct {
	ID              *string           `json:"id,omitempty"`
	Labels          map[string]string `json:"labels,omitempty"`
	Name            *string           `json:"name,omitempty"`
	NetworkSettings *NetworkSettings  `json:"networkSettings,omitempty"`
	Split           *TrafficSplit     `json:"split,omitempty"`
}
