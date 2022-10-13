package shared

type ServiceAccount struct {
	Key  *ServiceAccountKey `json:"key"`
	Name *string            `json:"name"`
}
