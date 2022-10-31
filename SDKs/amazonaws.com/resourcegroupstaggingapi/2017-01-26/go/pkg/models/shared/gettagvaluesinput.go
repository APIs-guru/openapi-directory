package shared



type GetTagValuesInput struct {
    Key string `json:"Key"`
    PaginationToken *string `json:"PaginationToken,omitempty"`
    
}

