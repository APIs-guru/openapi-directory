package shared

type BatchRunReportsResponse struct {
	Kind    *string             `json:"kind"`
	Reports []RunReportResponse `json:"reports"`
}
