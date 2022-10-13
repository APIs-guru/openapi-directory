package shared

type Service struct {
	ID              *string           `json:"id"`
	Labels          map[string]string `json:"labels"`
	Name            *string           `json:"name"`
	NetworkSettings *NetworkSettings  `json:"networkSettings"`
	Split           *TrafficSplit     `json:"split"`
}
