package shared

// ManagedConfiguration
// A managed configuration resource contains the set of managed properties defined by the app developer in the app's managed configurations schema, as well as any configuration variables defined for the user.
type ManagedConfiguration struct {
	ConfigurationVariables *ConfigurationVariables `json:"configurationVariables,omitempty"`
	Kind                   *string                 `json:"kind,omitempty"`
	ManagedProperty        []ManagedProperty       `json:"managedProperty,omitempty"`
	ProductID              *string                 `json:"productId,omitempty"`
}
