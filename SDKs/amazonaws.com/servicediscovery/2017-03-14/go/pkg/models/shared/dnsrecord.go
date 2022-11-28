package shared

// DNSRecord
// A complex type that contains information about the Route 53 DNS records that you want Cloud Map to create when you register an instance.
type DNSRecord struct {
	TTL  int64          `json:"TTL"`
	Type RecordTypeEnum `json:"Type"`
}
