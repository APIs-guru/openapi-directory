package shared

type SummarizedCounter struct {
	Average *float64 `json:"Average"`
	Max     *float64 `json:"Max"`
	N       *int64   `json:"N"`
	Name    *string  `json:"Name"`
	Sum     *float64 `json:"Sum"`
	Unit    *string  `json:"Unit"`
}
