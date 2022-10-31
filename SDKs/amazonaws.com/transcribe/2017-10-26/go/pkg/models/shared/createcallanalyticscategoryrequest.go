package shared



type CreateCallAnalyticsCategoryRequest struct {
    CategoryName string `json:"CategoryName"`
    Rules []Rule `json:"Rules"`
    
}

