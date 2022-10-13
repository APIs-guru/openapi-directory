package shared

type TotalByOfficePage struct {
	Pagination *OffsetInfo     `json:"pagination"`
	Results    []TotalByOffice `json:"results"`
}
