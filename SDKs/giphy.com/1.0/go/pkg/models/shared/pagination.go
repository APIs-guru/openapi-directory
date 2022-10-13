package shared

type Pagination struct {
	Count      *int32 `json:"count"`
	Offset     *int32 `json:"offset"`
	TotalCount *int32 `json:"total_count"`
}
