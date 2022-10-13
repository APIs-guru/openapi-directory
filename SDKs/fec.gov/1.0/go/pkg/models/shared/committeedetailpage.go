package shared

type CommitteeDetailPage struct {
	Pagination *OffsetInfo       `json:"pagination"`
	Results    []CommitteeDetail `json:"results"`
}
