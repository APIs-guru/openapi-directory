package shared

type RegexMatchSet struct {
	Name             *string           `json:"Name"`
	RegexMatchSetID  *string           `json:"RegexMatchSetId"`
	RegexMatchTuples []RegexMatchTuple `json:"RegexMatchTuples"`
}
