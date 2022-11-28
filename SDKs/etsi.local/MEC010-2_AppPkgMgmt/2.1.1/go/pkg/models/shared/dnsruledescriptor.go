package shared

type DNSRuleDescriptor struct {
	DNSRuleID     string
	DomainName    string
	IPAddress     string
	IPAddressType IPAddressTypeEnum
	TTL           *int64
}
