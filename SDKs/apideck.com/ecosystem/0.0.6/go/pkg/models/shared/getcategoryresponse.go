package shared



type GetCategoryResponse struct {
    Data Category `json:"data"`
    Status string `json:"status"`
    StatusCode int64 `json:"status_code"`
    
}

