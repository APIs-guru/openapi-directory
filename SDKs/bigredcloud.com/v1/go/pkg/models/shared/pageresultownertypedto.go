package shared



type PageResultOwnerTypeDto struct {
    Count *int64 `json:"Count,omitempty"`
    Items []OwnerTypeDto `json:"Items,omitempty"`
    NextPageLink *string `json:"NextPageLink,omitempty"`
    
}

