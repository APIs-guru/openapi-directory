package shared

type DNSProperties struct {
	HostedZoneID *string `json:"HostedZoneId"`
	Soa          *Soa    `json:"SOA"`
}
