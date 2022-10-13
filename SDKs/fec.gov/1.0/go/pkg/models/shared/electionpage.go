package shared

type ElectionPage struct {
	Pagination *OffsetInfo `json:"pagination"`
	Results    []Election  `json:"results"`
}
