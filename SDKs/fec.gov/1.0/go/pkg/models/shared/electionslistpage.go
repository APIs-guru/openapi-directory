package shared

type ElectionsListPage struct {
	Pagination *OffsetInfo     `json:"pagination"`
	Results    []ElectionsList `json:"results"`
}
