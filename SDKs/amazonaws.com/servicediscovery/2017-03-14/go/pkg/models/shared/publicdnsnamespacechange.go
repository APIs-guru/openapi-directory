package shared

// PublicDNSNamespaceChange
// Updated properties for the public DNS namespace.
type PublicDNSNamespaceChange struct {
	Description *string                             `json:"Description,omitempty"`
	Properties  *PublicDNSNamespacePropertiesChange `json:"Properties,omitempty"`
}
