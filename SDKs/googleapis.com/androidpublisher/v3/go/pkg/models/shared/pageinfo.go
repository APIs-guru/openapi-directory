package shared

// PageInfo
// Information about the current page. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned.
type PageInfo struct {
	ResultPerPage *int32 `json:"resultPerPage,omitempty"`
	StartIndex    *int32 `json:"startIndex,omitempty"`
	TotalResults  *int32 `json:"totalResults,omitempty"`
}
