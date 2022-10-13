package shared

type SearchResults struct {
	Items  *ItemList `json:"items"`
	Movies *ItemList `json:"movies"`
	Other  *ItemList `json:"other"`
	People []Person  `json:"people"`
	Term   string    `json:"term"`
	Total  int32     `json:"total"`
	Tv     *ItemList `json:"tv"`
}
