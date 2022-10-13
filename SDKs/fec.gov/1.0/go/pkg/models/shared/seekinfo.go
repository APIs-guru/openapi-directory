package shared

type SeekInfo struct {
	Count       *int32  `json:"count"`
	LastIndexes *string `json:"last_indexes"`
	Pages       *int32  `json:"pages"`
	PerPage     *int32  `json:"per_page"`
}
