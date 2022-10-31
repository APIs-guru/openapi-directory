package shared

type ThreatIntelIndicatorTypeEnum string

const (
	ThreatIntelIndicatorTypeEnumDomain       ThreatIntelIndicatorTypeEnum = "DOMAIN"
	ThreatIntelIndicatorTypeEnumEmailAddress ThreatIntelIndicatorTypeEnum = "EMAIL_ADDRESS"
	ThreatIntelIndicatorTypeEnumHashMd5      ThreatIntelIndicatorTypeEnum = "HASH_MD5"
	ThreatIntelIndicatorTypeEnumHashSha1     ThreatIntelIndicatorTypeEnum = "HASH_SHA1"
	ThreatIntelIndicatorTypeEnumHashSha256   ThreatIntelIndicatorTypeEnum = "HASH_SHA256"
	ThreatIntelIndicatorTypeEnumHashSha512   ThreatIntelIndicatorTypeEnum = "HASH_SHA512"
	ThreatIntelIndicatorTypeEnumIpv4Address  ThreatIntelIndicatorTypeEnum = "IPV4_ADDRESS"
	ThreatIntelIndicatorTypeEnumIpv6Address  ThreatIntelIndicatorTypeEnum = "IPV6_ADDRESS"
	ThreatIntelIndicatorTypeEnumMutex        ThreatIntelIndicatorTypeEnum = "MUTEX"
	ThreatIntelIndicatorTypeEnumProcess      ThreatIntelIndicatorTypeEnum = "PROCESS"
	ThreatIntelIndicatorTypeEnumURL          ThreatIntelIndicatorTypeEnum = "URL"
)
