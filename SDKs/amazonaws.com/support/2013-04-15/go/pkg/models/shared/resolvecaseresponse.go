package shared

type ResolveCaseResponse struct {
	FinalCaseStatus   *string `json:"finalCaseStatus,omitempty"`
	InitialCaseStatus *string `json:"initialCaseStatus,omitempty"`
}
