package shared

type PrivateDNSNamespaceChange struct {
	Description *string                              `json:"Description,omitempty"`
	Properties  *PrivateDNSNamespacePropertiesChange `json:"Properties,omitempty"`
}
