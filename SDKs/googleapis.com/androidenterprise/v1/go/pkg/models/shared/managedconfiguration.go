package shared

type ManagedConfiguration struct {
	ConfigurationVariables *ConfigurationVariables `json:"configurationVariables"`
	Kind                   *string                 `json:"kind"`
	ManagedProperty        []ManagedProperty       `json:"managedProperty"`
	ProductID              *string                 `json:"productId"`
}
