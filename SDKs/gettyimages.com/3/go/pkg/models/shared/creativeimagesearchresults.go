package shared



type CreativeImageSearchResults struct {
    AutoCorrections *AutoCorrections `json:"auto_corrections,omitempty"`
    Images []ImageSearchItemCreative `json:"images,omitempty"`
    RelatedSearches []RelatedSearch `json:"related_searches,omitempty"`
    ResultCount *int32 `json:"result_count,omitempty"`
    
}

