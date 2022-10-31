package shared

type RegexMatchSet struct {
	Name             *string           `json:"Name,omitempty"`
	RegexMatchSetID  *string           `json:"RegexMatchSetId,omitempty"`
	RegexMatchTuples []RegexMatchTuple `json:"RegexMatchTuples,omitempty"`
}
