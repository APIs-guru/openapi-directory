package shared

type OffsetInfo struct {
	Count   *int32 `json:"count"`
	Page    *int32 `json:"page"`
	Pages   *int32 `json:"pages"`
	PerPage *int32 `json:"per_page"`
}
