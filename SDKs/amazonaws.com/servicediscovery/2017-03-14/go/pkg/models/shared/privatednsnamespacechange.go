package shared

// PrivateDNSNamespaceChange
// Updated properties for the private DNS namespace.
type PrivateDNSNamespaceChange struct {
	Description *string                              `json:"Description,omitempty"`
	Properties  *PrivateDNSNamespacePropertiesChange `json:"Properties,omitempty"`
}
