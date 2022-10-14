package shared

type SQLInjectionMatchSet struct {
	Name                    *string                  `json:"Name,omitempty"`
	SQLInjectionMatchSetID  string                   `json:"SqlInjectionMatchSetId"`
	SQLInjectionMatchTuples []SQLInjectionMatchTuple `json:"SqlInjectionMatchTuples"`
}
