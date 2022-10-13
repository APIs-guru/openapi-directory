package shared

type EFilingsPage struct {
	Pagination *OffsetInfo `json:"pagination"`
	Results    []EFilings  `json:"results"`
}
