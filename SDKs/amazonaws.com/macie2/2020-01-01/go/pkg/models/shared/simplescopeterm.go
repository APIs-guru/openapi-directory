package shared

// SimpleScopeTerm
// Specifies a property-based condition that determines whether an S3 object is included or excluded from a classification job.
type SimpleScopeTerm struct {
	Comparator *JobComparatorEnum  `json:"comparator,omitempty"`
	Key        *ScopeFilterKeyEnum `json:"key,omitempty"`
	Values     []string            `json:"values,omitempty"`
}
