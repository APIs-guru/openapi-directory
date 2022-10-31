package shared

type SeekInfo struct {
	Count       *int32  `json:"count,omitempty"`
	LastIndexes *string `json:"last_indexes,omitempty"`
	Pages       *int32  `json:"pages,omitempty"`
	PerPage     *int32  `json:"per_page,omitempty"`
}
