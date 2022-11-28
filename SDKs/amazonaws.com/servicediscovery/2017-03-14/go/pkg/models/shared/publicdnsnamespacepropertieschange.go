package shared

// PublicDNSNamespacePropertiesChange
// Updated properties for the public DNS namespace.
type PublicDNSNamespacePropertiesChange struct {
	DNSProperties PublicDNSPropertiesMutableChange `json:"DnsProperties"`
}
