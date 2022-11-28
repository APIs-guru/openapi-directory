package shared

// CreateCaseResponse
// The support case ID returned by a successful completion of the <a>CreateCase</a> operation.
type CreateCaseResponse struct {
	CaseID *string `json:"caseId,omitempty"`
}
