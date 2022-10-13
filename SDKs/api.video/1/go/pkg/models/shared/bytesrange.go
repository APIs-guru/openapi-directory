package shared

type BytesRange struct {
	From  *int64 `json:"from"`
	To    *int64 `json:"to"`
	Total *int64 `json:"total"`
}
