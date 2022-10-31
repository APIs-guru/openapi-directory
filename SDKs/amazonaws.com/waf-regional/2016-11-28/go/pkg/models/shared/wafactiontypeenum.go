package shared

type WafActionTypeEnum string

const (
	WafActionTypeEnumBlock WafActionTypeEnum = "BLOCK"
	WafActionTypeEnumAllow WafActionTypeEnum = "ALLOW"
	WafActionTypeEnumCount WafActionTypeEnum = "COUNT"
)
