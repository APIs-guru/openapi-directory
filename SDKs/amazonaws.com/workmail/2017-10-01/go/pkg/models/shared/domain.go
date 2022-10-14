package shared

type Domain struct {
	DomainName   *string `json:"DomainName,omitempty"`
	HostedZoneID *string `json:"HostedZoneId,omitempty"`
}
