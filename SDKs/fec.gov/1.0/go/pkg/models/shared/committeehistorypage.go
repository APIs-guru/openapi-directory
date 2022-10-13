package shared

type CommitteeHistoryPage struct {
	Pagination *OffsetInfo        `json:"pagination"`
	Results    []CommitteeHistory `json:"results"`
}
