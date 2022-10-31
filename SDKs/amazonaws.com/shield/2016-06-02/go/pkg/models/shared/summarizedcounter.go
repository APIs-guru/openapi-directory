package shared

type SummarizedCounter struct {
	Average *float64 `json:"Average,omitempty"`
	Max     *float64 `json:"Max,omitempty"`
	N       *int64   `json:"N,omitempty"`
	Name    *string  `json:"Name,omitempty"`
	Sum     *float64 `json:"Sum,omitempty"`
	Unit    *string  `json:"Unit,omitempty"`
}
