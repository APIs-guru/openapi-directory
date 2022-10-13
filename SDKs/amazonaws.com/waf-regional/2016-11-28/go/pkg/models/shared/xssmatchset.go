package shared

type XSSMatchSet struct {
	Name           *string         `json:"Name"`
	XSSMatchSetID  string          `json:"XssMatchSetId"`
	XSSMatchTuples []XSSMatchTuple `json:"XssMatchTuples"`
}
