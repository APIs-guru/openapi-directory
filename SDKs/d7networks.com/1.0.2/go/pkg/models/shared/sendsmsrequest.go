package shared



type SendSmsRequest struct {
    Content string `json:"content"`
    From string `json:"from"`
    To int64 `json:"to"`
    
}

