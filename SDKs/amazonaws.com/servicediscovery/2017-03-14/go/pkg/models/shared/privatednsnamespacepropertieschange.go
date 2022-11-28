package shared

// PrivateDNSNamespacePropertiesChange
// Updated properties for the private DNS namespace.
type PrivateDNSNamespacePropertiesChange struct {
	DNSProperties PrivateDNSPropertiesMutableChange `json:"DnsProperties"`
}
