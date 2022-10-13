package shared

type TargetTypeEnum string

const (
	TargetTypeEnumTLSSni   TargetTypeEnum = "TLS_SNI"
	TargetTypeEnumHTTPHost TargetTypeEnum = "HTTP_HOST"
)
