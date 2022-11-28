package shared

// InstanceConfig
// Configuration parameters for a new instance.
type InstanceConfig struct {
	ClientNetwork  *NetworkAddress `json:"clientNetwork,omitempty"`
	Hyperthreading *bool           `json:"hyperthreading,omitempty"`
	ID             *string         `json:"id,omitempty"`
	InstanceType   *string         `json:"instanceType,omitempty"`
	Location       *string         `json:"location,omitempty"`
	OsImage        *string         `json:"osImage,omitempty"`
	PrivateNetwork *NetworkAddress `json:"privateNetwork,omitempty"`
	UserNote       *string         `json:"userNote,omitempty"`
}
