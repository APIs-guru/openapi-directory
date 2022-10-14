package shared

type ServiceAccount struct {
	Key  *ServiceAccountKey `json:"key,omitempty"`
	Name *string            `json:"name,omitempty"`
}
