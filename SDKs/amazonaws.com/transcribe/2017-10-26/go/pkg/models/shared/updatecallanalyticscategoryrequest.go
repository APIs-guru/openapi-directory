package shared



type UpdateCallAnalyticsCategoryRequest struct {
    CategoryName string `json:"CategoryName"`
    Rules []Rule `json:"Rules"`
    
}

