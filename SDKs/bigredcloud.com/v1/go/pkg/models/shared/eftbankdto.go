package shared



type EftBankDto struct {
    Branch *string `json:"branch,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    SortCode *string `json:"sortCode,omitempty"`
    
}

