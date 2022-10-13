package shared

type WafRuleTypeEnum string

const (
	WafRuleTypeEnumRegular   WafRuleTypeEnum = "REGULAR"
	WafRuleTypeEnumRateBased WafRuleTypeEnum = "RATE_BASED"
	WafRuleTypeEnumGroup     WafRuleTypeEnum = "GROUP"
)
