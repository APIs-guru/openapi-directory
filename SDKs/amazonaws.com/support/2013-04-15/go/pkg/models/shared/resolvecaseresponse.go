package shared

type ResolveCaseResponse struct {
	FinalCaseStatus   *string `json:"finalCaseStatus"`
	InitialCaseStatus *string `json:"initialCaseStatus"`
}
