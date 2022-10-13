package shared

type Domain struct {
	DomainName   *string `json:"DomainName"`
	HostedZoneID *string `json:"HostedZoneId"`
}
