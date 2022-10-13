package shared

type CommitteeReportsPage struct {
	Pagination *OffsetInfo        `json:"pagination"`
	Results    []CommitteeReports `json:"results"`
}
