package shared

type DNSProperties struct {
	HostedZoneID *string `json:"HostedZoneId,omitempty"`
	Soa          *Soa    `json:"SOA,omitempty"`
}
