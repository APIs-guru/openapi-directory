package shared

type ServiceTypeEnum string

const (
	ServiceTypeEnumHTTP    ServiceTypeEnum = "HTTP"
	ServiceTypeEnumDnshttp ServiceTypeEnum = "DNS_HTTP"
	ServiceTypeEnumDNS     ServiceTypeEnum = "DNS"
)
