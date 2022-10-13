package shared

type SimpleScopeTerm struct {
	Comparator *JobComparatorEnum  `json:"comparator"`
	Key        *ScopeFilterKeyEnum `json:"key"`
	Values     []string            `json:"values"`
}
