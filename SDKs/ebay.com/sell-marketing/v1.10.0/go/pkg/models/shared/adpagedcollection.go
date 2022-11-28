package shared

// AdPagedCollection
// This type defines the fields that paginate the ads returned by the request. The entire result set consists of 0 or more sequenced response pages, where each page consists of 0 or more items from the complete result set.
type AdPagedCollection struct {
	Ads    []Ad    `json:"ads,omitempty"`
	Href   *string `json:"href,omitempty"`
	Limit  *int32  `json:"limit,omitempty"`
	Next   *string `json:"next,omitempty"`
	Offset *int32  `json:"offset,omitempty"`
	Prev   *string `json:"prev,omitempty"`
	Total  *int32  `json:"total,omitempty"`
}
