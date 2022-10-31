package shared

type EFilingsPage struct {
	Pagination *OffsetInfo `json:"pagination,omitempty"`
	Results    []EFilings  `json:"results,omitempty"`
}
