package shared

type OrderSearchPagedCollection struct {
	Href     *string `json:"href"`
	Limit    *int32  `json:"limit"`
	Next     *string `json:"next"`
	Offset   *int32  `json:"offset"`
	Orders   []Order `json:"orders"`
	Prev     *string `json:"prev"`
	Total    *int32  `json:"total"`
	Warnings []Error `json:"warnings"`
}
