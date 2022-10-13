package shared

type SQLInjectionMatchSet struct {
	Name                    *string                  `json:"Name"`
	SQLInjectionMatchSetID  string                   `json:"SqlInjectionMatchSetId"`
	SQLInjectionMatchTuples []SQLInjectionMatchTuple `json:"SqlInjectionMatchTuples"`
}
