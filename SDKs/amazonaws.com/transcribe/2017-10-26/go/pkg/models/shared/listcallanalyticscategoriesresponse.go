package shared



type ListCallAnalyticsCategoriesResponse struct {
    Categories []CategoryProperties `json:"Categories,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

