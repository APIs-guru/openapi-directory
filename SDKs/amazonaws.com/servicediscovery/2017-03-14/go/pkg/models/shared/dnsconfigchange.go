package shared

type DNSConfigChange struct {
	DNSRecords []DNSRecord `json:"DnsRecords"`
}
