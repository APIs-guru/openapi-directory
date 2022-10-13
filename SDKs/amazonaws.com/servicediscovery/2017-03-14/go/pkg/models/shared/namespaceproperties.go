package shared

type NamespaceProperties struct {
	DNSProperties  *DNSProperties  `json:"DnsProperties"`
	HTTPProperties *HTTPProperties `json:"HttpProperties"`
}
