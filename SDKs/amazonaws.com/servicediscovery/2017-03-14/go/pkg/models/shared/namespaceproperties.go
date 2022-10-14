package shared

type NamespaceProperties struct {
	DNSProperties  *DNSProperties  `json:"DnsProperties,omitempty"`
	HTTPProperties *HTTPProperties `json:"HttpProperties,omitempty"`
}
