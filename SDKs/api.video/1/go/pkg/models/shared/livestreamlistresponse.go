package shared



type LiveStreamListResponse struct {
    Data []LiveStream `json:"data"`
    Pagination Pagination `json:"pagination"`
    
}

