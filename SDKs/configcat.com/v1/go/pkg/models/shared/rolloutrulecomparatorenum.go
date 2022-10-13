package shared

type RolloutRuleComparatorEnum string

const (
	RolloutRuleComparatorEnumIsOneOf               RolloutRuleComparatorEnum = "isOneOf"
	RolloutRuleComparatorEnumIsNotOneOf            RolloutRuleComparatorEnum = "isNotOneOf"
	RolloutRuleComparatorEnumContains              RolloutRuleComparatorEnum = "contains"
	RolloutRuleComparatorEnumDoesNotContain        RolloutRuleComparatorEnum = "doesNotContain"
	RolloutRuleComparatorEnumSemVerIsOneOf         RolloutRuleComparatorEnum = "semVerIsOneOf"
	RolloutRuleComparatorEnumSemVerIsNotOneOf      RolloutRuleComparatorEnum = "semVerIsNotOneOf"
	RolloutRuleComparatorEnumSemVerLess            RolloutRuleComparatorEnum = "semVerLess"
	RolloutRuleComparatorEnumSemVerLessOrEquals    RolloutRuleComparatorEnum = "semVerLessOrEquals"
	RolloutRuleComparatorEnumSemVerGreater         RolloutRuleComparatorEnum = "semVerGreater"
	RolloutRuleComparatorEnumSemVerGreaterOrEquals RolloutRuleComparatorEnum = "semVerGreaterOrEquals"
	RolloutRuleComparatorEnumNumberEquals          RolloutRuleComparatorEnum = "numberEquals"
	RolloutRuleComparatorEnumNumberDoesNotEqual    RolloutRuleComparatorEnum = "numberDoesNotEqual"
	RolloutRuleComparatorEnumNumberLess            RolloutRuleComparatorEnum = "numberLess"
	RolloutRuleComparatorEnumNumberLessOrEquals    RolloutRuleComparatorEnum = "numberLessOrEquals"
	RolloutRuleComparatorEnumNumberGreater         RolloutRuleComparatorEnum = "numberGreater"
	RolloutRuleComparatorEnumNumberGreaterOrEquals RolloutRuleComparatorEnum = "numberGreaterOrEquals"
	RolloutRuleComparatorEnumSensitiveIsOneOf      RolloutRuleComparatorEnum = "sensitiveIsOneOf"
	RolloutRuleComparatorEnumSensitiveIsNotOneOf   RolloutRuleComparatorEnum = "sensitiveIsNotOneOf"
)
