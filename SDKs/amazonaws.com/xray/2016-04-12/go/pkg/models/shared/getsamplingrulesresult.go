package shared

type GetSamplingRulesResult struct {
	NextToken           *string              `json:"NextToken,omitempty"`
	SamplingRuleRecords []SamplingRuleRecord `json:"SamplingRuleRecords,omitempty"`
}
