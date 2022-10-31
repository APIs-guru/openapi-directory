package shared



type PageResultUserDefinedFieldDto struct {
    Count *int64 `json:"Count,omitempty"`
    Items []UserDefinedFieldDto `json:"Items,omitempty"`
    NextPageLink *string `json:"NextPageLink,omitempty"`
    
}

