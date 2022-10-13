package shared

type RolloutRuleModel struct {
	Comparator          *RolloutRuleComparatorEnum `json:"comparator"`
	ComparisonAttribute string                     `json:"comparisonAttribute"`
	ComparisonValue     string                     `json:"comparisonValue"`
	Value               map[string]interface{}     `json:"value"`
}
