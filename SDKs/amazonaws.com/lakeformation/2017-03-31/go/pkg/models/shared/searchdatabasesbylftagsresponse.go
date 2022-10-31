package shared



type SearchDatabasesByLfTagsResponse struct {
    DatabaseList []TaggedDatabase `json:"DatabaseList,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

