package shared

type PageInfo struct {
	ResultPerPage *int32 `json:"resultPerPage"`
	StartIndex    *int32 `json:"startIndex"`
	TotalResults  *int32 `json:"totalResults"`
}
