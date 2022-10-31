package shared



type PageInfo struct {
    ResultPerPage *int32 `json:"resultPerPage,omitempty"`
    StartIndex *int32 `json:"startIndex,omitempty"`
    TotalResults *int32 `json:"totalResults,omitempty"`
    
}

