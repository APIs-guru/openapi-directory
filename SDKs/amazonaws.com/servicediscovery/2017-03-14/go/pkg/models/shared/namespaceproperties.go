package shared

// NamespaceProperties
// A complex type that contains information that's specific to the namespace type.
type NamespaceProperties struct {
	DNSProperties  *DNSProperties  `json:"DnsProperties,omitempty"`
	HTTPProperties *HTTPProperties `json:"HttpProperties,omitempty"`
}
