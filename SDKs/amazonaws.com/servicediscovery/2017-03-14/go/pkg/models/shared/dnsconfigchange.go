package shared

// DNSConfigChange
// A complex type that contains information about changes to the Route 53 DNS records that Cloud Map creates when you register an instance.
type DNSConfigChange struct {
	DNSRecords []DNSRecord `json:"DnsRecords"`
}
