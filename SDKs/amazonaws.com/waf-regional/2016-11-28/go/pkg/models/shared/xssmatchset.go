package shared

type XSSMatchSet struct {
	Name           *string         `json:"Name,omitempty"`
	XSSMatchSetID  string          `json:"XssMatchSetId"`
	XSSMatchTuples []XSSMatchTuple `json:"XssMatchTuples"`
}
