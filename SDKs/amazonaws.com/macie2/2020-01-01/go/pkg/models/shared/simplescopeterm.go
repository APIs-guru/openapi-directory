package shared

type SimpleScopeTerm struct {
	Comparator *JobComparatorEnum  `json:"comparator,omitempty"`
	Key        *ScopeFilterKeyEnum `json:"key,omitempty"`
	Values     []string            `json:"values,omitempty"`
}
