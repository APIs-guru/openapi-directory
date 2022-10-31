package shared



type ResponseItem struct {
    Data map[string]interface{} `json:"data"`
    Message string `json:"message"`
    Result int64 `json:"result"`
    
}

