package shared

// ServiceAccount
// A service account identity, including the name and credentials that can be used to authenticate as the service account.
type ServiceAccount struct {
	Key  *ServiceAccountKey `json:"key,omitempty"`
	Name *string            `json:"name,omitempty"`
}
