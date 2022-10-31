package shared



type ListRecordHistoryInput struct {
    AcceptLanguage *string `json:"AcceptLanguage,omitempty"`
    AccessLevelFilter *AccessLevelFilter `json:"AccessLevelFilter,omitempty"`
    PageSize *int64 `json:"PageSize,omitempty"`
    PageToken *string `json:"PageToken,omitempty"`
    SearchFilter *ListRecordHistorySearchFilter `json:"SearchFilter,omitempty"`
    
}

