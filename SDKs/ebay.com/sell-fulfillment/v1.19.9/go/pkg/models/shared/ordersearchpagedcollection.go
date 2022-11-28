package shared

// OrderSearchPagedCollection
// This type contains the specifications for the collection of orders that match the search or filter criteria of a getOrders call. The collection is grouped into a result set, and based on the query parameters that are set (including the limit and offset parameters), the result set may included multiple pages, but only one page of the result set can be viewed at a time.
type OrderSearchPagedCollection struct {
	Href     *string `json:"href,omitempty"`
	Limit    *int32  `json:"limit,omitempty"`
	Next     *string `json:"next,omitempty"`
	Offset   *int32  `json:"offset,omitempty"`
	Orders   []Order `json:"orders,omitempty"`
	Prev     *string `json:"prev,omitempty"`
	Total    *int32  `json:"total,omitempty"`
	Warnings []Error `json:"warnings,omitempty"`
}
