package shared

type CommitteeReportsPage struct {
	Pagination *OffsetInfo        `json:"pagination,omitempty"`
	Results    []CommitteeReports `json:"results,omitempty"`
}
