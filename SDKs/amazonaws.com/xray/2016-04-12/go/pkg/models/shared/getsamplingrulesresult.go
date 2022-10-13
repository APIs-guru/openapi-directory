package shared

type GetSamplingRulesResult struct {
	NextToken           *string              `json:"NextToken"`
	SamplingRuleRecords []SamplingRuleRecord `json:"SamplingRuleRecords"`
}
