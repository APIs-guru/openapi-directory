package shared

type SelfManagedEventSource struct {
	Endpoints map[string][]string `json:"Endpoints,omitempty"`
}
