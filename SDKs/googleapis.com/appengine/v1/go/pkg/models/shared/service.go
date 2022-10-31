package shared

type Service struct {
	ID              *string           `json:"id,omitempty"`
	Labels          map[string]string `json:"labels,omitempty"`
	Name            *string           `json:"name,omitempty"`
	NetworkSettings *NetworkSettings  `json:"networkSettings,omitempty"`
	Split           *TrafficSplit     `json:"split,omitempty"`
}
