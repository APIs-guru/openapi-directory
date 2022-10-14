package shared

type CommitteeHistoryPage struct {
	Pagination *OffsetInfo        `json:"pagination,omitempty"`
	Results    []CommitteeHistory `json:"results,omitempty"`
}
