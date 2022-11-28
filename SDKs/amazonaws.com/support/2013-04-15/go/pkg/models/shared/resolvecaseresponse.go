package shared

// ResolveCaseResponse
// The status of the case returned by the <a>ResolveCase</a> operation.
type ResolveCaseResponse struct {
	FinalCaseStatus   *string `json:"finalCaseStatus,omitempty"`
	InitialCaseStatus *string `json:"initialCaseStatus,omitempty"`
}
